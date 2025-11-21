import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, root, styles } from "../../components/style";
import Hr from "../../components/hr";
import { Ionicons } from "@expo/vector-icons";
import { portal } from "../_layout";
import { useContext } from "react";

export default function Profile() {

  // const {profile,SetProfile}=useContext(portal)
  const profile={
    id:'AB1',name:'Terry',email:"terry@gmail.com",phone:'123456789',
    address:'123st Street Road, Mumbai',
    user:{user_id:'Terry',password:'AB123'} 
  }
  


  return (
    <ScrollView>
      <View style={[styles.middle,{height:'20dvh',marginTop:12,marginBottom:24}]}>
        <View style={[f.circle,{backgroundColor:'#928e8eff'}]}></View>
      </View>
      <Hr />
      <View style={{paddingHorizontal:24}}>
        <View style={[f.card,{marginBottom:12}]}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={root.heading2}>Personal Info</Text>
            <TouchableOpacity style={[root.heading3,styles.middle]}>
                <Ionicons name="pencil-outline" size={14}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:18}}>
            <View style={{display:'flex',flexDirection:'row',marginVertical:4}}>
              <Text style={[root.heading2,styles.middle,{marginRight:24}]}>
                <Ionicons name="person-outline" size={24}></Ionicons>
              </Text>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={[root.heading3,]}>Name</Text>
                <Text style={[root.heading2,]}>{profile.name}</Text>
              </View>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginVertical:4}}>
              <Text style={[root.heading2,styles.middle,{marginRight:24}]}>
                <Ionicons name="mail-outline" size={24}></Ionicons>
              </Text>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={[root.heading3,]}>Email</Text>
                <Text style={[root.heading2,]}>{profile.email}</Text>
              </View>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginVertical:4}}>
              <Text style={[root.heading2,styles.middle,{marginRight:24}]}>
                <Ionicons name="phone-portrait-outline" size={24}></Ionicons>
              </Text>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={[root.heading3,]}>Phone</Text>
                <Text style={[root.heading2,]}>{profile.phone}</Text>
              </View>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginVertical:4}}>
              <Text style={[root.heading2,styles.middle,{marginRight:24}]}>
                <Ionicons name="home-outline" size={24}></Ionicons>
              </Text>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={[root.heading3,]}>Address</Text>
                <Text style={[root.heading2,]}>{profile.address}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[f.card,{backgroundColor:colors.bg_white_80}]}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={root.heading2}>Account info</Text>
            <TouchableOpacity style={[root.heading3,styles.middle]}>
                <Ionicons name="pencil-outline" size={14}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:18}}>
            <View style={{display:'flex',flexDirection:'row',marginVertical:4}}>
              <Text style={[root.heading2,styles.middle,{marginRight:24}]}>
                <Ionicons name="person-outline" size={24}></Ionicons>
              </Text>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={[root.heading3,]}>UserID</Text>
                <Text style={[root.heading2,]}>{profile.user.user_id}</Text>
              </View>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginVertical:4}}>
              <Text style={[root.heading2,styles.middle,{marginRight:24}]}>
                <Ionicons name="lock-closed-outline" size={24}></Ionicons>
              </Text>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={[root.heading3,]}>Password</Text>
                <Text style={[root.heading2,]}>********</Text>
              </View>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}


const f = StyleSheet.create({
  card:{
    color:'#fff',
    padding:12,
    marginVertical:8,
    backgroundColor:colors.secondary,
    // height:100,
    width:'100%',
    borderRadius:8,
    display:'flex',
  },
  circle:{
    height:'100%',
    aspectRatio:1/1,
    color:colors.bg_black,
    backgroundColor:colors.secondary,
    // backgroundColor:'hsla(0, 100%, 50%, 1.00)',
    borderRadius:'100%'
  }
});