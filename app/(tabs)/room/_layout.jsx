import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function RoomLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{presentation:'modal', title:'Room',
      headerRight:()=>(
        <TouchableOpacity onPress={()=>router.navigate('room/add_rooms')}>
          <View style={{marginRight:12}}>
            <AntDesign size={18}  name="plus" color={"#000"} />
          </View>
        </TouchableOpacity>
      ),
    }} />
    <Stack.Screen name="room_devices" options={{presentation:'modal', title:'All device'}} />
    <Stack.Screen name="add_rooms" options={{presentation:'modal', title:'Add Room'}} />
    <Stack.Screen name="device_info" options={{presentation:'modal', title:'Device info'}} />
  </Stack>
);
}

