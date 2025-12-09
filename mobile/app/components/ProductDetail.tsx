//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  Animated,
} from "react-native";
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

  // MODAL STATES
  const [showModal, setShowModal] = useState(false);

  // Animation refs
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const openModal = () => {
    setShowModal(true);

    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => setShowModal(false));
  };

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setActiveImage(heroImage);
  }, [heroImage]);

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
      openModal();
    } catch (err) {
      console.log("ADD TO CART ERROR:", err.response?.data || err.message);
      alert("Error adding to cart");
    }
  };

  const desc = String(description || "");
  const sentences = desc.split("/,").map(s => s.trim()).filter(Boolean);

  if (loading) {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SkeletonLoader width="100%" height={240} borderRadius={0} />
        <View style={{ padding: 20 }}>
          <SkeletonLoader width={50} height={20} style={{ marginBottom: 10 }} />
          <SkeletonLoader width="70%" height={20} style={{ marginBottom: 10 }} />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.wrapper}>

      {/* MAIN SCROLL */}
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
            <Text key={i} style={[styles.text, i > 0 ? { marginTop: 5 } : null]}>
              {line}
            </Text>
          ))}
        </View>

        <View style={{ height: 50 }} />
      </ScrollView>

      {/* FOOTER ADD TO CART */}
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

      {/* MODAL */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={modalStyles.overlay}>
          <Animated.View
            style={[
              modalStyles.modalContainer,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            <Ionicons name="checkmark-circle" size={60} color="#FF6C9B" />

            <Text style={modalStyles.modalTitle}>Added to Cart!</Text>
            <Text style={modalStyles.modalSubtitle}>{productName} has been added.</Text>

            {/* ⬇️⬇️⬇️ ADDED BUTTONS BELOW — NOTHING ELSE CHANGED */}

            <View style={modalStyles.buttonRow}>
              <Pressable style={modalStyles.closeButton} onPress={closeModal}>
                <Text style={modalStyles.closeText}>Close</Text>
              </Pressable>

              <Pressable
                style={modalStyles.cartButton}
                onPress={() => router.push("/(tabs)/Cart")}
              >
                <Text style={modalStyles.cartText}>Go to Cart</Text>
              </Pressable>
            </View>

            {/* ⬆️⬆️⬆️ ONLY THIS WAS ADDED */}

          </Animated.View>
        </View>
      </Modal>

    </View>
  );
};

export default ProductDetail;

/* ===========================
   INLINE MODAL STYLES
=========================== */
const modalStyles = {
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: 280,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 14,
    alignItems: "center",
    elevation: 10,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 12,
    color: "#964E1E",
  },

  modalSubtitle: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },

  closeButton: {
    backgroundColor: "#FF6C9B",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  closeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  /* ⬇️ NEWLY ADDED STYLES (NOTHING ELSE TOUCHED) */
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },

  cartButton: {
    backgroundColor: "#964E1E",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  cartText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
};