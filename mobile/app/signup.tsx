import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Pressable, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import config from "../config";

const SignUp = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) setDate(selectedDate);
  };

  const formatDate = (d?: Date) => {
    if (!d) return "";
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yy = String(d.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  };

  const handleRegister = async () => {
    try {
      const body = {
        firstName,
        lastName,
        birthday: formatDate(date),
        number,
        email,
        password,
      };

      const res = await fetch(`${config.API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Registration Successful!");
      router.replace("/(tabs)/Home");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/initialization_assets/signup_bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.leftTagline}>
            <Pressable onPress={() => router.push("/")}>
              <Image
                source={require("../assets/images/initialization_assets/arrow-narrow-left.png")}
                style={styles.leftarrow}
              />
            </Pressable>
          </View>
        </View>

        <Image
          source={require("../assets/images/initialization_assets/sabrosa_logo.png")}
          style={styles.sabrosa_logo}
        />

        <View style={styles.onboardingContainer}>
          <View style={styles.onboardingTitle}>
            <Text style={styles.titleBase}>Register</Text>
            <Text style={styles.subtitleBase}>Create an account to continue! </Text>
          </View>

          <View style={styles.onboardingForm}>
            <TextInput
              style={styles.inputBase}
              placeholder="First Name"
              placeholderTextColor="#8C8C8C"
              value={firstName}
              onChangeText={setFirstName}
            />

            <TextInput
              style={styles.inputBase}
              placeholder="Last Name"
              placeholderTextColor="#8C8C8C"
              value={lastName}
              onChangeText={setLastName}
            />

            <TextInput
              style={styles.inputBase}
              placeholder="Email"
              placeholderTextColor="#8C8C8C"
              value={email}
              onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.inputBase} onPress={() => setShow(true)}>
              <Text style={{ color: date ? "#000" : "#8C8C8C" }}>
                Birthday: {date ? formatDate(date) : "MM/DD/YY"}
              </Text>
            </TouchableOpacity>

            {show && (
              <DateTimePicker value={date || new Date()} mode="date" display="default" onChange={onChange} />
            )}

            <TextInput
              style={styles.inputBase}
              placeholder="Number"
              placeholderTextColor="#8C8C8C"
              value={number}
              onChangeText={setNumber}
            />

            <TextInput
              style={styles.inputBase}
              placeholder="Password"
              placeholderTextColor="#8C8C8C"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={[styles.btnBase, { backgroundColor: "#FF6C9B" }]} onPress={handleRegister}>
              <Text style={[styles.btnText, { color: "#fff" }]}>Register</Text>
            </TouchableOpacity>

            <Text style={styles.termsBase}>
              By continuing, you agree to our Terms and Conditions and Privacy Policy
            </Text>
          </View>
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
    paddingHorizontal: 16,
  },

  leftarrow: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginBottom: 6,
  },

  taglineLeft: {
    marginBottom: 4,
  },

  sabrosa_logo: {
    width: 119,
    height: 146,
    marginTop: -30,
  },

  onboardingContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginTop: 63,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  onboardingForm: {
    alignItems: "center",
  },

  onboardingTitle: {
    alignItems: "flex-start",
    paddingHorizontal: 18,
  },

  titleBase: {
    fontFamily: "DMSans-Bold",
    fontSize: 16,
    marginBottom: 3,
  },

  subtitleBase: {
    fontFamily: "DMSans-EXLight",
    fontSize: 11,
    marginBottom: 12,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10,
  },

  inputBase: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    width: "90%",
    borderColor: "#8C8C8C",
    marginBottom: 12,
  },

  btnText: {
    fontFamily: "Gabarito",
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
  },

  btnBase: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
    width: "90%",
  },

  termsBase: {
    fontFamily: "DMSans-EXLight",
    fontSize: 9,
  },
});

export default SignUp;
