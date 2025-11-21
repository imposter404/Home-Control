import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import {styles,root,colors} from "../../components/style";
import Hr from "../../components/hr";
import { useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { portal } from "../_layout";
import { router } from "expo-router";


export default function Room_devices(params) {

  const route=useRoute().params

  const {rooms,setRooms,device}=useContext(portal)
  const [room_Details,setRoom_details]=useState(rooms.find((e)=>e.id==route.id))

  useEffect(()=>{
    setRoom_details(rooms.find((e)=>e.id==route.id))
    console.log('pp')    
  },[rooms])
  const setActive=(e)=>{
    setRooms(f=>(
      f.map(g=>g.id===e ? g.on==false ? { ...g,on:true} : { ...g,on:false} : g )
    ))
  }


  

  return (
    <View style={{padding:0}}>
      <TouchableOpacity onPress={()=>setActive(route.id)}>
        <View style={[room_Details.on ? {backgroundColor:colors.primary}:{ backgroundColor:colors.secondary},{padding:12,paddingVertical:24,marginBottom:12}]}>
          <Text style={[root.heading1,root.text_white,room_Details.on ? root.text_white : root.text_black]}>{room_Details.name.h1} </Text>
          <Text style={[root.heading2,root.text_white,room_Details.on ? root.text_white : root.text_black]}>{room_Details.name.h2} Watt</Text>
          <Text style={[root.heading3,root.text_white,room_Details.on ? root.text_white : root.text_black]}>{room_Details.name.h3} Device</Text>
        </View>
      </TouchableOpacity>
      <Hr/>
      <View style={{paddingHorizontal:24,paddingVertical:8,display:'flex',gap:12}}>
        {
          device.filter(e=>e.room==route.id).map((item,index)=>(
            <View key={index} style={[f.card,{flexDirection:'row',justifyContent:'space-between',}]}>
              <View style={{display:'flex',justifyContent:'space-between',paddingVertical:8}}>
                <Text style={[root.heading1,{flex:1,paddingVertical:4}]}>Light Switch 1</Text>
                <Text style={[root.heading3,{flex:1,paddingVertical:4}]}>4 Watt</Text>
              </View>
              <View style={styles.middle}>
                <TouchableOpacity>
                  <Text style={[f.circle,styles.middle]} onPress={()=>router.navigate('room/device_info')}>
                    <MaterialIcons name="arrow-forward-ios" size={8} color="black"></MaterialIcons>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        }
      </View>
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