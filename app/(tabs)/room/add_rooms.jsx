import {StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import {styles,root,colors} from "../../components/style";
import Hr from "../../components/hr";
import { useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { portal } from "../_layout";


export default function Add_Rooms() {

  return (
    <View>
      <Text>123</Text>
      <TextInput placeholder="Enter Room Name"></TextInput>
    </View>
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
  }
})