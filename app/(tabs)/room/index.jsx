import { use, useContext, useEffect, useState } from "react";
import { Alert, Button, Image,Pressable,ScrollView,StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {styles,root, colors} from '../../components/style';
import { useRoute } from "@react-navigation/native";
import { portal } from "../_layout";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";



export default function Room() {

  const {rooms,setRooms}=useContext(portal)
  // console.log(rooms)

  // const [rooms,setRooms]=useState([
  //   {'id':'101','name':{'h1':'Living Room','h2':'45','h3':'4',},'on':true},
  //   {'id':'102','name':{'h1':'Kitchen','h2':'10','h3':'2',},'on':false},
  //   {'id':'103','name':{'h1':'Dining','h2':'12','h3':'6',},'on':false},
  //   {'id':'104','name':{'h1':'Outdoor','h2':'60','h3':'12',},'on':false},
  //   {'id':'105','name':{'h1':'Garage','h2':'45','h3':'4',},'on':false},
  // ])

  const setActive=(e)=>{
    setRooms(f=>(
      // f.map(g=>g.id===e ? g.on==false ? { ...g,on:true} : g.on==true ? { ...g,on:false} : g : g )
      f.map(g=>g.id===e ? g.on==false ? { ...g,on:true} : { ...g,on:false} : g )
    ))
    // console.log(rooms,e)
  }


    // const increaseQuantity=(items)=>{
    //         setCart((cart)=>({...cart,
    //         cart:cart.cart.map(
    //           item=>item.id===items.id ? {...item,quantity:item.quantity+1}:item),
    //       }))
    //     }




  return (
    <ScrollView style={{padding:24}}>
      {
        rooms.map((item,index)=>(
          <Pressable key={index} onPress={()=>setActive(item.id)} >
          <View  style={[f.card,item.on ?{backgroundColor:colors.primary}:{backgroundColor:colors.secondary},{display:'flex',flexDirection:'row'}]}>
              <View style={{flex:5}}>
                <Text style={[root.heading1,item.on ? root.text_white : root.text_black]}>{item.name.h1}</Text>
                <Text style={[root.heading2,item.on ? root.text_white : root.text_black]}>{item.name.h2} Watt</Text>
                <Text style={[root.heading3,item.on ? root.text_white : root.text_black]}>{item.name.h3} Device</Text>
              </View>
              <View style={[styles.middle,{flex:1}]}>
                <TouchableOpacity>
                  <Text style={[f.circle,styles.middle]} onPress={()=>router.navigate({pathname:'room/room_devices',params:({id:item.id})})}>
                    <MaterialIcons name="arrow-forward-ios" size={8} color="black"></MaterialIcons>
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
          </Pressable>
        ))
      }
    </ScrollView>
  )
}





const f = StyleSheet.create({
  card:{
    color:'#fff',
    padding:12,
    marginVertical:8,
    // backgroundColor:colors.secondary,
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




