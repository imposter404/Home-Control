import { AntDesign, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { router, Stack, Tabs } from "expo-router";
import { createContext, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";

export const portal=createContext()

export default function RootLayout() {
  const [rooms,setRooms]=useState([
    {'id':'101','name':{'h1':'Living Room','h2':'45','h3':'4',},'on':true},
    {'id':'102','name':{'h1':'Kitchen','h2':'10','h3':'2',},'on':false},
    {'id':'103','name':{'h1':'Dining','h2':'12','h3':'6',},'on':false},
    {'id':'104','name':{'h1':'Outdoor','h2':'60','h3':'12',},'on':false},
    {'id':'105','name':{'h1':'Garage','h2':'45','h3':'4',},'on':false},
  ])

  const [device,setDevice]=useState([
    {'id':'401',"name":'Light 1',"room":'101','on':true},
    {'id':'402',"name":'Light 2',"room":'101','on':true},
    {'id':'403',"name":'Light 3',"room":'101','on':true},
    {'id':'404',"name":'Light 4',"room":'101','on':true},
    {'id':'405',"name":'Light 5',"room":'102','on':true},
    {'id':'406',"name":'Light 6',"room":'102','on':true},
    {'id':'407',"name":'Light 7',"room":'102','on':true},
    {'id':'408',"name":'Light 8',"room":'103','on':true},
    {'id':'409',"name":'Light 9',"room":'103','on':true},
    {'id':'410',"name":'Light 10',"room":'103','on':true},
    {'id':'411',"name":'Light 11',"room":'104','on':true},
    {'id':'412',"name":'Light 12',"room":'105','on':true},
  ])

  const [profile,SetProfile]=useState({
    'id':'AB1','name':'Terry','email':"terry@gmail.com",
    'phone':'123456789','address':'123st Street Road, Mumbai',
    'user':{'user_id':'Terry','password':'AB123'} 
  })



  const portalValues={rooms,setRooms,device,setDevice,profile,SetProfile}

  return (
  <>
  <portal.Provider value={portalValues}>

  <Tabs initialRouteName="index" screenOptions={{tabBarActiveTintColor:'black',tabBarStyle:{height:'auto',padding:12}}}>
    <Tabs.Screen 
      name="index"
      options={{title:'Home',
        tabBarIcon:({color})=><FontAwesome size={28} name="home" color={color}/>,
        headerLeft:({color})=>(
          <TouchableOpacity>
            <View style={{marginHorizontal:12}}>
                <FontAwesome6 size={18} name="bars" color={color} />
            </View>
          </TouchableOpacity>
        ),
        headerRight:()=>(
          <TouchableOpacity onPress={()=>router.navigate('/pair_device')}>
            <View style={{marginRight:12}}>
              <AntDesign size={18}  name="plus" color={"#000"} />
            </View>
          </TouchableOpacity>
        ),
      }}
    />
    <Tabs.Screen 
      name="room"
      options={{title:'Room',
        headerShown:false,
        tabBarIcon:({color})=><FontAwesome6 size={28} name="house-signal" color={color}/>
      }}
    />
    <Tabs.Screen 
      name="profile/profile" 
      options={{title:'Profle',
        tabBarIcon:({color})=><FontAwesome6 size={28} name="user-circle" color={color}/>
      }}
    />
  </Tabs>
  </portal.Provider>
  </>
);
}

 