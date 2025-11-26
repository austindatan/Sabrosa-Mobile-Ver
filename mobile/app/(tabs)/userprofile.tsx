//@ts-nocheck
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/UserProfile";
import { useRouter } from "expo-router";
import OrderHistoryCard from "../components/OrderCard";

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("  Orders  ");

  const tabs = ["  Orders  ", "History", "Favorites"];

  const handleTabPress = (tabLabel: string) => {
    setActiveTab(tabLabel);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/initialization_assets/new.png")}
          style={styles.headerBg}
        />

        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.iconCircle}
            onPress={() => router.push("/products/User_Settings")}
          >
            <Ionicons name="settings-sharp" size={20} color="#ff4d92" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="pencil-sharp" size={20} color="#ff4d92" />
          </TouchableOpacity>
        </View>

        <Image
          source={require("../../assets/images/initialization_assets/user_avatar.png")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>Austin Dilan</Text>

      <View style={styles.tabRow}>
        {tabs.map((t) => (
          <TouchableOpacity key={t} onPress={() => handleTabPress(t)}>
            <View style={styles.tabItem}>
              <Text style={[styles.tabText, activeTab === t ? styles.activeTabText : null]}>
                {t}
              </Text>
              {activeTab === t && <View style={styles.tabUnderline} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "  Orders  " && (
        <View style={styles.content}>
          <OrderHistoryCard
            item={{
              name: "Tropical Mango",
              price: 195,
              quantity: 2, // optional, you can remove it if unused
              image: require("../../assets/images/initialization_assets/food/product1.png"),

              // NEW FIELDS
              date: "Jan 20, 2025",
              status: "Delivered",
              brandImage: require("../../assets/images/initialization_assets/logo/byronbay_logo.png"),
            }}
            onPress={() => console.log("Open order details")}
          />

      </View>
      )}
    </View>
  );
}
