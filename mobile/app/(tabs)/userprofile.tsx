//@ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/UserProfile";
import { useRouter } from "expo-router";
import OrderHistoryCard from "../components/OrderCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import config from "../../config";

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("  Orders  ");
  const tabs = ["  Orders  ", "History", "Favorites"];

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");

        if (!userId) {
          console.log("No user found in storage.");
          setLoading(false);
          return;
        }

        const userRes = await axios.get(`${config.API_BASE_URL}/api/auth/users/${userId}`);
        setUser(userRes.data);

        const orderRes = await axios.get(`${config.API_BASE_URL}/api/order/user/${userId}`);
        setOrders(orderRes.data);

      } catch (err) {
        console.log("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#ff4d92" />
      </View>
    );
  }

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
          source={
            user?.profileImage
              ? { uri: user.profileImage }
              : require("../../assets/images/initialization_assets/user_avatar.png")
          }
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>
        {user?.firstName} {user?.lastName}
      </Text>

      <Text style={[styles.emailname, { fontSize: 13, marginTop: 0, opacity: 0.6, color: "#424242a1"}]}>
        {user?.email}
      </Text>

      <View style={styles.tabRow}>
        {tabs.map((t) => (
          <TouchableOpacity key={t} onPress={() => setActiveTab(t)}>
            <View style={styles.tabItem}>
              <Text style={[styles.tabText, activeTab === t && styles.activeTabText]}>
                {t}
              </Text>
              {activeTab === t && <View style={styles.tabUnderline} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "  Orders  " && (
          <FlatList
              data={orders}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                  <OrderHistoryCard
                      item={{
                          ...item,
                          totalQuantity: item.items.reduce(
                              (acc, current) => acc + current.quantity,
                              0
                          ),
                          date: new Date(item.createdAt).toLocaleDateString(),
                      }}
                      onPress={() => console.log("Open order details for:", item._id)}
                  />
              )}
              contentContainerStyle={styles.content}
          />
      )}
    </View>
  );
}
