import { Text, View } from "react-native";
import {styles,root,colors} from "./components/style";
import Hr from "./components/hr";
import New_Device_Card from "./components/new_device_card";
import { useState } from "react";

export default function Pair_device() {

  const [selectedIndex,setSelectedIndex]=useState('')
  const [device,setDevice]=useState(['101','102','103'])


  return (
    <View style={{height:'100%'}}>
      <View>
        <Text style={[root.heading1,{paddingHorizontal:24,paddingTop:12}]}>Pair New Device</Text>
        <Hr></Hr>  
      </View>
      <View style={{height:'100%',padding:24}}>
        <View style={[styles.grid,{paddingHorizontal:24,paddingVertical:12,backgroundColor:colors.bg_white_80,height:'80%',flexDirection:'column',justifyContent:'flex-start',borderRadius:24}]}>
          {
            device.map((item,index)=>(
              <New_Device_Card key={index} item={item} index={index} selectedIndex={selectedIndex} onPress={setSelectedIndex}/>             
            ))
          }
        </View>
      </View>
    </View>
  )
}
