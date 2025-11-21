import { useEffect, useState } from "react";
import { Alert, Button, Image,Pressable,StyleSheet, Text, TextInput, View } from "react-native";
import {styles,root,colors} from './style';


export default function Pills({id,text,active,set}) {

  const setActive=()=>{
    console.log(id)
    set(id)
  }

  return (
    <Pressable onPress={()=>setActive()}>
      <View style={[f.pill,styles.middle,id==active ? {backgroundColor:colors.bg_black} : {backgroundColor:colors.bg_white_80}]}>
        <Text style={id==active ? root.text_white : root.text_black}>{text}</Text>
      </View>
    </Pressable>
  )
}

export function Pills_Add({text}) {
  return (
      <View style={[f.pill,f.circle,styles.middle,{backgroundColor:colors.bg_white_80}]}>
        <Text style={root.text_black}>+</Text>
      </View>
  )
}


const f = StyleSheet.create({
  pill:{
    paddingHorizontal:18,
    height:35,
    borderRadius:50,
    width:'fit-content',
  },
  circle:{
    // width:35,
    height:35,
    aspectRatio:1/1,
  }
});




