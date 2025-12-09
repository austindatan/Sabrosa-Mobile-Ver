// @ts-nocheck
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, Text, Animated, ImageBackground } from "react-native"; 
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/HeaderHOME";
import { useRouter } from "expo-router";

const HomeHeader = ({ scrollY = new Animated.Value(0) }) => {
    const router = useRouter();
    // Keep searchQuery state if you want to pre-populate the search page input
    const [searchQuery, setSearchQuery] = useState(""); 
    
    // We only need the Animated calculations here, the functions below are now obsolete

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

    // 🚨 MODIFICATION 1: New function to always navigate to the search page
    const handleSearchPress = () => {
        // Navigate to the Search page. We pass the current text in the input 
        // (if any) so the user can see it pre-filled on the search screen.
        router.push(`/products/Search?query=${searchQuery}`);
    };

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
                    {/* 🚨 MODIFICATION 2: Wrap the search input area in TouchableOpacity */}
                    <TouchableOpacity 
                        style={styles.searchContainer}
                        onPress={handleSearchPress} // Calls the navigation function
                        activeOpacity={0.8}
                    >
                        <Ionicons name="search" size={24} color="#fff" style={{ marginRight: 8 }} />
                        <TextInput
                            placeholder="Search..."
                            placeholderTextColor="#ffffff94"
                            style={styles.searchInput}
                            
                            // 🚨 MODIFICATION 3: Disable editing in this component
                            value={searchQuery} // Keep value if you want to display previous input
                            onChangeText={setSearchQuery} // Keep if you want text to remain while user scrolls/returns
                            editable={false} // Prevents soft keyboard from opening
                            // onSubmitEditing={handleSearchSubmit} <-- REMOVED
                        />
                    </TouchableOpacity>
                    {/* 🚨 MODIFICATION 4: Make sure the filter button doesn't trigger navigation */}
                    <TouchableOpacity style={styles.filterButton} onPress={() => { /* Add filter action here */ }}>
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