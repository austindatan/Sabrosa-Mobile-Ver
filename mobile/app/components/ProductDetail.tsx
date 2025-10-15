//@ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { useRouter } from "expo-router";

const SkeletonLoader = ({ width = "100%", height = 20, borderRadius = 8, style }) => (
  <MotiView
    from={{ backgroundColor: "#C0C0C0" }}
    animate={{ backgroundColor: "#E1E9EE" }}
    transition={{ type: "timing", duration: 800, loop: true, repeatReverse: true }}
    style={[{ width, height, borderRadius }, style]}
  />
);

const ProductDetail = ({
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SkeletonLoader width="100%" height={240} borderRadius={0} />
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <SkeletonLoader width={50} height={20} borderRadius={8} style={{ marginBottom: 10 }} />
            <SkeletonLoader width="70%" height={20} borderRadius={8} style={{ marginBottom: 10 }} />
          </View>
          <View style={{ position: "absolute", right: 20, top: 10 }}>
            <SkeletonLoader width={60} height={60} borderRadius={6} />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 20 }}>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <SkeletonLoader key={i} width={80} height={80} borderRadius={10} />
            ))}
        </View>
        <View style={{ padding: 20 }}>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <SkeletonLoader key={i} width="100%" height={16} borderRadius={8} style={{ marginBottom: 12 }} />
            ))}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image source={heroImage} style={styles.heroImage} resizeMode="cover" />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.heartButton}
            onPress={() => setLiked(!liked)}
            activeOpacity={0.7}
          >
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
            <View key={index} style={styles.galleryItem}>
              <Image source={img} style={styles.galleryImage} resizeMode="cover" />
            </View>
          ))}
        </View>
        <View style={styles.description}>
          {description.map((text, i) => (
            <Text key={i} style={styles.text}>
              {text}
            </Text>
          ))}
        </View>
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
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.cartButton}
          activeOpacity={0.8}
          onPress={() => console.log(`Added ${quantity} to cart`)}
        >
          <Ionicons name="cart-outline" size={20} color="#fff" />
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },

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
    height: 240
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

  heartButton: {
    position: "absolute",
    top: 15,
    right: 15,
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
    height: 20
  },

  productName: {
    fontSize: 15,
    fontFamily: "Barlow",
    color: "#000",
    flexWrap: "wrap",
    maxWidth: "60%",
  },

  priceTag: {
    width: 70,
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
    fontFamily: "Barlow",
    fontSize: 16
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
    height: 80
  },

  description: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  text: {
    fontSize: 12,
    color: "#222",
    lineHeight: 16,
    marginBottom: 12,
    fontFamily: "DIN-Next",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFEBF0",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  qtyButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFD8E6",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    fontSize: 18,
    color: "#FF6C9B",
    fontFamily: "DIN-Next"
  },

  qtyValue: {
    fontSize: 16,
    color: "#000",
    fontFamily: "DIN-Next",
    minWidth: 25,
    textAlign: "center",
  },

  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C9B",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 45,
    gap: 8,
  },
  
  cartText: {
    color: "#fff",
    fontFamily: "DIN-Next",
    fontSize: 15
  },
});
