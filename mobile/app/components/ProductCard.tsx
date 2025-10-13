// @ts-nocheck
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({
  productImage = require("../../assets/images/initialization_assets/food/product1.png"),
  brandImage = require("../../assets/images/initialization_assets/logo/byronbay_logo.png"),
  productName = "Tropical Mango & Passionfruit",
  price = "₱85",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.productCard}>
        <Image
          source={productImage}
          style={styles.productImage}
          resizeMode="contain"
        />

        <View style={styles.productInfoRow}>
          <View>
            <Image
              source={brandImage}
              style={styles.brandImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{productName}</Text>
          </View>

          <View style={styles.priceTag}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
  backgroundColor: "#fff",
  borderRadius: 15,
  borderWidth: 1,
  borderColor: "rgba(255, 108, 155, 0.5)",
  padding: 16,
  width: "100%",
  alignSelf: "center",
  },

  productImage: {
    width: "120%",
    height: 120,
    alignContent: "center",
    alignSelf: "center",
    bottom: 3,
    borderRadius: 12,
  },

  productInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  brandImage: {
    width: 50, 
    height: 20,
    resizeMode: "contain",
  },

  productName: {
    fontSize: 12,
    fontFamily: "Barlow",
    color: "#000",
    maxWidth: 80,
  },

  priceTag: {
    backgroundColor: "#ff7eb9",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 40,
    marginTop: 10,
  },

  priceText: {
    color: "#fff",
    fontFamily: "Barlow",
    fontSize: 13,
  },
});
