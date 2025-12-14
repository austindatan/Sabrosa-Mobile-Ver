// @ts-nocheck
import React from "react";
import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import styles from "../styles/BrandsHeader";

type StaticHeaderProps = {
  brandName: string;
  brandTagline: string;
  backgroundImage: any;
  brandLogo: any;
  sabrosaLogo?: any;
  placeholder?: string;
  staticHeaderHeight: number;
};

const StaticHeader = ({
  brandName,
  brandTagline,
  backgroundImage,
  brandLogo,
  sabrosaLogo = require("../../assets/images/initialization_assets/sabrosa_logo.png"),
  placeholder = "Look for products",
  staticHeaderHeight = 165,
}: StaticHeaderProps) => {

  return (
    <View
      style={[
        styles.headerWrapper,
        {
          height: staticHeaderHeight,
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
        <View>
          <View style={styles.brandInfo}>
            <View style={styles.brandLogoContainer}>
              <Image
                source={brandLogo}
                style={styles.brandLogoImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.brandTextContainer}>
              <Text style={styles.brandName}>{brandName}</Text>
              <Text style={styles.brandTagline}>{brandTagline}</Text>
            </View>

            {sabrosaLogo && (
              <Image
                source={sabrosaLogo}
                style={styles.logo}
                resizeMode="contain"
              />
            )}
          </View>
        </View>

        <View
          style={{
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default StaticHeader;