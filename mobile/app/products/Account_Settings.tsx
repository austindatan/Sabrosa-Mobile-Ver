// @ts-nocheck
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  ImageBackground,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/UserSettings";

const AccountSettings = () => {
  const router = useRouter();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleChangePassword = () =>
    Alert.alert("Change Password", "This feature is under development.");
  const handleEditProfile = () => router.push("/products/Edit_Profile");
  const handleLanguageChange = () =>
    Alert.alert("Language", "This feature is under development.");
  const handleLogout = () =>
    Alert.alert("Logout", "You have been logged out.");

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={headerStyles.curvedContainer}>
        <ImageBackground
          source={require("../../assets/images/initialization_assets/new.png")}
          style={headerStyles.background}
          resizeMode="cover"
        >
          <Text style={headerStyles.title}>Account Settings</Text>
          <Text style={headerStyles.subtitle}>
            Manage your profile and preferences
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Options</Text>

          <TouchableOpacity
            style={styles.settingRow}
            onPress={handleEditProfile}
            activeOpacity={0.7}
          >
            <Ionicons name="person-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Edit Profile</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            onPress={handleChangePassword}
            activeOpacity={0.7}
          >
            <Ionicons name="key-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <View style={styles.settingRow}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color="#FF6C9B"
            />
            <Text style={styles.settingLabel}>Two-Factor Authentication</Text>
            <Switch
              value={twoFactorEnabled}
              onValueChange={setTwoFactorEnabled}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingRow}>
            <Ionicons name="notifications-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </View>

          <TouchableOpacity
            style={styles.settingRow}
            onPress={handleLanguageChange}
            activeOpacity={0.7}
          >
            <Ionicons name="language-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Language</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            onPress={() =>
              Alert.alert(
                "Deactivate Account",
                "This feature is under development."
              )
            }
            activeOpacity={0.7}
          >
            <Ionicons name="trash-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { color: "#FF6C9B" }]}>
              Deactivate Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            onPress={handleLogout}
            activeOpacity={0.7}
          >
            <Ionicons name="log-out-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { color: "#FF6C9B" }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ textAlign: "center", color: "#999", fontSize: 12, fontFamily: "DMSans-Regular" }}>
            Manage your account settings and preferences here. You can edit
            your profile, secure your account, control notifications, or
            deactivate it if necessary.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const headerStyles = StyleSheet.create({
  curvedContainer: {
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  background: {
    width: "100%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 25 : 25,
  },
  title: {
    fontSize: 22,
    fontFamily: "DMSans-Bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "#fff",
    marginTop: 1,
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "DMSans-Regular",
  },
});

export default AccountSettings;
