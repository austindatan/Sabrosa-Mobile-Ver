// @ts-nocheck
import React from "react";
import { View, Text, ImageBackground, Image, TextInput, Animated } from "react-native";
import styles from "../../assets/stylesheets/BrandsHeader";

const BrandsHeader = ({
  headerHeight,
  topContentOpacity,
  topContentTranslateY,
  logoScale,
  searchTranslateY,
}) => {
  return (
    <Animated.View
      style={[
        styles.headerWrapper,
        {
          height: headerHeight,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        },
      ]}
    >
      <ImageBackground
        source={require("../../assets/images/initialization_assets/compartes.png")}
        style={[styles.header, { height: "103%" }]}
        imageStyle={styles.headerImage}
        resizeMode="cover"
      >

        <Animated.View
          style={{
            opacity: topContentOpacity,
            transform: [{ translateY: topContentTranslateY }],
          }}
        >

          <View style={styles.brandInfo}>
            <View style={styles.brandLogoContainer}>
            <Animated.Image
                source={require("../../assets/images/initialization_assets/logo/compartes.png")}
                style={[styles.brandLogoImage, { transform: [{ scale: logoScale }] }]}
                resizeMode="contain"
            />
            </View>

            <View style={styles.brandTextContainer}>
              <Text style={styles.brandName}>Compartes</Text>
              <Text style={styles.brandTagline}>
                Taste the chocolate everyone's talking about...
              </Text>
            </View>
            <Animated.Image
              source={require("../../assets/images/initialization_assets/sabrosa_logo.png")}
              style={[styles.logo, { transform: [{ scale: logoScale }] }]}
              resizeMode="contain"
            />
          </View>
          
        </Animated.View>

        <Animated.View
          style={{
            transform: [{ translateY: searchTranslateY }],
            marginTop: 10,
          }}
        >
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <Image
                source={require("../../assets/images/initialization_assets/search.png")}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Look for products"
                placeholderTextColor="rgba(255, 108, 155, 0.4)"
                style={styles.searchInput}
              />
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
};

export default BrandsHeader;
