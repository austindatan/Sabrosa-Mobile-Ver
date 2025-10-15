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

const KrispyKreme = () => {
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
        brandName="Krispy Kreme"
        brandTagline="Make Today Special, Hot Doughnuts Now!"
        backgroundImage={require("../../../assets/images/initialization_assets/krispykreme_bg.png")}
        brandLogo={require("../../../assets/images/initialization_assets/light/krispy.png")}
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
            productName="Premium Biscoff Latte"
            price="₱215"
            productImage={require("../../../assets/images/initialization_assets/food/BiscoffLatte.jpg")}
            brandImage={require("../../../assets/images/initialization_assets/light/krispy.png")}
            onPress={() => router.push("/products/BiscoffLatte")}
          />

          <ProductCard
            productName="Original Glazed Donut"
            price="₱415"
            productImage={require("../../../assets/images/initialization_assets/food/GlazedDonut.png")}
            brandImage={require("../../../assets/images/initialization_assets/light/krispy.png")}
            onPress={() => router.push("/products/GlazedDonut")}
          />

          <ProductCard
            productName="Signature Brewed Coffee"
            price="₱415"
            productImage={require("../../../assets/images/initialization_assets/food/SignatureBrewedCoffee.jpg")}
            brandImage={require("../../../assets/images/initialization_assets/light/krispy.png")}
            onPress={() => router.push("/products/SignatureBrewedCoffee")}
          />

          <ProductCard
            productName="Signature Mocha"
            price="₱415"
            productImage={require("../../../assets/images/initialization_assets/food/SignatureMocha.jpg")}
            brandImage={require("../../../assets/images/initialization_assets/light/krispy.png")}
            onPress={() => router.push("/products/SignatureMocha")}
          />

          <ProductCard
            productName="Original Lemonade"
            price="₱415"
            productImage={require("../../../assets/images/initialization_assets/food/OriginalLemonade.jpg")}
            brandImage={require("../../../assets/images/initialization_assets/light/krispy.png")}
            onPress={() => router.push("/products/Lemonade")}
          />

          <ProductCard
            productName="OG Churro Donut"
            price="₱440"
            productImage={require("../../../assets/images/initialization_assets/food/ChurroDonut.png")}
            brandImage={require("../../../assets/images/initialization_assets/light/krispy.png")}
            onPress={() => router.push("/products/ChurroDonut")}
          />
          
        </View>
      </Animated.ScrollView>

    </View>
  );
};

export default KrispyKreme;
