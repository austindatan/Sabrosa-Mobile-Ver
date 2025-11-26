//@ts-nocheck
import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, ImageBackground, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from "../styles/CheckoutPage"

export default function Checkout_Page({ route }) {
    const router = useRouter();

    const initialItems = (route && route.params && route.params.cartItems) || [
        { 
            id: '1', 
            name: 'Tropical Mango & Passionfruit', 
            price: 195, 
            qty: 1,
            image: require("../../assets/images/initialization_assets/food/product1.png"),
        },
        { 
            id: '2', 
            name: 'Peaches & Cream Soda', 
            price: 500, 
            qty: 1,
            image: require('../../assets/images/initialization_assets/food/barbie.png')
        },
        { 
            id: '3', 
            name: 'Special Mixed Yakisoba', 
            price: 250, 
            qty: 1,
            image: require('../../assets/images/initialization_assets/food/bun.png')
        },
    ];

    const [cartItems, setCartItems] = useState(initialItems);
    const [selectedPayment, setSelectedPayment] = useState('card');
    const [useSavedAddress, setUseSavedAddress] = useState(true);
    const [address, setAddress] = useState({
        label: 'Home',
        line1: 'Carmen, Cagayan de Oro',
        recipient: 'Austin Datan',
        phone: '0992 828 1609',
    });

    const subtotal = useMemo(() => {
        return cartItems.reduce((s, it) => s + it.price * it.qty, 0);
    }, [cartItems]);

    const deliveryFee = useMemo(() => (subtotal > 1000 ? 0 : 45), [subtotal]);
    const tax = useMemo(() => Math.round(subtotal * 0.12), [subtotal]);
    const total = useMemo(() => subtotal + deliveryFee + tax, [subtotal, deliveryFee, tax]);

    /** UPDATED renderItem with IMAGE */
    const renderItem = ({ item }) => (
        <View style={styles.itemRow}>

            <Image source={item.image} style={styles.itemImage} />

            <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQty}>x{item.qty}</Text>
            </View>

            <Text style={styles.itemPrice}>₱{(item.price * item.qty).toLocaleString()}</Text>
        </View>
    );

    const onPlaceOrder = () => {};

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

                {/* DELIVERY ADDRESS CARD */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Delivery Address</Text>
                        <TouchableOpacity>
                            <Text style={styles.linkText}>Change</Text>
                        </TouchableOpacity>
                    </View>

                    {useSavedAddress ? (
                        <View>
                            <View style={styles.addressRow}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.addressLabel}>{address.label}</Text>
                                    <Text style={styles.addressLine}>{address.line1}</Text>
                                    <Text style={styles.addressMeta}>
                                        {address.recipient} • {address.phone}
                                    </Text>
                                </View>
                            </View>
                            
                            <Image
                                source={require('../../assets/images/initialization_assets/map.png')}
                                style={styles.mapImage}
                            />
                        </View>
                    ) : (
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={{ color: '#777' }}>Add or choose a delivery address</Text>
                            <TouchableOpacity
                                style={[styles.smallButton, { marginTop: 12 }]}
                                onPress={() => setUseSavedAddress(true)}
                            >
                                <Text style={styles.smallButtonText}>Use saved address</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                {/* PAYMENT */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Payment</Text>
                        <TouchableOpacity>
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
                                <Text
                                    style={[
                                        styles.paymentLabel,
                                        selectedPayment === 'card' && styles.paymentLabelActive,
                                    ]}
                                >
                                    Debit / Credit Card
                                </Text>
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
                                <Text
                                    style={[
                                        styles.paymentLabel,
                                        selectedPayment === 'gcash' && styles.paymentLabelActive, 
                                    ]}
                                >
                                    GCash / e-wallet
                                </Text>
                            </View>

                            {selectedPayment === 'gcash' && (
                                <Ionicons name="checkmark-circle" size={18} color="#FF6C9B" />
                            )}
                        </TouchableOpacity>

                        {/* COD */}
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
                                <Text
                                    style={[
                                        styles.paymentLabel,
                                        selectedPayment === 'cod' && styles.paymentLabelActive,
                                    ]}
                                >
                                    Cash on Delivery
                                </Text>
                            </View>

                            {selectedPayment === 'cod' && (
                                <Ionicons name="checkmark-circle" size={18} color="#FF6C9B" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ORDER SUMMARY */}
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

                {/* NOTES */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Notes & Promo</Text>
                    <Text style={{ color: '#777', marginTop: 8, fontFamily: "DMSans-Medium" }}>
                        Apply promo codes or leave delivery notes at checkout.
                    </Text>
                </View>

                <View style={{ height: 90 }} />
            </ScrollView>

            {/* STICKY BOTTOM BAR */}
            <View style={styles.stickyBar}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#777', fontSize: 12, fontFamily: 'DMSans-Medium', }}>Total</Text>
                    <Text style={{ color: '#111', fontSize: 18, fontFamily: 'DMSans-Bold' }}>
                        ₱{total.toLocaleString()}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.placeButton}
                    onPress={onPlaceOrder}
                    activeOpacity={0.85}
                >
                    <Text style={styles.placeBtnText} onPress={() => router.push("/products/OrderSuccessScreen")}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}