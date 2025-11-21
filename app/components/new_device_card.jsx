import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Image,Pressable,StyleSheet, Text, TextInput, View } from "react-native";
import {styles,root, colors} from './style';
import Animated, { Easing, FadeInLeft, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


export default function New_Device_Card({key,item,index,selectedIndex,onPress}) {
  const height = useSharedValue(70);
  const color = useSharedValue('#00000000');
  useEffect(() => {
    height.value = withTiming(selectedIndex === index ? 160 : 70, { duration: 300 });
    color.value = withTiming(selectedIndex === index ? colors.secondary :'#00000000' , { duration: 300 });
  }, [selectedIndex]);
  
  console.log(index,selectedIndex)

  const toggleHight = useAnimatedStyle(() => {
    return {
      height: height.value,
      backgroundColor:color.value
    };
  });




  return (
      <Pressable onPress={()=>onPress(index)} >
        <Animated.View style={[f.card,toggleHight, {flexDirection:'column',justifyContent:'space-between',marginVertical:12,overflow:'hidden'}]}>
          <Text style={[root.heading3,{flex:1}]}>{index}</Text>
          <Text style={[root.heading1,{flex:3}]}>{index}</Text>
          <View style={[{display:'flex',justifyContent:'center',alignContent:'center',flex:3,paddingTop:30,paddingBottom:10}]}>
            <View style={{display:'flex',justifyContent:'center',alignSelf:'center',backgroundColor:'#000',paddingVertical:12,paddingHorizontal:8,borderRadius:50,width:"80%"}}>
              <Text style={{color:'#ffffffff',display:'flex',alignSelf:'center'}}>Connect</Text>
            </View>
          </View>
        </Animated.View>
      </Pressable>
  )
}

const f = StyleSheet.create({
  card:{
    padding:12,
    borderWidth:1,
    borderColor:'hsla(0, 0%, 60%, 1.00)',
    width:'100%',
    borderRadius:8,
    display:'flex',
  },
  circle:{
    height:28,
    aspectRatio:1/1,
    color:colors.bg_black,
    backgroundColor:'hsla(0, 0%, 90%, 1.00)',
    borderRadius:50
  },
  // height_full:{
  //   height:160
  // },
  // height_collapsed:{
  //   height:'auto'
  // }
});




