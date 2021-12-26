// In App.js in a new project

import * as React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const screen = Dimensions.get("screen");

import Home from "../screens/home";
import Locaion from "../screens/location";
import Add from "../screens/home/add";
import Save from "../screens/save";
import Profile from "../screens/prifle";
import DrawerContent from "../screens/drawerontent";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        showLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? (
              <Feather name="home" size={24} color="green" />
            ) : (
              <Feather name="home" size={24} color="#000" />
            );
          } else if (route.name === "Locaion") {
            iconName = focused ? (
              <Ionicons name="location-sharp" size={20} color="green" />
            ) : (
              <Ionicons name="location-sharp" size={20} color="#000" />
            );
          } else if (route.name === "Add") {
            iconName = focused ? (
              <Ionicons name="add-circle-sharp" size={50} color="green" />
            ) : (
              <Ionicons name="add-circle-sharp" size={50} color="#000" />
            );
          } else if (route.name === "Save") {
            iconName = focused ? (
              <FontAwesome5 name="heart" size={20} color="green" />
            ) : (
              <FontAwesome5 name="heart" size={20} color="#000" />
            );
          } else if (route.name === "Profile") {
            iconName = focused ? (
              <FontAwesome name="user-circle" size={20} color="green" />
            ) : (
              <FontAwesome name="user-circle" size={20} color="#000" />
            );
          }

          // You can return any component that you like here!
          return iconName;
        },
        tabBarActiveTintColor: "#EB4966",
        tabBarInactiveTintColor: "#94A4B5",
        tabBarStyle: { backgroundColor: "#fff", height: 70 },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Locaion" component={Locaion} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Save" component={Save} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


function HomeDrawer() {
  
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      overlayColor="transparent"
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        flex:1,
        width: "75%",
        height: 320,
        marginTop: 170,
        borderRightWidth: 0,
        backgroundColor: 'transparent',
        
      }}
      screenOptions={{
        drawerPosition:"left",
        drawerType: screen.width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}  screenOptions={{swipeEnabled: true}}/>
   
    </Drawer.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeDrawer"
          component={HomeDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
