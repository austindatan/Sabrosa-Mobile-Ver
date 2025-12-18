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

  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (!userId || !productId) return;

        const response = await axios.get(
          `${config.API_BASE_URL}/api/favorites/check/${userId}/${productId}`
        );
        setLiked(response.data.isFavorited);
      } catch (err) {
        console.log("CHECK FAVORITE ERROR:", err);
      }
    };

    checkFavoriteStatus();
  }, [productId]);

  const toggleFavorite = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        alert("Please login first");
        return;
      }

      const response = await axios.post(`${config.API_BASE_URL}/api/favorites/toggle`, {
        userId,
        productId,
      });

      setLiked(response.data.isFavorited);
    } catch (err) {
      console.log("TOGGLE FAVORITE ERROR:", err);
      alert("Error updating favorites");
    }
  };

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
      <View style={styles.wrapper}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          
          <View style={styles.heroContainer}>
            <SkeletonLoader width="100%" height={240} borderRadius={0} />

            <View style={[styles.backButton, { backgroundColor: '#E1E9EE' }]}>
              <SkeletonLoader width={24} height={24} borderRadius={12} />
            </View>

            <View style={[styles.heartButton, { backgroundColor: '#E1E9EE' }]}>
              <SkeletonLoader width={24} height={24} borderRadius={12} />
            </View>
          </View>

          <View style={styles.productInfo}>
            <View style={styles.leftColumn}>
              <SkeletonLoader width={50} height={20} style={{ marginBottom: 4 }} />
              <SkeletonLoader width={150} height={15} />
            </View>
            <View style={styles.priceSkeleton}>
              <SkeletonLoader width={50} height={20} />
            </View>
          </View>

          <View style={styles.galleryContainer}>
            <SkeletonLoader width={80} height={80} borderRadius={10} />
            <SkeletonLoader width={80} height={80} borderRadius={10} />
            <SkeletonLoader width={80} height={80} borderRadius={10} />
          </View>

          <View style={styles.description}>
            <SkeletonLoader width="100%" height={12} style={{ marginBottom: 8 }} />
            <SkeletonLoader width="90%" height={12} style={{ marginBottom: 8 }} />
            <SkeletonLoader width="95%" height={12} style={{ marginBottom: 8 }} />
            <SkeletonLoader width="85%" height={12} />
          </View>

          <View style={{ height: 50 }} />
        </ScrollView>

        <View style={styles.footer}>
          <SkeletonLoader width={120} height={34} borderRadius={17} />
          <SkeletonLoader width={150} height={48} borderRadius={30} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image source={activeImage} style={styles.heroImage} resizeMode="cover" />

          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.heartButton} onPress={toggleFavorite}>
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
            <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">{productName}</Text>
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

          </Animated.View>
        </View>
      </Modal>

    </View>
  );
};

export default ProductDetail;

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
    fontFamily: "DMSans-Bold",
    marginTop: 12,
    color: "#964E1E",
  },

  modalSubtitle: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
    fontFamily: "DMSans-Regular",
  },

  closeButton: {
    backgroundColor: "#FF6C9B",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  closeText: {
    color: "#fff",
    fontFamily: "DMSans-Bold",
    fontSize: 14,
  },

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
    fontFamily: "DMSans-Bold",
    fontSize: 14,
  },
};