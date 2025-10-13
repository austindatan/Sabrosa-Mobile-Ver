import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const router = useRouter();
const handleLogin = () => {
  router.replace("/(tabs)/Home");
}

const Login = () => {
  return (
    <ImageBackground
      source={require("../assets/images/initialization_assets/sabrosa_standard.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.headerRow}>

          <View style={styles.leftTagline}>
            <Text style={styles.taglineLeft}>Taste the {"\n"}sweetness!</Text>
            <Image
              source={require("../assets/images/initialization_assets/sabrosa_logo.png")}
              style={styles.logo}
            />
          </View>

          <Text style={[styles.taglineRight]}>
            A flavor that will make{"\n"} you feel nostalgia{"\n"} and home
          </Text>

        </View>

        <Image
          source={require("../assets/images/initialization_assets/tres_leches.png")}
          style={styles.tresLeches}
        />

        <View style={styles.onboardingForm}>
          <Text style={styles.titleBase}>Sign Up or Log In</Text>
          <Text style={styles.subtitleBase}>Select your preferred method to continue</Text>
          
          <TouchableOpacity style={[styles.btnBase, { backgroundColor: "#fff", borderColor: "#8C8C8C", marginBottom: 8 }]} onPress={handleLogin}>
            <Image
              source={require("../assets/images/initialization_assets/google.png")}
              style={styles.icon}
            />
            <Text style={[styles.btnText, { color: "#8C8C8C" }]}>  Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnBase, { backgroundColor: "#1877F2", borderColor: "#1877F2", marginBottom: 2 }]}>
            <Image
              source={require("../assets/images/initialization_assets/facebook.png")}
              style={styles.icon}
            />
            <Text style={[styles.btnText, { color: "#fff" }]}>Continue with Facebook</Text>
          </TouchableOpacity>

          <View style={[styles.segregationFlow, { flexDirection: "row", alignItems: "center", marginVertical: 10 }]}>
            <View style={{ width: 50, height: 1, backgroundColor: "#fff" }} />
            <Text style={{ marginHorizontal: 8, color: "#fff", fontSize: 12 }}>or</Text>
            <View style={{ width: 50, height: 1, backgroundColor: "#fff" }} />
          </View>

          <TouchableOpacity style={[styles.btnBase, { backgroundColor: "#fff", borderColor: "#000", marginBottom: 8 }]}>
            <Image
              source={require("../assets/images/initialization_assets/email.png")}
              style={styles.icon}
            />
            <Text style={[styles.btnText, { color: "#000" }]}>Continue with Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.registerBase, { backgroundColor: "#FF6C9B", borderColor: "#FF6C9B", marginBottom: 8 }]} onPress={() => router.push("/signup")}>
            <Image
              source={require("../assets/images/initialization_assets/person.png")}
              style={styles.icon}
            />
            <Text style={[styles.btnText, { color: "#fff" }]}>Register Account</Text>
          </TouchableOpacity>

          <Text style={styles.termsBase}>By continuing, you agree to our Terms and Conditions and Privacy Policy</Text>

        </View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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

  leftTagline: {
    alignItems: "flex-start",
  },

  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    marginBottom: 6,
  },

  taglineLeft: {
    fontFamily: "Barlow",
    fontSize: 11,
    fontWeight: "400",
    color: "#964E1E",
    marginBottom: 4,
  },

  taglineRight: {
    fontFamily: "Barlow",
    fontSize: 11,
    fontWeight: "400",
    color: "#964E1E",
    textAlign: "right",
    maxWidth: 110,
  },

  tresLeches: {
    width: 604,
    height: 459,
    marginTop: -75,
  },

  onboardingForm: {
    marginTop: -60,
  },

  segregationFlow: {
    justifyContent: "center",
  },

  titleBase: {
    fontFamily: "DMSans-Bold",
    fontSize: 16,
    marginBottom:3,
  },

  subtitleBase: {
    fontFamily: "DMSans-EXLight",
    fontSize: 11,
    marginBottom: 12,
  },

  termsBase: {
    fontFamily: "DMSans-EXLight",
    fontSize: 9,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10,
  },

  btnBase: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
    width: "90%",
  },

  btnText: {
    fontFamily: "Gabarito",
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
  },

  registerBase: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 9,
    borderRadius: 8,
    width: "90%",
  },
  
  
});

export default Login;
