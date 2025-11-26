// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import { View, Animated, ScrollView, ImageBackground, Text, TouchableOpacity } from "react-native";
import Header from "../components/HomeHeader";
import ProductCard from "../components/ProductCard";
import { useRouter } from "expo-router";
import styles from "../styles/AppEffects";
import useHideOnScroll from "../../hooks/useHideOnScroll"; 

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  
  // Get the scroll handler from the hook
  const { handleScroll } = useHideOnScroll();

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Header />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
            listener: handleScroll, // Listener to hide/show the tab bar
          }
        )}
      >
        <View style={[styles.specialOffer, { marginTop: 15 }]}>
          <ImageBackground
            source={require("../../assets/images/initialization_assets/promo_banner-Bg.png")}
            style={styles.offerImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>Special Offer for March</Text>
              <Text style={styles.offerSubtitle}>
                A flavor that will make you feel nostalgia and home.
              </Text>
              <TouchableOpacity style={styles.offerButton}>
                <Text style={styles.offerButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Picks!</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productGrid}>
            <ProductCard
              productName="Tropical Mango & Passionfruit"
              price="₱195"
              productImage={require("../../assets/images/initialization_assets/food/product1.png")}
              brandImage={require("../../assets/images/initialization_assets/logo/byronbay_logo.png")}
              onPress={() => router.push("/products/ByronBay/TropicalMango")}
            />
            <ProductCard
              productName="Peaches & Cream Soda"
              price="₱95"
              productImage={require("../../assets/images/initialization_assets/food/barbie.png")}
              brandImage={require("../../assets/images/initialization_assets/logo/olipop_black.png")}
            />
            <ProductCard
              productName="Special Mixed Yakisoba"
              price="₱125"
              productImage={require("../../assets/images/initialization_assets/food/bun.png")}
              brandImage={require("../../assets/images/initialization_assets/logo/sweets_logo.png")}
            />
            <ProductCard
              productName="Double Dutch Originals"
              price="₱95"
              productImage={require("../../assets/images/initialization_assets/food/don.png")}
              brandImage={require("../../assets/images/initialization_assets/logo/sabrosa_logo.png")}
            />
            <ProductCard
              productName="Dragon Noodles"
              price="₱95"
              productImage={require("../../assets/images/initialization_assets/food/product2.png")}
              brandImage={require("../../assets/images/initialization_assets/logo/sweets_logo.png")}
            />
            <ProductCard
              productName="Tea Chest Pyramid"
              price="₱95"
              productImage={require("../../assets/images/initialization_assets/food/tea.png")}
              brandImage={require("../../assets/images/initialization_assets/logo/tea_logo.png")}
            />
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;