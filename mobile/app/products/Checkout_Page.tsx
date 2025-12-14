// @ts-nocheck
import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, Text, ScrollView, ImageBackground, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from "../styles/CheckoutPage";
import axios from 'axios';
import config from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';

export default function Checkout_Page() {
    const router = useRouter();

    // --- STATE MANAGEMENT ---
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [address, setAddress] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState('cod');
    const [cardDisplayNumber, setCardDisplayNumber] = useState(null);
    const [gcashDisplayNumber, setGcashDisplayNumber] = useState(null);

    // --- DATA FETCHING ---
    const fetchCheckoutData = async () => {
        setLoading(true);
        try {
            const userId = await AsyncStorage.getItem("userId");
            if (!userId) {
                setLoading(false);
                return;
            }

            const res = await axios.get(`${config.API_BASE_URL}/api/checkout/preview/${userId}`);
            const data = res.data;

            setCartItems(data.cartItems || []);
            setUserInfo(data.userInfo);
            setAddress(data.address);

            if (data.defaultPayment) {
                setSelectedPayment(data.defaultPayment);
            }
            setCardDisplayNumber(data.cardDisplayNumber);
            setGcashDisplayNumber(data.gcashDisplayNumber);

        } catch (err) {
            console.error("CHECKOUT LOAD ERROR:", err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchCheckoutData();
            return () => { };
        }, [])
    );

    useEffect(() => {
        fetchCheckoutData();
    }, []);

    // --- MEMOIZED CALCULATIONS (No changes) ---
    const subtotal = useMemo(() => {
        return cartItems.reduce((s, it) => s + (it.price * it.qty), 0);
    }, [cartItems]);

    const deliveryFee = useMemo(() => 70, [subtotal]);
    const tax = useMemo(() => 0, [subtotal]);

    const total = useMemo(() => subtotal + deliveryFee + tax, [subtotal, deliveryFee, tax]);

    const renderItem = ({ item }) => (
        <View style={styles.itemRow}>
            <Image
                source={item.imageUri ? { uri: item.imageUri } : require("../../assets/images/initialization_assets/food/placeholder.png")}
                style={styles.itemImage}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQty}>x{item.qty}</Text>
            </View>

            <Text style={styles.itemPrice}>₱{(item.price * item.qty).toLocaleString()}</Text>
        </View>
    );
    const onPlaceOrder = async () => {
        // 🐞 DEBUG: Confirm button press is registered
        console.log("--- Attempting to Place Order ---");

        // 🛑 Prevent placing order if cart is empty
        if (cartItems.length === 0) {
            alert("Your cart is empty and cannot place an order.");
            return;
        }

        try {
            setLoading(true); // Show loading indicator (This is correct)
            const userId = await AsyncStorage.getItem("userId");

            if (!userId) {
                alert("User not logged in.");
                router.push('/login');
                return;
            }
            // 🐞 DEBUG: Log the payload being sent
            const itemsForPayload = cartItems.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                qty: item.qty,
            }));

            const orderPayload = {
                userId: userId,
                subtotal: subtotal,
                deliveryFee: deliveryFee,
                tax: tax,
                total: total,
                selectedPayment: selectedPayment,
                items: itemsForPayload, // Use the mapped list
            };

            console.log("Payload:", orderPayload); // Log the payload

            // 2. Call the new Place Order API route
            const response = await axios.post(`${config.API_BASE_URL}/api/order/place`, orderPayload);

            console.log("Order successful:", response.data);

            // 3. Navigate to the success screen
            router.push("/products/OrderSuccessScreen");

        } catch (err) {
            // ✅ This console error is crucial for network/server errors
            console.error("ORDER PLACEMENT FAILED:", err.response?.data || err.message);
            // ✅ Show an alert for the user
            alert(`Failed to place order: ${err.response?.data?.error || "Server error. Check console for details."}`);
        } finally {
            setLoading(false); // Hide loading indicator
        }
    };

    // --- LOADING/EMPTY STATES (No changes) ---
    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FF6C9B" />
                <Text style={{ marginTop: 10 }}>Loading Checkout...</Text>
            </SafeAreaView>
        );
    }

    if (cartItems.length === 0) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Cart is Empty!</Text>
                <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 15, padding: 10, backgroundColor: '#FF6C9B', borderRadius: 5 }}>
                    <Text style={{ color: 'white' }}>Go Back</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }


    // --- MAIN RENDER (Payment Card Changes) ---
    return (
        <SafeAreaView style={styles.safe}>
            <ImageBackground
                source={require("../../assets/images/initialization_assets/new.png")}
                style={styles.headerBg}
                resizeMode="cover"
            >
                <View style={styles.headerOverlay} />
                <Text style={styles.pageTitle}>Checkout</Text>
            </ImageBackground>

            <ScrollView contentContainerStyle={styles.scroll}>

                {/* DELIVERY ADDRESS CARD (No changes) */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Delivery Address</Text>
                        <TouchableOpacity onPress={() => router.push("/products/DeliveryAddress")}>
                            <Text style={styles.linkText}>Change</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={styles.addressRow}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.addressLabel}>{address?.label || 'Primary Delivery'}</Text>
                                <Text style={styles.addressLine}>{address?.line1 || 'Error: Address Not Found'}</Text>
                                <Text style={styles.addressMeta}>
                                    {userInfo?.recipient || 'N/A'} • {userInfo?.phone || 'N/A'}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => router.push("/products/DeliveryAddress")}
                            activeOpacity={0.8}
                        >
                            <Image
                                source={require('../../assets/images/initialization_assets/map.png')}
                                style={styles.mapImage}
                            />
                            <View style={styles.mapOverlay}>
                                <Ionicons name="location" size={24} color="#FF6C9B" />
                                <Text style={styles.mapOverlayText}>Tap to view on map</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 💳 PAYMENT CARD */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Payment</Text>
                        <TouchableOpacity onPress={() => router.push("/products/PaymentMethod")}>
                            <Text style={styles.linkText}>Manage</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.paymentRow}>
                        {/* Card */}
                        <TouchableOpacity
                            style={styles.paymentOption}
                            onPress={() => setSelectedPayment('card')}
                        >
                            <View style={styles.paymentLeft}>
                                <Ionicons
                                    name="card-outline"
                                    size={20}
                                    color={selectedPayment === 'card' ? '#FF6C9B' : '#999'}
                                />
                                {/* 🎯 Styling Adjustment: Align text content to the left */}
                                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                    <Text
                                        style={[
                                            styles.paymentLabel,
                                            selectedPayment === 'card' && styles.paymentLabelActive,
                                        ]}
                                    >
                                        Debit / Credit Card
                                    </Text>
                                    {selectedPayment === 'card' && cardDisplayNumber && (
                                        // 🎯 Removed leading space/char if needed, kept vertical spacing
                                        <Text style={{ fontSize: 13, color: '#555', fontFamily: 'DMSans-Regular', marginTop: 2 }}>
                                            {cardDisplayNumber}
                                        </Text>
                                    )}
                                </View>
                            </View>

                            {selectedPayment === 'card' && (
                                <Ionicons name="checkmark-circle" size={18} color="#FF6C9B" />
                            )}
                        </TouchableOpacity>

                        {/* GCash */}
                        <TouchableOpacity
                            style={styles.paymentOption}
                            onPress={() => setSelectedPayment('gcash')}
                        >
                            <View style={styles.paymentLeft}>
                                <Ionicons
                                    name="logo-bitcoin"
                                    size={20}
                                    color={selectedPayment === 'gcash' ? '#FF6C9B' : '#999'}
                                />
                                {/* 🎯 Styling Adjustment: Align text content to the left */}
                                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                    <Text
                                        style={[
                                            styles.paymentLabel,
                                            selectedPayment === 'gcash' && styles.paymentLabelActive,
                                        ]}
                                    >
                                        GCash / e-wallet
                                    </Text>
                                    {selectedPayment === 'gcash' && gcashDisplayNumber && (
                                        // 🎯 Removed leading space/char if needed, kept vertical spacing
                                        <Text style={{ fontSize: 13, color: '#555', fontFamily: 'DMSans-Regular', marginTop: 2 }}>
                                            {gcashDisplayNumber}
                                        </Text>
                                    )}
                                </View>
                            </View>

                            {selectedPayment === 'gcash' && (
                                <Ionicons name="checkmark-circle" size={18} color="#FF6C9B" />
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.paymentOption}
                            onPress={() => setSelectedPayment('cod')}
                        >
                            <View style={styles.paymentLeft}>
                                <Ionicons
                                    name="cash-outline"
                                    size={20}
                                    color={selectedPayment === 'cod' ? '#FF6C9B' : '#999'}
                                />
                                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                    <Text
                                        style={[
                                            styles.paymentLabel,
                                            selectedPayment === 'cod' && styles.paymentLabelActive,
                                        ]}
                                    >
                                        Cash on Delivery
                                    </Text>
                                </View>
                            </View>

                            {selectedPayment === 'cod' && (
                                <Ionicons name="checkmark-circle" size={18} color="#FF6C9B" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ORDER SUMMARY (No changes) */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Order Summary</Text>

                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={(i) => i.id}
                        style={{ marginTop: 8 }}
                        scrollEnabled={false}
                    />

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Subtotal</Text>
                        <Text style={styles.summaryValue}>₱{subtotal.toLocaleString()}</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Delivery Fee</Text>
                        <Text style={styles.summaryValue}>₱{deliveryFee.toLocaleString()}</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Tax</Text>
                        <Text style={styles.summaryValue}>₱{tax.toLocaleString()}</Text>
                    </View>

                    <View style={[styles.summaryRow, { marginTop: 6 }]}>
                        <Text style={[styles.summaryLabel, { fontFamily: 'DMSans-Bold' }]}>Total</Text>
                        <Text style={[styles.summaryValue, { color: '#FF6C9B', fontFamily: 'DMSans-Bold' }]}>
                            ₱{total.toLocaleString()}
                        </Text>
                    </View>
                </View>

                {/* NOTES (No changes) */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Notes & Promo</Text>
                    <Text style={{ color: '#777', marginTop: 8, fontFamily: "DMSans-Medium" }}>
                        Apply promo codes or leave delivery notes at checkout.
                    </Text>
                </View>

                <View style={{ height: 90 }} />
            </ScrollView>

            {/* STICKY BOTTOM BAR (No changes) */}
            <View style={styles.stickyBar}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#777', fontSize: 12, fontFamily: 'DMSans-Medium', }}>Total</Text>
                    <Text style={{ color: '#111', fontSize: 18, fontFamily: 'DMSans-Bold' }}>
                        ₱{total.toLocaleString()}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.placeButton}
                    onPress={onPlaceOrder} // 👈 This is the important call!
                    activeOpacity={0.85}
                >
                    <Text style={styles.placeBtnText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// onPress={() => router.push("/products/OrderSuccessScreen")}