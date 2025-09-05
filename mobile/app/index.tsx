import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const router = useRouter();

const index = () => {
  return (
    <ImageBackground
      source={require("../assets/images/initialization_assets/onboarding_illus.png")}
      style={[styles.background, { width: 400, height: 550, alignSelf: "center"}]}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require("../assets/images/initialization_assets/linear_gra.png")} style={styles.lineargra} />

        <View style={styles.introBase}>
          <Image source={require("../assets/images/initialization_assets/sabrosa_logo.png")} style={styles.logo} />
          <Text style={styles.titleBase}>Taste the sweetness!</Text>
          <Text style={styles.subtitleBase}>A flavor that will make you feel {"\n"}nostalgia and home</Text>
          
          <TouchableOpacity style={[styles.btnBase, { backgroundColor: "#1F27A6", borderColor: "#1F27A6", marginBottom: 8 }]} onPress={() => router.push("/login")}>
            <Text style={[styles.btnText, { color: "#fff" }]}>Get Started!</Text>
          </TouchableOpacity>
        </View>
        
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  headerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  lineargra: {
    position: "absolute",
    bottom: 0,
    resizeMode: "cover",
  },

  introBase: {
    position: "absolute",
    bottom: 70,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 6,
  },

  titleBase: {
    fontFamily: "DMSans-Bold",
    fontSize: 28,
    marginBottom:3,
    color: "#fff",
  },

  subtitleBase: {
    fontFamily: "DMSans-EXLight",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },

  btnBase: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },

  btnText: {
    fontFamily: "Gabarito",
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
  },

});

export default index;
