import { View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "../../assets/stylesheets/home";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 70 }}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.headerWrapper}>
        <ImageBackground
          source={require("../../assets/images/initialization_assets/home_header.png")}
          style={styles.header}
          imageStyle={styles.headerImage}
          resizeMode="cover"
        >

          <View style={styles.contentContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.locationLabel}>Location</Text>
              <View style={styles.locationRow}>
                <Image
                  source={require("../../assets/images/initialization_assets/location.png")}
                  style={styles.locationIcon}
                  resizeMode="contain"
                />
                <Text style={styles.locationValue}>
                  Cagayan de Oro, Philippines
                </Text>
              </View>
            </View>

            <Image
              source={require("../../assets/images/initialization_assets/sabrosa_logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <Image
                source={require("../../assets/images/initialization_assets/search.png")}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#999"
                style={styles.searchInput}
              />
            </View>

            <TouchableOpacity style={styles.filterButton}>
              <Image
                source={require("../../assets/images/initialization_assets/filter_big.png")}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

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
          productName="Salted Caramel Bliss"
          price="₱95"
          productImage={require("../../assets/images/initialization_assets/product2.png")}
          brandImage={require("../../assets/images/initialization_assets/byronbay_logo.png")}
        />

        <ProductCard
          productName="Salted Caramel Bliss"
          price="₱95"
          productImage={require("../../assets/images/initialization_assets/product2.png")}
          brandImage={require("../../assets/images/initialization_assets/byronbay_logo.png")}
        />

        <ProductCard
          productName="Salted Caramel Bliss"
          price="₱95"
          productImage={require("../../assets/images/initialization_assets/product2.png")}
          brandImage={require("../../assets/images/initialization_assets/byronbay_logo.png")}
        />

        <ProductCard
          productName="Salted Caramel Bliss"
          price="₱95"
          productImage={require("../../assets/images/initialization_assets/product2.png")}
          brandImage={require("../../assets/images/initialization_assets/byronbay_logo.png")}
        />

        <ProductCard
          productName="Salted Caramel Bliss"
          price="₱95"
          productImage={require("../../assets/images/initialization_assets/product2.png")}
          brandImage={require("../../assets/images/initialization_assets/byronbay_logo.png")}
        />

        <ProductCard
          productName="Salted Caramel Bliss"
          price="₱95"
          productImage={require("../../assets/images/initialization_assets/product2.png")}
          brandImage={require("../../assets/images/initialization_assets/byronbay_logo.png")}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

