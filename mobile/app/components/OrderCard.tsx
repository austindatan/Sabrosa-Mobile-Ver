// @ts-nocheck
import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { MotiView } from "moti";
import styles from "../styles/Card_OrderHistory";

const OrderItemRow = ({ item }) => (
  <View style={styles.itemRow}>
    <Image
      source={{ uri: item.product?.productImages?.[0] }}
      style={styles.itemImage}
    />
    <View style={styles.itemDetails}>
      <Text style={styles.itemName} numberOfLines={1} ellipsisMode="tail">
        {item.name}
      </Text>
      <Text style={styles.itemQuantity}>
        Qty: {item.quantity} x ₱{item.price?.toFixed(2) || '0.00'}
      </Text>
    </View>
    <Text style={styles.itemTotal}>
      ₱{((item.price || 0) * (item.quantity || 0)).toFixed(2)}
    </Text>
  </View>
);

const OrderHistoryCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.headerRow}>
        <View style={[styles.statusBadge, getStatusColor(item.status)]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Text style={styles.dateText}>
          Ordered on: {item.date}
        </Text>
      </View>

      <View style={styles.itemsListContainer}>
        {item.items.map((orderItem, index) => (
          orderItem.product ? (
            <OrderItemRow key={orderItem.product._id || index} item={orderItem} />
          ) : null
        ))}
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryText}>Items ({item.totalQuantity}) Subtotal:</Text>
        <Text style={styles.summaryValue}>₱{item.subtotal.toFixed(2)}</Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryText}>Delivery Fee:</Text>
        <Text style={styles.summaryValue}>₱{item.deliveryFee.toFixed(2)}</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Order Total:</Text>
        <Text style={styles.totalValue}>₱{item.total.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return { backgroundColor: "#d7ffe2" };
    case "On the way":
      return { backgroundColor: "#ffefd1" };
    default:
      return { backgroundColor: "#e5e5e5" };
  }
};

export default OrderHistoryCard;
