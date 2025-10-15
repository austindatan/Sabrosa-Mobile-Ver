// @ts-nocheck
import React, { useState } from "react";
import { View, Text, Animated, FlatList, TouchableOpacity } from "react-native";
import styles from "../../assets/stylesheets/cookie";
import useHomeHeaderAnimation from "../../hooks/HeaderAnimation";
import HomeHeader from "../components/HomeHeader";
import { useRouter } from "expo-router";
import useHideOnScroll from "../../hooks/useHideOnScroll";
import CartItem from "../components/CartItem";

const Cart = () => {
  const router = useRouter();
  const {
    scrollY,
    headerHeight,
    topContentOpacity,
    topContentTranslateY,
    logoScale,
    searchTranslateY,
    HEADER_MAX,
  } = useHomeHeaderAnimation();

  const { handleScroll } = useHideOnScroll();

  const [activeTab, setActiveTab] = useState("OnCart");
  const [cartItems, setCartItems] = useState([
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
  ]);

  const handleAdd = (item) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const handleRemove = (item) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === item.id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HomeHeader
        headerHeight={headerHeight}
        topContentOpacity={topContentOpacity}
        topContentTranslateY={topContentTranslateY}
        logoScale={logoScale}
        searchTranslateY={searchTranslateY}
      />

      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: HEADER_MAX + 10,
          paddingBottom: 90,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
            listener: handleScroll,
          }
        )}
      >
        {/* Tabs */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {["OnCart", "History"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={{
                marginHorizontal: 30,
                borderBottomWidth: activeTab === tab ? 2 : 0,
                borderBottomColor: "#FF6C9B",
                paddingBottom: -10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: activeTab === tab ? "#FF6C9B" : "#999",
                  fontFamily: "DMSans-Bold"
                }}
              >
                {tab === "OnCart" ? "On Cart" : "History"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Cart Items */}
        {activeTab === "OnCart" ? (
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onAdd={handleAdd}
                onRemove={handleRemove}
              />
            )}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            contentContainerStyle={{ marginTop: 20 }}
          />
        ) : (
          <View style={{ marginTop: 50, alignItems: "center" }}>
            <Text style={{ color: "#999" }}>No purchase history yet</Text>
          </View>
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default Cart;
