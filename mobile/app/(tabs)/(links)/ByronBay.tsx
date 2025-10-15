// @ts-nocheck
import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useRouter } from "expo-router";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import styles from "../../../assets/stylesheets/(links)/ByronBay";
import ProductCard from "../../components/ProductCard";
import AnimatedHeader from "../../components/BrandsHeader";
import useHomeHeaderAnimation from "../../../hooks/HeaderAnimation";
import useHideOnScroll from "../../../hooks/useHideOnScroll";
import { useBackToCookie } from "../../../hooks/BacktoCookie";

const ByronBay = () => {
  useBackToCookie();
  const router = useRouter();
  const { visible, handleScroll } = useHideOnScroll();
  const tabBarHeight = useBottomTabBarHeight();

  const {
    scrollY,
    headerHeight,
    topContentOpacity,
    topContentTranslateY,
    logoScale,
    searchTranslateY,
    HEADER_MAX,
  } = useHomeHeaderAnimation();

  const tabBarTranslateY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(tabBarTranslateY, {
      toValue: visible ? 0 : 100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AnimatedHeader
        headerHeight={headerHeight}
        topContentOpacity={topContentOpacity}
        topContentTranslateY={topContentTranslateY}
        logoScale={logoScale}
        searchTranslateY={searchTranslateY}
        brandName="Byron Bay Cookies"
        brandTagline="Crafted with passion and baked to perfection."
        backgroundImage={require("../../../assets/images/initialization_assets/byronbay_bg.png")}
        brandLogo={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
      />

      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: HEADER_MAX + 20,
          paddingBottom: tabBarHeight + 70,
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
            productImage={require("../../../assets/images/initialization_assets/food/product1.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/TropicalMango")}
          />
          
          <ProductCard
            productName="Blueberry Muffin Cookie"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product/BlueberryMuffinCookie2.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/BlueberryMuffinCookie")}
          />
        </View>
      </Animated.ScrollView>

    </View>
  );
};

export default ByronBay;
