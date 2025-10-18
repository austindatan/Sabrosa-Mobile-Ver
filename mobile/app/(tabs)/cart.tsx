// @ts-nocheck
import React, { useState, useMemo, useEffect, useRef } from "react";
import { View, Text, Animated, FlatList, TouchableOpacity, StyleSheet } from "react-native";
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
      ]);
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

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

        {activeTab === "OnCart" ? (
          loading ? (
            <>
              {[1, 2, 3].map((_, i) => (
                <View key={i} style={localStyles.skeletonCard}>
                  <View style={localStyles.skeletonImage} />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={localStyles.skeletonLineShort} />
                    <View style={localStyles.skeletonLineLong} />
                    <View style={localStyles.skeletonButtonRow}>
                      <View style={localStyles.skeletonButton} />
                      <View style={localStyles.skeletonButton} />
                    </View>
                  </View>
                </View>
              ))}

              <View style={[localStyles.checkoutCard, { marginTop: 25 }]}>
                <View style={localStyles.skeletonLineShort} />
                <View
                  style={[localStyles.skeletonLineLong, { width: "60%", marginTop: 10 }]}
                />
                <View
                  style={[localStyles.skeletonButton, { marginTop: 15, width: "100%" }]}
                />
              </View>
            </>
          ) : (
            <>
              <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                  <CartItem item={item} onAdd={handleAdd} onRemove={handleRemove} />
                )}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                contentContainerStyle={{ marginTop: 20 }}
              />

              <View style={localStyles.checkoutCard}>
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

                <TouchableOpacity
                  style={localStyles.checkoutButton}
                  activeOpacity={0.8}
                >
                  <Text style={localStyles.checkoutButtonText}>Proceed to Checkout</Text>
                </TouchableOpacity>
              </View>
            </>
          )
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

const pulse = {
  from: { opacity: 0.3 },
  to: { opacity: 1 },
};

const localStyles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  tabButton: {
    marginHorizontal: 30,
    borderBottomWidth: 0,
    paddingBottom: 4,
  },
  tabButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF6C9B",
  },
  tabText: {
    fontSize: 16,
    color: "#999",
    fontFamily: "DMSans-Bold",
  },
  tabTextActive: {
    color: "#FF6C9B",
  },

  // Skeleton Styles
  skeletonCard: {
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
    overflow: "hidden",
  },
  skeletonImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  skeletonLineShort: {
    width: "40%",
    height: 12,
    borderRadius: 6,
    backgroundColor: "#e0e0e0",
    marginTop: 8,
  },
  skeletonLineLong: {
    width: "80%",
    height: 12,
    borderRadius: 6,
    backgroundColor: "#e0e0e0",
    marginTop: 8,
  },
  skeletonButtonRow: {
    flexDirection: "row",
    marginTop: 12,
    gap: 10,
  },
  skeletonButton: {
    flex: 1,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },

  checkoutCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 25,
    padding: 20,
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  checkoutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  checkoutLabel: {
    fontSize: 15,
    color: "#555",
    fontFamily: "DMSans-Regular",
  },
  checkoutValue: {
    fontSize: 15,
    fontFamily: "DMSans-Bold",
    color: "#000",
  },
  checkoutTotal: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF6C9B",
    fontFamily: "DIN-Next",
  },
  checkoutButton: {
    backgroundColor: "#FF6C9B",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "DMSans-Bold",
  },
});
