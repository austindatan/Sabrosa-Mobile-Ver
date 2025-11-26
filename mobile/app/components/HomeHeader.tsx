// @ts-nocheck
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, Text, Animated, ImageBackground } from "react-native"; 
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/HeaderHOME";

const HomeHeader = ({ scrollY = new Animated.Value(0) }) => {
    const searchOpacity = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const searchTranslateY = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [0, -30],
        extrapolate: "clamp",
    });

    const toggleTranslateY = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [0, -40],
        extrapolate: "clamp",
    });

    return (
        <ImageBackground 
            source={require("../../assets/images/initialization_assets/new.png")}
            style={styles.backgroundImageContainer} 
        >
            <View style={[styles.headerfirst, { paddingBottom: 0 }]}>
                <View style={styles.topRow}>
                    <Image
                        source={require("../../assets/images/initialization_assets/SABROSA.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <TouchableOpacity>
                        <View style={styles.notif}>
                            <Ionicons name="notifications-outline" size={24} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Animated.View
                style={[
                    styles.header,
                    {
                        paddingTop: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 80],
                                    outputRange: [0, -40],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Animated.View
                    style={[
                        styles.searchRow,
                        {
                            opacity: searchOpacity,
                            transform: [{ translateY: searchTranslateY }],
                        },
                    ]}
                >
                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={24} color="#fff" style={{ marginRight: 8 }} />
                        <TextInput
                            placeholder="Search..."
                            placeholderTextColor="#ffffff94"
                            style={styles.searchInput}
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <View style={styles.filterB}>
                            <Ionicons name="filter" size={14} color="#222762" />
                        </View>
                        <Text style={styles.filterText}>Filters</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </ImageBackground>
    );
};

export default HomeHeader;
