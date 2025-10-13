import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Animated } from "react-native";
import styles from "../../../assets/stylesheets/(links)/ByronBay";
import BrandCard from "../../components/SabrosaBrandCard";
import ProductCard from "../../components/ProductCard";
import useHomeHeaderAnimation from "../../../hooks/HeaderAnimation";
import BrandsHeader from "../../components/BrandsHeader";
import { useRouter } from "expo-router";

const ByronBay = () => {
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

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <BrandsHeader
        headerHeight={headerHeight}
        topContentOpacity={topContentOpacity}
        topContentTranslateY={topContentTranslateY}
        logoScale={logoScale}
        searchTranslateY={searchTranslateY}
      />

      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: HEADER_MAX + 20,
          paddingBottom: 70,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
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
        </View>

      </Animated.ScrollView>
    </View>
  );
};

export default ByronBay;
