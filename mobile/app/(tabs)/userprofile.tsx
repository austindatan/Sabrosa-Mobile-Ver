// @ts-nocheck
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/UserProfile";
import { useRouter } from "expo-router";
import OrderHistoryCard from "../components/OrderCard";
import FavoriteCard from "../components/FavoriteCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import config from "../../config";
import { useFocusEffect } from "@react-navigation/native";

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("  Orders  ");

  // 1. ❌ REMOVED: "History" tab
  const tabs = ["  Orders  ", "Favorites"];

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Dynamic reload when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        setLoading(true);
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

          const favoritesRes = await axios.get(`${config.API_BASE_URL}/api/favorites/user/${userId}`);
          setFavorites(favoritesRes.data);

        } catch (err) {
          console.log("Error loading data:", err);
        } finally {
          setLoading(false);
        }
      };

      loadData();
    }, [])
  );

  const removeFavorite = async (productId) => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      await axios.delete(`${config.API_BASE_URL}/api/favorites/${userId}/${productId}`);

      // Remove from local state
      setFavorites(favorites.filter(fav => fav.product?._id !== productId));
    } catch (err) {
      console.log("Error removing favorite:", err);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#ff4d92" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Content (Unchanged) */}
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

          <TouchableOpacity style={styles.iconCircle}
            onPress={() => router.push("/products/Edit_Profile")}>
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

      <Text style={[styles.emailname, { fontSize: 13, marginTop: 0, opacity: 0.6, color: "#424242a1" }]}>
        {user?.email}
      </Text>

      {/* Tab Row (Updated) */}
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

      {/* Orders Tab Content (Updated with ListEmptyComponent) */}
      {activeTab === "  Orders  " && (
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

          ListEmptyComponent={
            <View style={{ alignItems: "center", marginTop: 100 }}>
              <Ionicons name="receipt" size={64} color="#ccc" />
              <Text style={{ marginTop: 16, fontSize: 16, color: "#999", fontFamily: "DMSans-Bold" }}>
                No orders found
              </Text>
              <Text style={{ marginTop: 8, fontSize: 14, color: "#bbb", fontFamily: "DMSans-Medium" }}>
                Place your first order to see it here!
              </Text>
            </View>
          }
        />
      )}

      {/* Favorites Tab Content (Unchanged) */}
      {activeTab === "Favorites" && (
        <FlatList
          data={favorites.filter(fav => fav.product !== null)}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <FavoriteCard
              item={item}
              onPress={() => {
                // Navigate to product detail
                if (item.product?._id) {
                  router.push({
                    pathname: "/products/[id]",
                    params: { id: item.product._id }
                  });
                }
              }}
              onRemove={() => item.product?._id && removeFavorite(item.product._id)}
            />
          )}
          contentContainerStyle={styles.content}
          ListEmptyComponent={
            <View style={{ alignItems: "center", marginTop: 100 }}>
              <Ionicons name="heart" size={64} color="#ccc" />
              <Text style={{ marginTop: 16, fontSize: 16, color: "#999", fontFamily: "DMSans-Bold" }}>
                No favorites yet
              </Text>
              <Text style={{ marginTop: 8, fontSize: 14, color: "#bbb", fontFamily: "DMSans-Medium", alignItems: "center" }}>
                Favorite products now!
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}