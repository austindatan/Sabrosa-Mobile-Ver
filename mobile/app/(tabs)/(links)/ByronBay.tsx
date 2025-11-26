// @ts-nocheck
import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useRouter } from "expo-router";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import styles from "../../styles/links/ByronBay";
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
          paddingBottom: tabBarHeight - 60,
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
            onPress={() => router.push("/products/ByronBay/TropicalMango")}
          />
          
          <ProductCard
            productName="Blueberry Muffin Cookie"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product_sprites/Blueberry Muffin Cookie.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/ByronBay/BlueberryMuffinCookie")}
          />

          <ProductCard
            productName="Dotty Cookie Bundle"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product/DottyCookie2.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/ByronBay/DottyCookie")}
          />

          <ProductCard
            productName="Milk Choc Chunk Cookie"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product_sprites/MilkChocChunkCookie.jpg")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/ByronBay/MilkChocChunkCookie")}
          />
          
          <ProductCard
            productName="White Choc Macadamia"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product/WhiteChocMacadamiaCookie3.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/ByronBay/WhiteChocMacadamiaCookie")}
          />

          <ProductCard
            productName="Vegan Gluten Maple & Pecan"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product_sprites/Vegan Gluten Maple & Pecan Cookie Jar.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/ByronBay/WhiteChocMacadamiaCookie")}
          />

          <ProductCard
            productName="Toasted Coconut Bites"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product_sprites/Toasted Coconut & White Cookie Bites.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/ByronBay/WhiteChocMacadamiaCookie")}
          />

          <ProductCard
            productName="2024 Pride Cookies"
            price="₱195"
            productImage={require("../../../assets/images/initialization_assets/product_sprites/2024 Pride Cookie Limiteds.png")}
            brandImage={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            onPress={() => router.push("/products/ByronBay/WhiteChocMacadamiaCookie")}
          />
        </View>
      </Animated.ScrollView>

    </View>
  );
};

export default ByronBay;
