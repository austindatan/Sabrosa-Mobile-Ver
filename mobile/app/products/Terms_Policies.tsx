// @ts-nocheck
import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import styles from "../styles/UserSettings";

const TermsPolicies = () => {
  const scrollRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const termsSections = [
    {
      title: "Terms of Service",
      content:
        "Welcome to Sabrosa! By using our app, you agree to comply with and be bound by the following terms and conditions. Users are expected to act in accordance with applicable laws. Sabrosa reserves the right to suspend or terminate accounts that violate the terms. Continued use of the app constitutes acceptance of these terms.",
    },
    {
      title: "Privacy Policy",
      content:
        "Your privacy is important to us. We collect and use your personal information only to provide the best service possible, including order processing, payment, and delivery notifications. Personal data is stored securely and is never sold to third parties. Users may request access or deletion of their data in accordance with applicable laws.",
    },
    {
      title: "User Responsibilities",
      content:
        "Users agree to provide accurate information and use the app responsibly. Unauthorized access, misuse, or abusive behavior towards the app or other users may result in account suspension or termination. Users must comply with app guidelines and avoid fraudulent activity.",
    },
    {
      title: "Account Registration & Eligibility",
      content:
        "Users must register using accurate information. Only individuals 18 years or older, or those with parental consent, are eligible to create an account. Each account is personal and non-transferable. Users must keep their account information secure and notify Sabrosa immediately in case of unauthorized access.",
    },
    {
      title: "Payment & Orders",
      content:
        "All payments are processed securely through our platform. Users are responsible for any purchases made via their account. Payment details are encrypted and handled in accordance with industry standards. Orders must follow instructions provided within the app. Sabrosa is not responsible for incorrect payment information provided by users.",
    },
    {
      title: "Refund & Cancellation Policy",
      content:
        "Refunds may be provided under certain conditions, such as order errors, defective products, or service failures. Cancellation requests must follow app procedures and deadlines. Sabrosa reserves the right to approve or deny refund requests based on circumstances. Users are encouraged to review their order details before confirming.",
    },
    {
      title: "Prohibited Conduct",
      content:
        "Users must not engage in fraudulent, illegal, or abusive activities. This includes harassing other users, spreading misinformation, using the app for unlawful purposes, or attempting unauthorized access to app systems. Violations may result in account termination and legal action if applicable.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content, logos, images, and app design are the property of Sabrosa. Users may not copy, reproduce, distribute, or create derivative works without prior written consent. Unauthorized use of intellectual property is strictly prohibited and may result in legal action.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Sabrosa is not liable for indirect, incidental, or consequential damages arising from the use or inability to use the app. This includes loss of data, income, or other intangible losses. Users assume all risks associated with using the app and agree that liability is limited to the maximum extent permitted by law.",
    },
    {
      title: "Changes to Terms",
      content:
        "Sabrosa reserves the right to update these terms at any time. Users will be notified of significant changes through app notifications or emails. Continued use of the app after changes constitutes acceptance of the updated terms. Users are encouraged to review the terms regularly.",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
      >
        {/* Header with image and curved bottom */}
        <ImageBackground
          source={require("../../assets/images/initialization_assets/new.png")}
          style={headerStyles.curvedContainer}
          resizeMode="cover"
        >
          <Text style={headerStyles.headerTitle}>Terms & Policies</Text>
          <Text style={headerStyles.subtitle}>Read the rules and understand how we keep you safe</Text>
        </ImageBackground>

        <View style={styles.body}>
          {/* Terms Sections */}
          {termsSections.map((section, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{section.title}</Text>
              <Text style={{ marginTop: 8, color: "#555", lineHeight: 22, fontFamily: "DMSans-Regular" }}>{section.content}</Text>
            </View>
          ))}

          {/* Footer */}
          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <Text style={{ textAlign: "center", color: "#999", fontSize: 12, lineHeight: 18, fontFamily: "DMSans-Regular" }}>
              By using Sabrosa, you acknowledge that you have read, understood, and agree to these Terms & Policies.
            </Text>
            <TouchableOpacity style={{ alignSelf: "center", marginTop: 20 }} onPress={scrollToTop}>
              <Text style={{ color: "#FF6C9B", fontWeight: "600", fontFamily: "DMSans-Regular" }}>Back to Top</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  curvedContainer: {
    width: "100%",
    height: 150, // taller for image + curve + subtitle
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "DMSans-Bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    fontFamily: "DMSans-Regular",
  },
});

export default TermsPolicies;
