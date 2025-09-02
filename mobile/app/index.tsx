import { StyleSheet, Text, View, Image } from "react-native";
import React from 'react';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image 
        source={require("../assets/images/initializion_assets/monkey-thinking-meme-monkey-thinking-sticker.png")}
        style={styles.topImage}
        />
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>What's Up!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topImageContainer: {
    // blank
  },
  topImage: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  greetingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    fontFamily: "Arial",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,
    lineHeight: 30,
    textTransform: "uppercase",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    maxWidth: "80%",
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    boxSizing: "border-box"
  }
});

export default index;
