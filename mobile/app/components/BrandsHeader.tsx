// @ts-nocheck
import React from "react";
import { View, Text, ImageBackground, Image, TextInput, Animated } from "react-native";
import styles from "../styles/BrandsHeader";

type AnimatedHeaderProps = {
  headerHeight: Animated.Value;
  topContentOpacity: Animated.AnimatedInterpolation<string | number>;
  topContentTranslateY: Animated.AnimatedInterpolation<string | number>;
  logoScale: Animated.AnimatedInterpolation<string | number>;
  searchTranslateY: Animated.AnimatedInterpolation<string | number>;
  brandName: string;
  brandTagline: string;
  backgroundImage: any;
  brandLogo: any;
  sabrosaLogo?: any;
  placeholder?: string;
};

const AnimatedHeader = ({
  headerHeight,
  topContentOpacity,
  topContentTranslateY,
  logoScale,
  searchTranslateY,
  brandName,
  brandTagline,
  backgroundImage,
  brandLogo,
  sabrosaLogo = require("../../assets/images/initialization_assets/sabrosa_logo.png"),
  placeholder = "Look for products",
}: AnimatedHeaderProps) => {
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
        source={backgroundImage}
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
                source={brandLogo}
                style={[styles.brandLogoImage, { transform: [{ scale: logoScale }] }]}
                resizeMode="contain"
              />
            </View>

            <View style={styles.brandTextContainer}>
              <Text style={styles.brandName}>{brandName}</Text>
              <Text style={styles.brandTagline}>{brandTagline}</Text>
            </View>

            {sabrosaLogo && (
              <Animated.Image
                source={sabrosaLogo}
                style={[styles.logo, { transform: [{ scale: logoScale }] }]}
                resizeMode="contain"
              />
            )}
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
                placeholder={placeholder}
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

export default AnimatedHeader;
