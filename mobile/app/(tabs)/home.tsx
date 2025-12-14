// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import { View, Animated, ScrollView, ImageBackground, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Header from "../components/HomeHeader";
import ProductCard from "../components/ProductCard";
import { useRouter } from "expo-router";
import styles from "../styles/AppEffects";
import useHideOnScroll from "../../hooks/useHideOnScroll";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import config from "../../config";

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the scroll handler from the hook
  const { handleScroll } = useHideOnScroll();

  const fetchRandomProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${config.API_BASE_URL}/api/products`);
      const allProducts = res.data.products || res.data;

      // Shuffle and get 10 random products
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      const randomProducts = shuffled.slice(0, 10);

      setProducts(randomProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchRandomProducts();
  }, []);

  // Refresh every time user returns to this screen
  useFocusEffect(
    React.useCallback(() => {
      fetchRandomProducts();
    }, [])
  );

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Header />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
            listener: handleScroll, // Listener to hide/show the tab bar
          }
        )}
      >
        <View style={[styles.specialOffer, { marginTop: 15 }]}>
          <ImageBackground
            source={require("../../assets/images/initialization_assets/promo_banner-Bg.png")}
            style={styles.offerImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>Special Offer for March</Text>
              <Text style={styles.offerSubtitle}>
                A flavor that will make you feel nostalgia and home.
              </Text>
              <TouchableOpacity style={styles.offerButton}>
                <Text style={styles.offerButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Picks!</Text>
            <TouchableOpacity onPress={() => router.push("/products/Search")}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <View style={{ padding: 40, alignItems: "center" }}>
              <ActivityIndicator size="large" color="#FF6C9B" />
              <Text style={{ marginTop: 10, color: "#999", fontFamily: "DMSans-Medium" }}>
                Loading products...
              </Text>
            </View>
          ) : (
            <View style={styles.productGrid}>
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  productName={product.productName}
                  price={`₱${product.price}`}
                  productImage={{ uri: product.productImages?.[0] }}
                  brandImage={{ uri: product.brand?.image }}
                  onPress={() => router.push(`/products/${product._id}`)}
                />
              ))}
            </View>
          )}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
