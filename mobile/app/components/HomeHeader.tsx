// @ts-nocheck
import React from "react";
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, Animated } from "react-native";
import styles from "../../assets/stylesheets/home";

const HomeHeader = ({
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
        source={require("../../assets/images/initialization_assets/home_header.png")}
        style={[styles.header, { height: "100%" }]}
        imageStyle={styles.headerImage}
        resizeMode="cover"
      >
        <Animated.View
          style={{
            opacity: topContentOpacity,
            transform: [{ translateY: topContentTranslateY }],
          }}
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
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
};

export default HomeHeader;
