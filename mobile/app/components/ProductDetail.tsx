//@ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { useRouter } from "expo-router";
import styles from "../styles/Card_ProductDetail";
import axios from "axios";
import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SkeletonLoader = ({ width = "100%", height = 20, borderRadius = 8, style }) => (
  <MotiView
    from={{ backgroundColor: "#C0C0C0" }}
    animate={{ backgroundColor: "#E1E9EE" }}
    transition={{ type: "timing", duration: 800, loop: true, repeatReverse: true }}
    style={[{ width, height, borderRadius }, style]}
  />
);

const ProductDetail = ({
  productId,
  heroImage,
  brandLogo,
  productName,
  price,
  galleryImages,
  description,
}) => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(heroImage);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setActiveImage(heroImage);
  }, [heroImage]);

  if (loading) {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SkeletonLoader width="100%" height={240} borderRadius={0} />
        <View style={{ padding: 20 }}>
          <SkeletonLoader width={50} height={20} style={{ marginBottom: 10 }} />
          <SkeletonLoader width="70%" height={20} style={{ marginBottom: 10 }} />
        </View>

        <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 20 }}>
          {[1, 2, 3].map((_, i) => (
            <SkeletonLoader key={i} width={80} height={80} />
          ))}
        </View>

        <View style={{ padding: 20 }}>
          {[1, 2, 3].map((_, i) => (
            <SkeletonLoader key={i} width="100%" height={16} style={{ marginBottom: 12 }} />
          ))}
        </View>
      </ScrollView>
    );
  }

  // ⭐ CORRECTED ADD TO CART
  const addToCart = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) return alert("Please login first");

      const response = await axios.post(`${config.API_BASE_URL}/api/cart/add`, {
        userId,
        productId,
        quantity: Number(quantity),
      });

      console.log("CART RESPONSE:", response.data);
      console.log("CART ITEMS:", JSON.stringify(response.data.cart.items, null, 2));
      alert("Added to cart!");
    } catch (err) {
      console.log("ADD TO CART ERROR:", err.response?.data || err.message);
      alert("Error adding to cart");
    }
  };

  const desc = String(description || "");
  const sentences = desc.split("/,").map(s => s.trim()).filter(Boolean);

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image source={activeImage} style={styles.heroImage} resizeMode="cover" />

          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.heartButton} onPress={() => setLiked(!liked)}>
            <MotiView
              from={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: liked ? 1.4 : 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 12 }}
            >
              <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={24}
                color={liked ? "#FF6C9B" : "#000"}
              />
            </MotiView>
          </TouchableOpacity>
        </View>

        <View style={styles.productInfo}>
          <View style={styles.leftColumn}>
            <Image source={brandLogo} style={styles.brandLogo} resizeMode="contain" />
            <Text style={styles.productName}>{productName}</Text>
          </View>

          <View style={styles.priceTag}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        </View>

        <View style={styles.galleryContainer}>
          {galleryImages.map((img, index) => (
            <TouchableOpacity
              key={index}
              style={styles.galleryItem}
              onPress={() => setActiveImage(img)}
            >
              <Image
                source={img}
                style={styles.galleryImage}
                resizeMode={index === 0 ? "contain" : "cover"}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.description}>
          {sentences.map((line, i) => (
            <Text
              key={i}
              style={[
                styles.text,
                i > 0 ? { marginTop: 5 } : null  // spacing between sentences
              ]}
            >
              {line}
            </Text>
          ))}
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qtyValue}>{quantity}</Text>

          <TouchableOpacity style={styles.qtyButton} onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cartButton} onPress={addToCart}>
          <Ionicons name="cart-outline" size={20} color="#fff" />
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
