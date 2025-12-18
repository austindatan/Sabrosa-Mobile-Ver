// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
  Animated,
  Pressable,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config";
import styles from "../styles/UserSettings"; // Reuse styling
import { Ionicons } from "@expo/vector-icons";

const Edit_Profile = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [profilePic, setProfilePic] = useState(null);

  const [coverPhoto] = useState(
    require("../../assets/images/initialization_assets/new.png")
  );

  const [showModal, setShowModal] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        const userId = await AsyncStorage.getItem("userId");
        if (!token || !userId) return;

        const res = await fetch(`${config.API_BASE_URL}/api/auth/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          console.error("Failed to load user data");
          return;
        }

        const data = await res.json();
        setUser(data);

        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setNumber(data.number || "");
        setEmail(data.email || "");

        setProfilePic(data.profileImage || null);
      } catch (err) {
        console.error("Error loading user:", err);
      }
    };

    loadUser();
  }, []);

  const openModal = () => {
    setShowModal(true);
    Animated.parallel([
      Animated.timing(scaleAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, { toValue: 0.8, duration: 200, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
    ]).start(() => setShowModal(false));
  };

  const handleSave = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      const userId = await AsyncStorage.getItem("userId");
      if (!token || !userId) return;

      const body = { firstName, lastName, number, email };

      const res = await fetch(`${config.API_BASE_URL}/api/auth/users/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const contentType = res.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const resData = await res.json();
        if (res.ok) {
          openModal();
        } else {
          Alert.alert("Error", resData.error || "Failed to update profile.");
        }
      } else {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        Alert.alert("Error", "Unexpected server response. See console for details.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  if (!user) {
    return (
      <ScrollView style={styles.container}>
        <Text style={{ margin: 20 }}>Loading user data...</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={coverPhoto} style={styles.headerBackground} resizeMode="cover">
        <View style={styles.profileSection}>
          <Image
            source={
              profilePic
                ? { uri: profilePic }
                : require("../../assets/images/initialization_assets/user_avatar.png")
            }
            style={styles.avatar}
          />
        </View>
      </ImageBackground>

      <View style={styles.bodyUser}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Edit Personal Info</Text>

          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={[styles.textInput, { backgroundColor: "#f0f0f0", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 8, marginBottom: 12 }]}
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={[styles.textInput, { backgroundColor: "#f0f0f0", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 8, marginBottom: 12 }]}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={[styles.textInput, { backgroundColor: "#f0f0f0", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 8, marginBottom: 12 }]}
            value={number}
            onChangeText={setNumber}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.textInput, { backgroundColor: "#f0f0f0", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 8, marginBottom: 12 }]}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <Pressable style={styles.editProfileButton} onPress={handleSave}>
          <Text style={styles.editProfileText}>Save Changes</Text>
        </Pressable>
      </View>

      {showModal && (
        <Modal transparent visible={showModal} animationType="fade">
          <View style={modalStyles.overlay}>
            <Animated.View
              style={[modalStyles.modalContainer, { transform: [{ scale: scaleAnim }], opacity: opacityAnim }]}
            >
              <Ionicons name="checkmark-circle" size={60} color="#FF6C9B" />
              <Text style={modalStyles.modalTitle}>Profile Updated!</Text>
              <Text style={modalStyles.modalSubtitle}>Your changes have been saved.</Text>

              <View style={modalStyles.buttonRow}>
                <Pressable style={modalStyles.closeButton} onPress={closeModal}>
                  <Text style={modalStyles.closeText}>Close</Text>
                </Pressable>

                <Pressable style={modalStyles.cartButton} onPress={() => router.back()}>
                  <Text style={modalStyles.cartText}>Go Back</Text>
                </Pressable>
              </View>
            </Animated.View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

export default Edit_Profile;

const modalStyles = {
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center" },
  modalContainer: { width: 280, padding: 20, backgroundColor: "#fff", borderRadius: 14, alignItems: "center", elevation: 10 },
  modalTitle: { fontSize: 18, fontFamily: "DMSans-Bold", marginTop: 12, color: "#964E1E" },
  modalSubtitle: { fontSize: 13, color: "#555", textAlign: "center", marginTop: 5, fontFamily: "DMSans-Regular" },
  closeButton: { backgroundColor: "#FF6C9B", paddingVertical: 10, paddingHorizontal: 25, borderRadius: 8 },
  closeText: { color: "#fff", fontFamily: "DMSans-Bold", fontSize: 14 },
  buttonRow: { flexDirection: "row", gap: 10, marginTop: 20 },
  cartButton: { backgroundColor: "#964E1E", paddingVertical: 10, paddingHorizontal: 25, borderRadius: 8 },
  cartText: { color: "#fff", fontFamily: "DMSans-Bold", fontSize: 14 },
};
