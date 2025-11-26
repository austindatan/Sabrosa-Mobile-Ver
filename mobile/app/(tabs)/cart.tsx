// @ts-nocheck
import React, { useState, useMemo, useEffect, useRef } from "react";
import { View, Text, Animated, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/Cookie";
import Header from "../components/HomeHeader";
import { useRouter } from "expo-router";
import useHideOnScroll from "../../hooks/useHideOnScroll";
import CartItem from "../components/CartItem";
import localStyles from "../styles/CartEffects";

const Cart = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("OnCart");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCartItems([
        {
          id: "1",
          name: "Tropical Mango & Passionfruit",
          brandImage: require("../../assets/images/initialization_assets/logo/byronbay_logo.png"),
          price: 195,
          image: require("../../assets/images/initialization_assets/food/product1.png"),
          quantity: 1,
        },
        {
          id: "2",
          name: "Peaches & Cream Soda",
          brandImage: require("../../assets/images/initialization_assets/logo/olipop_black.png"),
          price: 500,
          image: require("../../assets/images/initialization_assets/food/barbie.png"),
          quantity: 1,
        },
        {
          id: "3",
          name: "Special Mixed Yakisoba",
          brandImage: require("../../assets/images/initialization_assets/logo/sweets_logo.png"),
          price: 250,
          image: require("../../assets/images/initialization_assets/food/bun.png"),
          quantity: 1,
        },
        {
          id: "4",
          name: "Special Mixed Yakisoba",
          brandImage: require("../../assets/images/initialization_assets/logo/sweets_logo.png"),
          price: 250,
          image: require("../../assets/images/initialization_assets/food/bun.png"),
          quantity: 1,
        },
      ]);
      setLoading(false);
    } );
    return () => clearTimeout(timer);
  }, []);

  const handleAdd = (item) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const handleRemove = (item) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === item.id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
      )
    );
  };

  const { totalItems, totalPrice } = useMemo(() => {
    let items = 0;
    let price = 0;
    for (let item of cartItems) {
      items += item.quantity;
      price += item.price * item.quantity;
    }
    return { totalItems: items, totalPrice: price };
  }, [cartItems]);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Header />

      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          contentContainerStyle={{ paddingBottom: 200 }}
          scrollEventThrottle={16}
        >
          <View style={localStyles.tabsContainer}>
            {["OnCart", "History"].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[
                  localStyles.tabButton,
                  activeTab === tab && localStyles.tabButtonActive,
                ]}
              >
                <Text
                  style={[
                    localStyles.tabText,
                    activeTab === tab && localStyles.tabTextActive,
                  ]}
                >
                  {tab === "OnCart" ? "On Cart" : "History"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === "OnCart" && !loading && (
            <FlatList
              data={cartItems}
              renderItem={({ item }) => (
                <CartItem item={item} onAdd={handleAdd} onRemove={handleRemove} />
              )}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              contentContainerStyle={{ marginTop: 5, marginBottom: 30 }}
            />
          )}

          {activeTab === "History" && (
            <View style={{ padding: 20 }}>
              <Text style={{ color: "#777", fontSize: 16, textAlign: "center", marginTop: 20 }}>
                No past orders yet.
              </Text>
            </View>
          )}

        </Animated.ScrollView>

        {activeTab === "OnCart" && !loading && (
          <View style={localStyles.stickyCheckout}>
            <View style={localStyles.checkoutRow}>
              <Text style={localStyles.checkoutLabel}>Total Items</Text>
              <Text style={localStyles.checkoutValue}>{totalItems}</Text>
            </View>
            <View style={localStyles.checkoutRow}>
              <Text style={localStyles.checkoutLabel}>Total Price</Text>
              <Text style={localStyles.checkoutTotal}>
                ₱{totalPrice.toLocaleString()}
              </Text>
            </View>

            <TouchableOpacity style={localStyles.checkoutButton} activeOpacity={0.8}>
              <Text style={localStyles.checkoutButtonText} onPress={() => router.push("/products/Checkout_Page")}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Cart;

const pulse = {
  from: { opacity: 0.3 },
  to: { opacity: 1 },
};
