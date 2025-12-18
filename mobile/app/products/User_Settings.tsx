// @ts-nocheck
import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch, Image, ImageBackground, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import styles from "../styles/UserSettings";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config";

const User_Settings = () => {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      const userId = await AsyncStorage.getItem("userId");

      if (token && userId) {
        const response = await fetch(`${config.API_BASE_URL}/api/auth/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user data");
          handleLogout(); // maybe token expired
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, [])
  );

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync("token");
      await AsyncStorage.removeItem("userId");
      router.replace("/login");
    } catch (error) {
      Alert.alert("Logout Failed", "An error occurred while logging out.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/initialization_assets/new.png")}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <View style={styles.profileSection}>
          <Image
            source={user?.profileImage ? { uri: user.profileImage } : require("../../assets/images/initialization_assets/user_avatar.png")}
            style={styles.avatar}
          />
        </View>
      </ImageBackground>

      <View style={styles.bodyUser}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Info</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Your name</Text>
            <Text style={styles.value}>{user ? `${user.firstName} ${user.lastName}` : "Loading..."}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Occupation</Text>
            <Text style={styles.value}>Student</Text>
          </View>
          <View style={[styles.infoRow, { marginBottom: 0 }]}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>Carmen, Cagayan de Oro</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Info</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone number</Text>
            <Text style={styles.value}>{user ? user.number : "Loading..."}</Text>
          </View>
          <View style={[styles.infoRow, { marginBottom: 0 }]}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user ? user.email : "Loading..."}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => router.push("products/Edit_Profile")}
        >
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Settings</Text>

          <TouchableOpacity
            style={styles.settingRow}
            activeOpacity={0.7}
            onPress={() => router.push("products/Account_Settings")}
          >
            <Ionicons name="person-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Account Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            activeOpacity={0.7}
            onPress={() => router.push("products/Privacy")}
          >
            <Ionicons name="lock-closed-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Privacy</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="notifications-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            activeOpacity={0.7}
            onPress={() => router.push("products/Help_Center")}
          >
            <Ionicons name="help-circle-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Help Center</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            activeOpacity={0.7}
            onPress={() => router.push("products/Terms_Policies")}
          >
            <Ionicons name="document-text-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Terms & Policies</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.settingRow,
              { borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0 },
            ]}
            activeOpacity={0.8}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { color: "#FF6C9B" }]}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default User_Settings;
