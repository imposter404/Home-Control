import { useCallback, useContext, useEffect, useState } from "react";
import { Alert, Button, Image,Pressable,StyleSheet, Text, TextInput, View } from "react-native";
import {styles,root, colors} from './style';
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


export default function Room_Card({h1,h2,h3,id,on,set}) {



  const onPess=(e)=>{
    set(prevItems=>prevItems.map(item=>
      item.id===e ? item.on===true ? {...item,on:false} : {...item,on:true} : item
    ))
  }


  return (
      <View style={[f.card,{flex:'47%',boxShadow:'0px 7px 8px -4px hsla(0, 0%, 50%, 1.00)',display:'flex',backgroundColor: on ? colors.primary : colors.secondary }]}>
        <Pressable onPress={()=>onPess(id)}>
        <Text style={[root.heading1,root.text_white,{flex:'auto',overflow:'hidden',color: on ? colors.text_white:colors.text_black}]}>{h1}</Text>
        <Text style={[root.heading2,root.text_white,{flex:'auto',overflow:'hidden',color: on ? colors.text_white:colors.text_black}]}>{h2} Watt</Text>
        <Text style={[root.heading3,root.text_white,{flex:'auto',overflow:'hidden',color: on ? colors.text_white:colors.text_black}]}>{h3} Device</Text>
        </Pressable>
      </View>
  )
}

const f = StyleSheet.create({
  card:{
    color:'#fff',
    padding:12,
    height:100,
    width:'100%',
    borderRadius:8,
  },
});




