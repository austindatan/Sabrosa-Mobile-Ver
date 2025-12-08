// @ts-nocheck
import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView, Alert, ImageBackground } from "react-native";
import axios from "axios";
import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/CheckoutPage";

export default function PaymentMethodPage() {
    const router = useRouter();

    const [selectedType, setSelectedType] = useState("Credit Card");
    const [cardNumber, setCardNumber] = useState("");
    const [gcashNumber, setGcashNumber] = useState("");
    const [paymentMethods, setPaymentMethods] = useState([]);

    const loadMethods = async () => {
        const userId = await AsyncStorage.getItem("userId");
        const res = await axios.get(`${config.API_BASE_URL}/api/payment/list/${userId}`);
        setPaymentMethods(res.data);
    };

    const saveMethod = async () => {
        const userId = await AsyncStorage.getItem("userId");

        const payload = {
            user: userId,
            type: selectedType,
            cardNumber: selectedType === "Credit Card" ? cardNumber : null,
            gcashNumber: selectedType === "GCash" ? gcashNumber : null,
            isDefault: true,
        };

        console.log("Saving new method with payload:", payload);

        try {
            await axios.post(`${config.API_BASE_URL}/api/payment/add`, payload);
            Alert.alert("Success", "Payment method saved!");
        } catch (error) {
            // 💡 Recommendation: Add error logging to catch API failures
            console.log("SAVE METHOD API ERROR:", error.message);
            Alert.alert("Error", "Failed to save payment method.");
        }

        router.back();
    };

    const setAsDefault = async (id) => {
        try {
            const res = await axios.put(`${config.API_BASE_URL}/api/payment/set-default/${id}`);
            await loadMethods();
            Alert.alert("Success", "This payment method is now your default.");
        } catch (error) {
            console.log("SET DEFAULT CLIENT ERROR:", error.message);
            Alert.alert("Error", "Unable to update default. Please try again.");
        }
    };

    useEffect(() => {
        loadMethods();
    }, []);

    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../../assets/images/initialization_assets/new.png")}
                style={styles.headerBg}
                resizeMode="cover"
            >
                <View style={styles.headerOverlay} />
                <Text style={styles.pageTitle}>Checkout</Text>
            </ImageBackground>

            <ScrollView style={{ padding: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Payment Methods</Text>

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={() => setSelectedType("Credit Card")}>
                        <Text
                            style={{
                                padding: 10,
                                backgroundColor: selectedType === "Credit Card" ? "#FF6C9B" : "#eee",
                                color: selectedType === "Credit Card" ? "white" : "black",
                                borderRadius: 6,
                                marginBottom: 10,
                            }}
                        >
                            Credit / Debit Card
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedType("GCash")}>
                        <Text
                            style={{
                                padding: 10,
                                backgroundColor: selectedType === "GCash" ? "#FF6C9B" : "#eee",
                                color: selectedType === "GCash" ? "white" : "black",
                                borderRadius: 6,
                            }}
                        >
                            GCash / e-wallet
                        </Text>
                    </TouchableOpacity>
                </View>

                {selectedType === "Credit Card" && (
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ marginBottom: 6 }}>Card Number</Text>
                        <TextInput
                            placeholder="1234 5678 9101 1121"
                            style={{ borderWidth: 1, borderColor: "#aaa", padding: 10, borderRadius: 6 }}
                            value={cardNumber}
                            onChangeText={setCardNumber}
                        />
                    </View>
                )}

                {selectedType === "GCash" && (
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ marginBottom: 6 }}>GCash Number</Text>
                        <TextInput
                            placeholder="09xxxxxxxxx"
                            style={{ borderWidth: 1, borderColor: "#aaa", padding: 10, borderRadius: 6 }}
                            value={gcashNumber}
                            onChangeText={setGcashNumber}
                        />
                    </View>
                )}

                <TouchableOpacity
                    onPress={() => saveMethod()}
                    style={{
                        marginTop: 25,
                        padding: 15,
                        backgroundColor: "#FF6C9B",
                        borderRadius: 8,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Save as Default</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 18, marginTop: 35, fontWeight: "bold" }}>Saved Methods</Text>

                {paymentMethods.map((method) => (
                    <View
                        key={method._id}
                        style={{
                            marginTop: 12,
                            padding: 12,
                            borderWidth: 1,
                            borderColor: method.isDefault ? "#FF6C9B" : "#ddd",
                            borderRadius: 8,
                            backgroundColor: method.isDefault ? "#FFF4F8" : "white",
                        }}
                    >
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{method.type}</Text>

                            {method.isDefault && <Text style={{ color: "#FF6C9B", fontWeight: "bold" }}>DEFAULT</Text>}
                        </View>

                        {method.cardNumber && <Text>Card: **** {method.cardNumber.slice(-4)}</Text>}
                        {method.gcashNumber && <Text>GCash: {method.gcashNumber}</Text>}

                        {!method.isDefault && (
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("Pressed ID:", method._id);
                                    setAsDefault(method._id);
                                }}
                                style={{ marginTop: 8, position: "relative", zIndex: 10000 }}
                            >
                                <Text style={{ color: "#FF6C9B", fontWeight: "bold" }}>Set as Default</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
