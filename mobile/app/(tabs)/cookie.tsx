import React from "react";
import { View, Text, Animated } from "react-native";
import styles from "../../assets/stylesheets/cookie";
import BrandCard from "../components/SabrosaBrandCard";
import useHomeHeaderAnimation from "../../hooks/HeaderAnimation";
import HomeHeader from "../components/HomeHeader";
import { useRouter } from "expo-router";
import useHideOnScroll from "../../hooks/useHideOnScroll";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Cookie = () => {
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
          paddingTop: HEADER_MAX + 20,
          paddingBottom: 70,
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
          <Text style={styles.sectionTitle}>Sabrosa Brands</Text>
        </View>

        <View style={styles.brandGrid}>
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/sugar.png")}
            color="#69CCE3"
            onPress={() => router.push("/(tabs)/(links)/Sugarfina")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/chobani.png")}
            color="#1C5F4E"
            onPress={() => router.push("/(tabs)/(links)/Chobani")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/laduree.png")}
            color="#FDC0D0"
            onPress={() => router.push("/(tabs)/(links)/Laduree")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/bluestar.png")}
            color="#1F27A6"
            onPress={() => router.push("/(tabs)/(links)/Bluestar")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/graze.png")}
            color="#423064"
            onPress={() => router.push("/(tabs)/(links)/Graze")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/byron.png")}
            color="#FF8654"
            onPress={() => router.push("/(tabs)/(links)/ByronBay")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/sweets.png")}
            color="#FF0000"
            onPress={() => router.push("/(tabs)/(links)/SweetsParadise")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/krispy.png")}
            color="#CC083E"
            onPress={() => router.push("/(tabs)/(links)/KrispyKreme")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/oli.png")}
            color="#D6F2ED"
            onPress={() => router.push("/(tabs)/(links)/Olipop")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/tea forte.png")}
            color="#B09040"
            onPress={() => router.push("/(tabs)/(links)/Teaforte")}
          />

          <BrandCard
            image={require("../../assets/images/initialization_assets/light/compartes.png")}
            color="#31625C"
            onPress={() => router.push("/(tabs)/(links)/Compartes")}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Cookie;
