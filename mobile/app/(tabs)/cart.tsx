//@ts-nocheck
import React, { useState, useMemo, useEffect, useRef } from "react";
import { View, Text, Animated, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/Cookie";
import Header from "../components/HomeHeader";
import { useRouter } from "expo-router";
import CartItem from "../components/CartItem";
import localStyles from "../styles/CartEffects";
import axios from "axios";
import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Cart = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("OnCart");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) return;

      const res = await axios.get(`${config.API_BASE_URL}/api/cart/${userId}`);
      const addedItems = res.data.items.filter((i) => i.status === "Added");
      console.log("CART RESPONSE:", JSON.stringify(res.data, null, 2));
      setCartItems(addedItems);
    } catch (err) {
      console.log("LOAD CART ERROR:", err.response?.data || err.message);
      console.log("CART RESPONSE:", JSON.stringify(res.data, null, 2));

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchCart(); // ← refresh cart every time you return to this screen
    }, [])
  );

  const handleAdd = async (item) => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      await axios.put(`${config.API_BASE_URL}/api/cart/update`, {
        userId,
        productId: item.product._id || item.product,
        quantity: item.quantity + 1,
      });
      fetchCart();
    } catch (err) {
      console.log("ADD ERROR:", err.response?.data || err.message);
    }
  };

  const handleRemove = async (item) => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      await axios.put(`${config.API_BASE_URL}/api/cart/update`, {
        userId,
        productId: item.product._id || item.product,
        quantity: item.quantity - 1,
      });
      fetchCart();
    } catch (err) {
      console.log("REMOVE ERROR:", err.response?.data || err.message);
    }
  };

  const { totalItems, totalPrice } = useMemo(() => {
    let items = 0;
    let price = 0;

    for (let i of cartItems) {
      items += i.quantity;
      price += i.product?.price * i.quantity || 0;
    }

    return { totalItems: items, totalPrice: price };
  }, [cartItems]);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Header />

      <View style={{ flex: 1 }}>
        <Animated.ScrollView contentContainerStyle={{ paddingBottom: 200 }} scrollEventThrottle={16}>
          <View style={localStyles.tabsContainer}>
            {["OnCart", "History"].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[localStyles.tabButton, activeTab === tab && localStyles.tabButtonActive]}
              >
                <Text style={[localStyles.tabText, activeTab === tab && localStyles.tabTextActive]}>
                  {tab === "OnCart" ? "On Cart" : "History"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === "OnCart" && !loading && (
            cartItems.length > 0 ? (
              <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                  <CartItem
                    item={{
                      ...item,
                      name: item.product?.productName,
                      price: item.product?.price,
                      image: { uri: item.product?.productImages[0] },
                      brandImage: { uri: item.product?.brandImage },
                    }}
                    onAdd={() => handleAdd(item)}
                    onRemove={() => handleRemove(item)}
                  />
                )}
                keyExtractor={(item) => item._id}
                scrollEnabled={false}
                contentContainerStyle={{ marginTop: 5, marginBottom: 30 }}
              />
            ) : (
              <View style={{ padding: 20, alignItems: "center", marginTop: 50 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 10 }}>
                  Your Cart is Empty 🛒
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/Home")}
                  style={{ backgroundColor: "#FF6C9B", padding: 12, borderRadius: 8 }}
                >
                  <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                    Add to Cart Now!
                  </Text>
                </TouchableOpacity>
              </View>
            )
          )}

          {activeTab === "History" && (
            <View style={{ padding: 20 }}>
              <Text style={{ color: "#777", fontSize: 16, textAlign: "center", marginTop: 20 }}>
                No past orders yet.
              </Text>
            </View>
          )}
        </Animated.ScrollView>

        {activeTab === "OnCart" && !loading && cartItems.length > 0 && (
          <View style={localStyles.stickyCheckout}>
            <View style={localStyles.checkoutRow}>
              <Text style={localStyles.checkoutLabel}>Total Items</Text>
              <Text style={localStyles.checkoutValue}>{totalItems}</Text>
            </View>

            <View style={localStyles.checkoutRow}>
              <Text style={localStyles.checkoutLabel}>Total Price</Text>
              <Text style={localStyles.checkoutTotal}>₱{totalPrice.toLocaleString()}</Text>
            </View>

            <TouchableOpacity
              style={localStyles.checkoutButton}
              activeOpacity={0.8}
              onPress={() => router.push("/products/Checkout_Page")}
            >
              <Text style={localStyles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Cart;
