// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Animated, Easing } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import styles from "../../assets/stylesheets/home";
import ProductCard from "../components/ProductCard";
import useHomeHeaderAnimation from "../../hooks/HeaderAnimation";
import HomeHeader from "../components/HomeHeader";
import useHideOnScroll from "../../hooks/useHideOnScroll";

const Home = () => {
  const router = useRouter();
  const { visible, handleScroll } = useHideOnScroll();
  const tabBarHeight = useBottomTabBarHeight();
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);
  const specialOfferTranslateY = useRef(new Animated.Value(0)).current;
  const specialOfferOpacity = useRef(new Animated.Value(0)).current;
  const productGridTranslateY = useRef(new Animated.Value(130)).current;
  const animatedPaddingTop = useRef(new Animated.Value(30)).current;

  const {
    scrollY,
    headerHeight,
    topContentOpacity,
    topContentTranslateY,
    logoScale,
    searchTranslateY,
  } = useHomeHeaderAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecialOffer(true);

      Animated.parallel([
        Animated.timing(animatedPaddingTop, {
          toValue: 172,
          duration: 200,
          easing: Easing.out(Easing.exp),
          useNativeDriver: false,
        }),
        Animated.spring(specialOfferTranslateY, {
          toValue: 0,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(specialOfferOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(productGridTranslateY, {
          toValue: 0,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();

    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const animatedContentStyle = {
    paddingTop: animatedPaddingTop,
    paddingBottom: 0,
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
        contentContainerStyle={animatedContentStyle}
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
        {showSpecialOffer && (
          <Animated.View
            style={[
              styles.specialOffer,
              {
                transform: [{ translateY: specialOfferTranslateY }],
                opacity: specialOfferOpacity,
              },
            ]}
          >
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
          </Animated.View>
        )}

        <Animated.View style={{ transform: [{ translateY: productGridTranslateY }] }}>
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
            onPress={() => router.push("/products/TropicalMango")}
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
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
