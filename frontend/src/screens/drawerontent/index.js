import React from "react";
import { View, Image, Text } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  Animated
} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem,useDrawerProgress } from "@react-navigation/drawer";
import styles from "./styles";
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props}
    style={{
      backgroundColor: '#fff',
      flex: 1,
      width: '100%',
      height: '80%',
      // padding: 20,
  }}>
      {/* <==========================> --- <==========================> */}
      <View style={styles.sideMenuContainer}>
        {/* <DrawerItemList {...props} /> */}
        {/* <Drawer.Section /> */}
        {/* <==========================> --- <==========================> */}
        {/* <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.closeDrawer()}> */}
        {/* <Ionicons name="menu" size={30} color="white" /> */}
        {/* </TouchableOpacity> */}

        <Image
          source={require("./../../../assets/images/profile.jpg")}
          style={styles._profile_img}
        />
        <Text style={styles._user_name}>Hishmat Rai</Text>
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
              <Feather name="user" size={24} color="black" />
                <Text style={styles._pages}>My Profile</Text>
              </View>
            );
          }}
          // onPress={() => props.navigation.navigate("Home")}
        />
          <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <FontAwesome name="comment-o" size={24} color="black" />
                <Text style={styles._pages}>Messsage</Text>
              </View>
            );
          }}
          // onPress={() => props.navigation.navigate("Home")}
        />
         <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
               <MaterialIcons name="event" size={24} color="black" />
                <Text style={styles._pages}>Event</Text>
              </View>
            );
          }}
          // onPress={() => props.navigation.navigate("Home")}
        />
      </View>
    </DrawerContentScrollView>
  );
}