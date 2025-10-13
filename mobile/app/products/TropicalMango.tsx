// @ts-nocheck
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TropicalMango() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroContainer}>
        <Image
          source={require("../../assets/images/initialization_assets/product/passionfruit1.jpg")}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <View style={styles.leftColumn}>
          <Image
            source={require("../../assets/images/initialization_assets/logo/byronbay_logo.png")}
            style={styles.brandLogo}
            resizeMode="contain"
          />
          <Text style={styles.productName}>
            Tropical Mango & {"\n"}Passionfruit Cookie
          </Text>
        </View>

        <View style={styles.priceTag}>
          <Text style={styles.priceText}>P85</Text>
        </View>
      </View>

      <View style={styles.galleryContainer}>
        {[
          require("../../assets/images/initialization_assets/product/passionfruit2.jpg"),
          require("../../assets/images/initialization_assets/food/product1.png"),
          require("../../assets/images/initialization_assets/product/passionfruit1.jpg"),
        ].map((img, index) => (
          <View key={index} style={styles.galleryItem}>
            <Image source={img} style={styles.galleryImage} resizeMode="cover" />
          </View>
        ))}
      </View>

      <View style={styles.description}>
        <Text style={styles.text}>
          Escape to the tropics with flavours of coconut coupled with mango and
          passionfruit jellies.
        </Text>
        <Text style={styles.text}>
          Individually wrapped for convenience, each Byron Bay Wrapped Cafe
          Cookie delivers a taste of Byron in every bite. Available as an
          individually wrapped 55g cookie or as a dozen individually wrapped 55g
          cookies in a cookie box. Featuring unique artwork from Australian
          artist Chloe Joyce.
        </Text>
        <Text style={styles.text}>
          Designed with cafes in mind, the Byron Bay Cookie display box is your
          ultimate cookie stash! Showcase your cookies at home or at work, and
          wherever else cookie cravings may arise.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 45
  },

  heroContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FF6C9B",
    position: "relative",
  },

  heroImage: {
    width: "100%",
    height: 240,
  },

  backButton: {
  position: "absolute",
  top: 15,
  left: 15,
  backgroundColor: "#fff",
  width: 38,
  height: 38,
  borderRadius: 19,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#FF6C9B",
  },

  productInfo: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  marginTop: 15,
  },

  leftColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
    gap: 4,
  },

  brandLogo: {
    width: 50,
    height: 20,
  },

  productName: {
    fontSize: 15,
    fontFamily: "DIN-Next",
    color: "#000",
    flexWrap: "wrap",
    maxWidth: "90%",
  },

  priceTag: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C9B",
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignSelf: "flex-start",
    right: 0,
  },

  priceText: {
    color: "#fff",
    fontFamily: "DIN-Next",
    fontSize: 16,
  },

  galleryContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 15,
  },

  galleryItem: {
    borderWidth: 1,
    borderColor: "#FF6C9B",
    borderRadius: 10,
    overflow: "hidden",
  },

  galleryImage: {
    width: 80,
    height: 80,
  },

  description: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  text: {
    fontSize: 12,
    color: "#222",
    lineHeight: 16,
    marginBottom: 12,
    fontFamily: "DIN-Next",
  },
});
