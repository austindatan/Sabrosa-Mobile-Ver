// @ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView } from "moti";
import styles from "../styles/Card_OrderHistory";

const SkeletonLoader = ({
  width = "100%",
  height = 20,
  borderRadius = 8,
  style,
}) => {
  return (
    <MotiView
      from={{ backgroundColor: "#ddddddff" }}
      animate={{ backgroundColor: "#e7edf1ff" }}
      transition={{
        type: "timing",
        duration: 1800,
        loop: true,
        repeatReverse: true,
      }}
      style={[{ width, height, borderRadius }, style]}
    />
  );
};

const OrderHistoryCard = ({ item, onPress }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <SkeletonLoader width={70} height={70} borderRadius={10} />

        <View style={styles.detailsContainer}>
          <SkeletonLoader width="60%" height={18} style={{ marginBottom: 8 }} />
          <SkeletonLoader width="40%" height={15} style={{ marginBottom: 8 }} />
          <SkeletonLoader width="30%" height={14} />
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Image source={item.image} style={styles.image} />

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <View>
            {item.brandImage && (
              <Image
                source={item.brandImage}
                style={styles.brandImage}
                resizeMode="contain"
              />
            )}

            <Text style={styles.name}>{item.name}</Text>

            {/* Date */}
            {item.date && <Text style={styles.date}>{item.date}</Text>}
          </View>
          
          <View>
            <View style={[styles.statusBadge, getStatusColor(item.status)]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>

            {/* Price */}
            <Text style={styles.price}>₱{item.price}</Text>
          </View>
        </View>
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
