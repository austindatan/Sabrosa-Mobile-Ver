// @ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import styles from "../../assets/stylesheets/UserProfile";

const SkeletonLoader = ({ width = "100%", height = 20, borderRadius = 8, style }) => {
  return (
    <MotiView
      from={{ backgroundColor: "#ddddddff" }}
      animate={{ backgroundColor: "#e7edf1ff" }}
      transition={{
        type: "timing",
        duration: 800,
        loop: true,
        repeatReverse: true,
      }}
      style={[
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

const UserProfile = () => {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", height: 230, alignItems: "center", justifyContent: "center" }}>
          <SkeletonLoader width={90} height={90} borderRadius={45} />
          <SkeletonLoader width={150} height={20} style={{ marginTop: 15 }} />
          <SkeletonLoader width={100} height={15} style={{ marginTop: 8 }} />
        </View>

        <View style={{ padding: 20 }}>
          {/* Personal Info */}
          <SkeletonLoader width={130} height={18} style={{ marginBottom: 15 }} />
          {[1, 2, 3].map((_, i) => (
            <SkeletonLoader
              key={i}
              width="100%"
              height={18}
              style={{ marginBottom: i === 2 ? 0 : 10 }}
            />
          ))}

          <View style={{ marginTop: 25 }}>
            <SkeletonLoader width={130} height={18} style={{ marginBottom: 15 }} />
            {[1, 2].map((_, i) => (
              <SkeletonLoader
                key={i}
                width="100%"
                height={18}
                style={{ marginBottom: i === 1 ? 0 : 10 }}
              />
            ))}
          </View>

          <View style={{ marginTop: 25 }}>
            <SkeletonLoader width={130} height={18} style={{ marginBottom: 15 }} />
            {[1, 2, 3, 4, 5].map((_, i) => (
              <SkeletonLoader
                key={i}
                width="100%"
                height={18}
                style={{ marginBottom: i === 4 ? 0 : 10 }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header section with background */}
      <ImageBackground
        source={require("../../assets/images/initialization_assets/home_header.png")}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <View style={styles.profileSection}>
          <Image
            source={require("../../assets/images/initialization_assets/monkey-thinking-meme-monkey-thinking-sticker.png")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.userName}>Austin Dilan Datan</Text>
          <Text style={styles.userOccupation}>Student</Text>
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

        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
