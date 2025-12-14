//@ts-nocheck
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/Card_Favorite";

const FavoriteCard = ({ item, onPress, onRemove }) => {
    const product = item.product;

    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
            <Image
                source={{ uri: product.productImages?.[0] || product.brand?.image }}
                style={styles.image}
            />

            <View style={styles.info}>
                <Image
                    source={{ uri: product.brand?.image }}
                    style={styles.brandLogo}
                    resizeMode="contain"
                />
                <Text style={[styles.productName, { paddingRight: 10 }]} numberOfLines={2}>
                    {product.productName}
                </Text>
                <Text style={styles.price}>₱{product.price}</Text>
            </View>

            <TouchableOpacity
                style={styles.removeButton}
                onPress={(e) => {
                    e.stopPropagation();
                    onRemove();
                }}
            >
                <Ionicons name="heart" size={20} color="#FF6C9B" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default FavoriteCard;
