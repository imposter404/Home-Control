import { createContext,useContext,useState } from "react";
import { Alert, Button, Image,ScrollView,StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Room_Card from "../components/room_card";
import {styles,root,colors} from "../components/style";
import Hr from "../components/hr";
import Pills, { Pills_Add } from "../components/pills";
import Device_Card from "../components/device_card";
import { Link, router } from "expo-router";
import { portal } from "./_layout";



export default function Index() {
  const {rooms,setRooms}=useContext(portal)
  const {device,setDevice}=useContext(portal)

  // const [rooms,setRooms]=useState([
  //   {'id':'101','name':{'h1':'Living Room','h2':'45','h3':'4',},'on':false},
  //   {'id':'102','name':{'h1':'Kitchen','h2':'10','h3':'2',},'on':false},
  //   {'id':'103','name':{'h1':'Dining','h2':'12','h3':'6',},'on':false},
  //   {'id':'104','name':{'h1':'Outdoor','h2':'60','h3':'12',},'on':false},
  //   {'id':'105','name':{'h1':'Garage','h2':'45','h3':'4',},'on':false},
  // ])

  // const [device,setDevice]=useState([
  //   {'id':'401',"name":'Light 1',"room":'101','on':true},
  //   {'id':'402',"name":'Light 2',"room":'101','on':true},
  //   {'id':'403',"name":'Light 3',"room":'101','on':true},
  //   {'id':'404',"name":'Light 4',"room":'101','on':true},
  //   {'id':'405',"name":'Light 5',"room":'102','on':true},
  //   {'id':'406',"name":'Light 6',"room":'102','on':true},
  //   {'id':'407',"name":'Light 7',"room":'102','on':true},
  //   {'id':'408',"name":'Light 8',"room":'103','on':true},
  //   {'id':'409',"name":'Light 9',"room":'103','on':true},
  //   {'id':'410',"name":'Light 10',"room":'103','on':true},
  //   {'id':'411',"name":'Light 11',"room":'104','on':true},
  //   {'id':'412',"name":'Light 12',"room":'105','on':true},
  // ])

  const [pillSelected,setPillSelected]=useState('100') // all device





  return (
    <ScrollView stickyHeaderIndices={[3]} >
      {/* <View style={[styles.grid,styles.center,{paddingVertical:'12px',paddingHorizontal:'24px'}]}>
        <Text>1</Text>
        <Text style={[root.heading1,root.text_black]}>HOME</Text>
        <Text>3</Text>
      </View> */}

      <View style={[styles.grid,styles.baseline,root.text_black,{paddingVertical:'12px',paddingHorizontal:'24px'}]}>
        <Text style={[root.heading2]}>Rooms</Text>
        <Text style={[root.heading3]} onPress={()=>router.navigate('/room')}>View more</Text>
      </View>



      <View style={[styles.grid,styles.center,{paddingVertical:'12px',paddingHorizontal:'24px'}]}>
        <View style={[styles.grid,{width:'100%',gap:'16px',flexWrap:'wrap'}]}>
          {rooms.slice(0,4).map((item,index)=>(
            <Room_Card key={index} id={item.id} h1={item.name.h1} h2={item.name.h2} h3={item.name.h3} on={item.on} set={setRooms}/>
          ))}
        </View>
      </View>
      <Hr/>
      <View style={{paddingVertical:12,backgroundColor:'#f2f2f2'}}>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} contentContainerStyle={{display:'flex',gap:8,marginHorizontal:24}}>
          <TouchableOpacity onPress={()=>router.navigate('room/add_rooms')}>
            <Pills_Add />
          </TouchableOpacity>
          <Pills key={0} id={'100'} text={'All Device'} active={pillSelected} set={setPillSelected} />
          {
            rooms.map((item,index)=>(
              <Pills key={index+1} id={item.id} text={item.name.h1} active={pillSelected} set={setPillSelected} />
            ))
          }
        </ScrollView>
      </View>
      <View style={{display:'flex',gap:8,paddingHorizontal:'24px',paddingTop:12}}>
          {
            pillSelected ==='100' ? 
            device.map((item,index)=>(
              <Device_Card key={index} h1={rooms.find(e=>e.id=='101').name.h1} h3={item.name}/>
            ))
            :
            device.filter(e=>e.room==pillSelected).map((item,index)=>(
              <Device_Card key={index} h1={rooms.find(e=>e.id=='101').name.h1} h3={item.name}/>
            ))
          }
      </View>
      <View style={{height:200}}></View>
    </ScrollView>
  )
}