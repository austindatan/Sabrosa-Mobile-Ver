import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Animated } from "react-native";
import styles from "../../assets/stylesheets/home";
import ProductCard from "../components/ProductCard";
import useHomeHeaderAnimation from "../../hooks/HeaderAnimation";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  const {
    scrollY,
    headerHeight,
    topContentOpacity,
    topContentTranslateY,
    logoScale,
    searchTranslateY,
    HEADER_MAX,
  } = useHomeHeaderAnimation();

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
          { useNativeDriver: false }
        )}
      >
        <View style={styles.specialOffer}>
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

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Picks!</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productGrid}>
          <ProductCard
            productName="Tropical Mango & Passionfruit"
            price="₱195"
            productImage={require("../../assets/images/initialization_assets/food/product1.png")}
            brandImage={require("../../assets/images/initialization_assets/logo/byronbay_logo.png")}
          />
          <ProductCard
            productName="Peaches & Cream Soda"
            price="₱95"
            productImage={require("../../assets/images/initialization_assets/food/barbie.png")}
            brandImage={require("../../assets/images/initialization_assets/logo/olipop_black.png")}
          />
          <ProductCard
            productName="Special Mixed Yakisoba"
            price="₱125"
            productImage={require("../../assets/images/initialization_assets/food/bun.png")}
            brandImage={require("../../assets/images/initialization_assets/logo/sweets_logo.png")}
          />
          <ProductCard
            productName="Double Dutch Originals"
            price="₱95"
            productImage={require("../../assets/images/initialization_assets/food/don.png")}
            brandImage={require("../../assets/images/initialization_assets/logo/sabrosa_logo.png")}
          />
          <ProductCard
            productName="Dragon Noodles"
            price="₱95"
            productImage={require("../../assets/images/initialization_assets/food/product2.png")}
            brandImage={require("../../assets/images/initialization_assets/logo/sweets_logo.png")}
          />
          <ProductCard
            productName="Tea Chest Pyramid"
            price="₱95"
            productImage={require("../../assets/images/initialization_assets/food/tea.png")}
            brandImage={require("../../assets/images/initialization_assets/logo/tea_logo.png")}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
