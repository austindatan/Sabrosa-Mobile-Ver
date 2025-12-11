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
import styles from "../styles/UserSettings";

const Privacy = () => {
  const [profilePrivate, setProfilePrivate] = useState(false);
  const [allowSearch, setAllowSearch] = useState(true);
  const [showActivityStatus, setShowActivityStatus] = useState(true);
  const [allowDataSharing, setAllowDataSharing] = useState(false);
  const [adPersonalization, setAdPersonalization] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);

  const handleBlockedAccounts = () => {
    Alert.alert("Blocked Accounts", "This feature is under development.");
  };

  const handleDownloadData = () => {
    Alert.alert("Download Data", "This feature is under development.");
  };

  const handleSessionManagement = () => {
    Alert.alert("Active Sessions", "This feature is under development.");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <View style={headerStyles.curvedContainer}>
        <ImageBackground
          source={require("../../assets/images/initialization_assets/new.png")}
          style={headerStyles.background}
          resizeMode="cover"
        >
          <Text style={headerStyles.title}>Privacy Settings</Text>
          <Text style={headerStyles.subtitle}>Control your privacy and security</Text>
        </ImageBackground>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Privacy Options</Text>

          <View style={styles.settingRow}>
            <Ionicons name="eye-off-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Private Profile</Text>
            <Switch
              value={profilePrivate}
              onValueChange={setProfilePrivate}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingRow}>
            <Ionicons name="search-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Allow Search by Email/Phone</Text>
            <Switch
              value={allowSearch}
              onValueChange={setAllowSearch}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingRow}>
            <Ionicons name="pulse-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Show Activity Status</Text>
            <Switch
              value={showActivityStatus}
              onValueChange={setShowActivityStatus}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingRow}>
            <Ionicons name="analytics-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Allow Data Sharing</Text>
            <Switch
              value={allowDataSharing}
              onValueChange={setAllowDataSharing}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingRow}>
            <Ionicons name="bar-chart-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Ad Personalization</Text>
            <Switch
              value={adPersonalization}
              onValueChange={setAdPersonalization}
              trackColor={{ false: "#ccc", true: "#FF6C9B" }}
              thumbColor="#fff"
            />
          </View>

          <TouchableOpacity style={styles.settingRow} onPress={handleBlockedAccounts} activeOpacity={0.7}>
            <Ionicons name="ban-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Blocked Accounts</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ textAlign: "center", color: "#999", fontSize: 12 }}>
            Control your privacy and security settings. Manage who sees your profile, your activity, data sharing preferences, location, and connected sessions.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Header styles
const headerStyles = StyleSheet.create({
  curvedContainer: {
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  background: {
    width: "100%",
    height: 130, // smaller photo height
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 25 : 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "#fff",
    marginTop: 2,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Privacy;
