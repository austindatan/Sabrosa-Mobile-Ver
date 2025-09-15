import { Stack, Tabs } from "expo-router";
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1F27A6',
        tabBarInactiveTintColor: '#8C8C8C',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'DMSans-Medium',
        },
      }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-sharp" size={size} color={color} />
        ),
      }}
      />

      <Tabs.Screen
      name="cookie"
      options={{
        title: "Browse",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="fast-food-sharp" size={size} color={color} />
        ),
      }}
      />

      <Tabs.Screen
      name="userprofile"
      options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-sharp" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  )
}