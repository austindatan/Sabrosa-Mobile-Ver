// @ts-nocheck
import { Stack, Tabs } from "expo-router";
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const TabLabel = ({ label, focused, color }) => (
  <View
    style={
      focused
        ? {
            backgroundColor: "#FF6C9B",
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 20,
          }
        : null
    }
  >
  </View>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF6C9B",
        tabBarInactiveTintColor: "#8C8C8C",
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          paddingTop: 10,
          backgroundColor: "#FFEBF0",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 30,
        },
        tabBarItemStyle: {
          flex: 0,
          width: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "DMSans-Medium",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <TabLabel label="Home" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cookie"
        options={{
          title: "Cookie",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "fast-food" : "fast-food-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <TabLabel label="Home" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <TabLabel label="Home" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="userprofile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <TabLabel label="Home" focused={focused} color={color} />
          ),
        }}
      />

    </Tabs>
  )
}