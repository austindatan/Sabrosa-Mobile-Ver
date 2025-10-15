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
          
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: searchTranslateY }],
            marginTop: 10,
          }}
        >
          
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
};

export default HomeHeader;
