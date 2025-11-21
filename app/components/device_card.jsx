import { useEffect, useState } from "react";
import { Alert, Button, Image,StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {styles,root, colors} from './style';
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";


export default function Device_Card({h1,h3}) {
  return (
    <View style={[f.card,{flexDirection:'row',justifyContent:'space-between'}]}>
      <View>
        <Text style={[root.heading3,{flex:1}]}>{h1}</Text>
        <Text style={[root.heading1,{flex:3}]}>{h3}</Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity onPress={()=>router.navigate('room/device_info')}>
          <Text style={[f.circle,styles.middle]}>
            <MaterialIcons name="arrow-forward-ios" size={8} color="black"></MaterialIcons>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const f = StyleSheet.create({
  card:{
    color:'#fff',
    padding:12,
    // backgroundColor:colors.bg_white_80,
    borderWidth:1,
    borderColor:'hsla(0, 0%, 60%, 1.00)',
    height:100,
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
  }
});




