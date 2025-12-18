//@ts-nocheck
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/Card_OrderHistoryItem";

const OrderHistoryItem = ({ order, onReorder }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Delivered":
                return "#4CAF50";
            case "On the way":
                return "#FF9800";
            case "Pending":
                return "#2196F3";
            default:
                return "#999";
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                    <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>
                        {order.status}
                    </Text>
                </View>
                <Text style={styles.dateText}>{formatDate(order.createdAt)}</Text>
            </View>

            <View style={styles.itemsContainer}>
                {order.items.slice(0, 3).map((item, index) => (
                    <View key={index} style={styles.itemRow}>
                        {item.product?.productImages?.[0] && (
                            <Image
                                source={{ uri: item.product.productImages[0] }}
                                style={styles.itemImage}
                            />
                        )}
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName} numberOfLines={1}>
                                {item.name || item.product?.productName}
                            </Text>
                            <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
                        </View>
                        <Text style={styles.itemPrice}>₱{(item.price * item.quantity).toFixed(2)}</Text>
                    </View>
                ))}
                {order.items.length > 3 && (
                    <Text style={styles.moreItems}>+{order.items.length - 3} more items</Text>
                )}
            </View>

            <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>₱{order.total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
                style={styles.reorderButton}
                onPress={() => onReorder(order)}
                activeOpacity={0.7}
            >
                <Ionicons name="cart-outline" size={18} color="#fff" />
                <Text style={styles.reorderText}>Add to Cart Again</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OrderHistoryItem;
