// @ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import styles from "../styles/Card_ProductCard";

const SkeletonLoader = ({
  width = "50%",
  height = 180,
  borderRadius = 8,
  style,
}) => {
  return (
    <MotiView
      from={{ backgroundColor: "#C0C0C0" }}
      animate={{ backgroundColor: "#E1E9EE" }}
      transition={{
        type: "timing",
        duration: 800,
        loop: true,
        repeatReverse: true,
      }}
      style={[
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

const ProductCard = ({
  productImage = require("../../assets/images/initialization_assets/food/product1.png"),
  brandImage = require("../../assets/images/initialization_assets/logo/byronbay_logo.png"),
  productName = "Tropical Mango & Passionfruit",
  price = "₱85",
  onPress,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <SkeletonLoader
        width="48%"
        height={180}
        borderRadius={15}
      />
    );
  }

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