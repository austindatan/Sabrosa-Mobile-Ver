// @ts-nocheck
import { Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";

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
  />
);

export default function TabsLayout() {
  const pathname = usePathname();
  const hideTabBar = pathname.includes("/(links)/");

  // 👇 animated value for showing/hiding tab bar
  const tabBarTranslateY = useRef(new Animated.Value(0)).current;

  // 👇 listen to visibility change events from useHideOnScroll()
  useEffect(() => {
    const listener = (isVisible) => {
      Animated.timing(tabBarTranslateY, {
        toValue: isVisible ? 0 : 100, // hide by moving down
        duration: 250,
        useNativeDriver: true,
      }).start();
    };

    global.tabVisibility?.on("change", listener);
    return () => global.tabVisibility?.off("change", listener);
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF6C9B",
        tabBarInactiveTintColor: "#8C8C8C",
        tabBarStyle: hideTabBar
          ? { display: "none" }
          : {
              transform: [{ translateY: tabBarTranslateY }],
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
              justifyContent: "center",
              alignItems: "center",
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
        name="Home"
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
        name="Cookie"
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
            <TabLabel label="Cookie" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
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
            <TabLabel label="Cart" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="UserProfile"
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
            <TabLabel label="Profile" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(links)"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
