// @ts-nocheck
import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const OrderSuccessScreen = ({ navigation }) => {
  const [count, setCount] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
        setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (count === 0) {
          router.push("/UserProfile")
        }
    }, [count]);

  return (
    <View style={styles.container}>
      {/* Placeholder doodle background */}
      <ImageBackground
        source={require("../../assets/images/initialization_assets/ordered.png")} 
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.centerContainer}>
          <Image
            source={require("../../assets/images/initialization_assets/sabrosa_logo.png")}
            style={styles.logo}
          />

          <Text style={styles.title}>The order has{'\n'}been snuggled in!</Text>

          <Text style={styles.subtitle}>
            Grab your favorite blanket! We'll work fast{'\n'}to get your delivery to your doorstep!
          </Text>
          
          <Text style={styles.subtitle2}>
          </Text>
        </View>

        <Text style={styles.redirectText}>Redirecting in {count}s.</Text>
      </ImageBackground>
    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    alignItems: "center",
  },

  centerContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    top: 250,
  },

  logo: {
    width: 98,
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontFamily: "DMSans-Bold",
    textAlign: "center",
    color: "#F9558D",
    marginBottom: 20,
    lineHeight: 25,
  },

  subtitle: {
    fontSize: 15,
    fontFamily: "DMSans-Medium",
    textAlign: "center",
    color: "#555",
    lineHeight: 15,
  },

  subtitle2: {
    fontSize: 15,
    fontFamily: "DMSans-Medium",
    textAlign: "center",
    color: "#555",
    lineHeight: 20,
  },

  redirectText: {
    position: "absolute",
    bottom: 50,
    fontSize: 14,
    color: "#666",
    fontFamily: "DMSans-Regular",
  },
});
