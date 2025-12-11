// @ts-nocheck
import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  StyleSheet,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/UserSettings";

const HelpCenter = () => {
  const scrollRef = useRef<ScrollView>(null);

  const openLink = (url: string) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) Linking.openURL(url);
        else Alert.alert("Error", "Cannot open this link.");
      })
      .catch(() => Alert.alert("Error", "Failed to open link."));
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <ScrollView style={styles.container} ref={scrollRef} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <View style={headerStyles.curvedContainer}>
        <ImageBackground
          source={require("../../assets/images/initialization_assets/new.png")}
          style={headerStyles.background}
          resizeMode="cover"
        >
          <Text style={headerStyles.title}>Help Center</Text>
          <Text style={headerStyles.subtitle}>Find answers and get support</Text>
        </ImageBackground>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* FAQ Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Frequently Asked Questions</Text>

          <TouchableOpacity style={styles.settingRow} onPress={() => openLink("https://example.com/faq#account")}>
            <Text style={styles.settingLabel}>Account & Profile</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow} onPress={() => openLink("https://example.com/faq#privacy")}>
            <Text style={styles.settingLabel}>Privacy & Security</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow} onPress={() => openLink("https://example.com/faq#notifications")}>
            <Text style={styles.settingLabel}>Notifications & Alerts</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Additional FAQ Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>More FAQs</Text>

          <TouchableOpacity style={styles.settingRow} onPress={() => openLink("https://example.com/faq#payments")}>
            <Text style={styles.settingLabel}>Payments & Subscriptions</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow} onPress={() => openLink("https://example.com/faq#orders")}>
            <Text style={styles.settingLabel}>Orders & Delivery</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow} onPress={() => openLink("https://example.com/faq#technical")}>
            <Text style={styles.settingLabel}>Technical Issues</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow} onPress={() => openLink("https://example.com/faq#features")}>
            <Text style={styles.settingLabel}>App Features</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Quick Actions Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("https://example.com/track-order")}>
            <Ionicons name="locate-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Track Your Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("mailto:bugs@example.com")}>
            <Ionicons name="bug-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Report a Bug</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("https://example.com/request-feature")}>
            <Ionicons name="add-circle-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Request a Feature</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Support Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Support</Text>
          <Text style={{ marginBottom: 10, color: "#555" }}>
            Need further assistance? Reach out to our support team and we’ll be happy to help!
          </Text>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("mailto:support@example.com")}>
            <Ionicons name="mail-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Email Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("tel:+1234567890")}>
            <Ionicons name="call-outline" size={22} color="#FF6C9B" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Call Us</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Connect with Us</Text>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("https://facebook.com/example")}>
            <Ionicons name="logo-facebook" size={22} color="#3b5998" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("https://instagram.com/example")}>
            <Ionicons name="logo-instagram" size={22} color="#C13584" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, { justifyContent: "flex-start" }]} onPress={() => openLink("https://twitter.com/example")}>
            <Ionicons name="logo-twitter" size={22} color="#1DA1F2" />
            <Text style={[styles.settingLabel, { marginLeft: 10 }]}>Twitter</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={{ marginTop: 20, marginBottom: 30 }}>
          <Text style={{ textAlign: "center", color: "#999", fontSize: 12, lineHeight: 18 }}>
            Explore the above sections to find answers to common questions and contact our support team for further assistance. Sabrosa is here to make your experience smooth, safe, and enjoyable.
          </Text>
          <TouchableOpacity style={{ alignSelf: "center", marginTop: 20 }} onPress={scrollToTop}>
            <Text style={{ color: "#FF6C9B", fontWeight: "600" }}>Back to Top</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Header styles (same as Privacy)
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

export default HelpCenter;
