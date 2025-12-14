import React, { useRef, useState, useEffect } from "react";
import { View, Animated, ScrollView, ImageBackground, Text, TouchableOpacity } from "react-native";
import Header from "../components/HomeHeader";
import BrandCard from "../components/SabrosaBrandCard";
import { useRouter } from "expo-router";
import styles from "../styles/Cookie";

const Cookie = () => {
  const router = useRouter();

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Header />
      <ScrollView>
        <View style={[styles.specialOffer, { marginTop: 5 }]}>
        </View>

        <View style={styles.brandGrid}>
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/sugar.png")}
            colors={['#69CCE3', '#00FFFF']}
            onPress={() => router.push("/(tabs)/(links)/Sugarfina")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/chobani.png")}
            colors={['#1C5F4E', '#3D9970']}
            onPress={() => router.push("/(tabs)/(links)/Chobani")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/laduree.png")}
            colors={['#FDC0D0', '#F1548A']}
            onPress={() => router.push("/(tabs)/(links)/Laduree")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/bluestar.png")}
            colors={['#1F27A6', '#8a90ffff']}
            onPress={() => router.push("/(tabs)/(links)/Bluestar")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/graze.png")}
            colors={['#a38ad1ff', '#7B679B']}
            onPress={() => router.push("/(tabs)/(links)/Graze")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/byron.png")}
            colors={['#ffa57fff', '#d14200ff']}
            onPress={() => router.push("/(tabs)/(links)/ByronBay")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/sweets.png")}
            colors={['#ff5a5aff', '#c12121ff']}
            onPress={() => router.push("/(tabs)/(links)/SweetsParadise")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/krispy.png")}
            colors={['#ff2f6aff', '#ff7da2ff']}
            onPress={() => router.push("/(tabs)/(links)/KrispyKreme")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/oli.png")}
            colors={['#6cffe4ff', '#1a836fff']}
            onPress={() => router.push("/(tabs)/(links)/Olipop")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/tea forte.png")}
            colors={['#ffd876ff', '#D3B162']}
            onPress={() => router.push("/(tabs)/(links)/Teaforte")}
          />
          <BrandCard
            image={require("../../assets/images/initialization_assets/light/compartes.png")}
            colors={['#60daccff', '#0c453bff']}
            onPress={() => router.push("/(tabs)/(links)/Compartes")}
          />
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
};

export default Cookie;
