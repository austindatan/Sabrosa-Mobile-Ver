// @ts-nocheck
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MotiView } from "moti";

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

const CartItem = ({ item, onAdd, onRemove }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        {/* Product Image Skeleton */}
        <SkeletonLoader width={70} height={70} borderRadius={10} />

        <View style={styles.detailsContainer}>
          <SkeletonLoader width={40} height={20} borderRadius={4} style={{ marginBottom: 8 }} />
          <SkeletonLoader width="80%" height={14} borderRadius={4} style={{ marginBottom: 6 }} />
          <SkeletonLoader width="30%" height={15} borderRadius={4} />
        </View>

        <View style={styles.counterContainer}>
          <SkeletonLoader width={26} height={26} borderRadius={6} style={{ marginHorizontal: 3 }} />
          <SkeletonLoader width={20} height={14} borderRadius={4} style={{ marginHorizontal: 3 }} />
          <SkeletonLoader width={26} height={26} borderRadius={6} style={{ marginHorizontal: 3 }} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.detailsContainer}>
        {item.brandImage && (
          <Image source={item.brandImage} style={styles.brandImage} resizeMode="contain" />
        )}
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₱{item.price}</Text>
      </View>

      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => onRemove(item)} style={styles.minusButton}>
          <Text style={styles.minusText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{item.quantity || 1}</Text>

        <TouchableOpacity onPress={() => onAdd(item)} style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    padding: 10,
    elevation: 1,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  detailsContainer: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    fontFamily: "Barlow",
    marginBottom: 1,
  },

  brandImage: {
    width: 40,
    height: 20,
  },

  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FF6C9B",
    fontFamily: "DIN-Next",
  },

  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  minusButton: {
    backgroundColor: "#ffc8d9ff",
    borderRadius: 6,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  minusText: {
    color: "#FF6C9B",
    fontWeight: "bold",
  },

  quantityText: {
    marginHorizontal: 10,
    fontWeight: "600",
    fontFamily: "DIN-Next",
  },

  plusButton: {
    backgroundColor: "#FF6C9B",
    borderRadius: 6,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  plusText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
