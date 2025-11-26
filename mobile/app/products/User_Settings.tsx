// @ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/UserSettings";

const User_Settings = () => {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [loading, setLoading] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/initialization_assets/new.png")}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <View style={styles.profileSection}>
          <Image
            source={require("../../assets/images/initialization_assets/user_avatar.png")}
            style={styles.avatar}
          />
        </View>
      </ImageBackground>
      
      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Info</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Your name</Text>
            <Text style={styles.value}>Austin Dilan Datan</Text>
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
            <Text style={styles.value}>0992 828 1609</Text>
          </View>
          <View style={[styles.infoRow, { marginBottom: 0 }]}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>austindatan@gmail.com</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="person-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Account Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
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

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="help-circle-outline" size={22} color="#FF6C9B" />
            <Text style={styles.settingLabel}>Help Center</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
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
            onPress={() => router.push("/login")}
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
