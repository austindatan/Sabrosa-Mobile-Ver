// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../../config';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const localStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f8f8' },
    map: { width: '100%', height: height }, 
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingBottom: Platform.OS === 'ios' ? 30 : 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    label: { fontSize: 14, color: '#333', marginBottom: 5, fontFamily: 'DMSans-Medium' },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
        fontFamily: 'DMSans-Regular'
    },
    saveButton: {
        backgroundColor: '#FF6C9B',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'DMSans-Bold'
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'DMSans-Bold',
        color: '#333'
    }
});


export default function AddAddressScreen() {
    const router = useRouter();
    const [addressLine, setAddressLine] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const [initialRegion] = useState({ 
        latitude: 8.4556, 
        longitude: 124.6465,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    
    const [currentRegion, setCurrentRegion] = useState(initialRegion);

    const [markerCoord, setMarkerCoord] = useState({
        latitude: 8.4556,
        longitude: 124.6465,
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Permission to access location was denied. Using default location.');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const newCoords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setCurrentRegion({ ...newCoords, latitudeDelta: 0.01, longitudeDelta: 0.01 }); 
            setMarkerCoord(newCoords);
            reverseGeocode(newCoords); 
        })();
    }, []);

    const reverseGeocode = async (coords) => {
        try {
            let geocode = await Location.reverseGeocodeAsync(coords);
            if (geocode.length > 0) {
                const { name, street, city, region: addressRegion } = geocode[0];
                const fullAddress = `${name || street || ''}, ${city || addressRegion || ''}`.trim().replace(/,(\s*),/g, ',');
                setAddressLine(fullAddress);
            }
        } catch (error) {
            console.error("Reverse geocoding failed", error);
            setAddressLine(prev => prev || "Custom Location (Please edit manually)"); 
        }
    };

    const onMapPress = (e) => {
        const newCoords = e.nativeEvent.coordinate;
        setMarkerCoord(newCoords);
        setCurrentRegion({ 
            ...newCoords, 
            latitudeDelta: currentRegion.latitudeDelta, 
            longitudeDelta: currentRegion.longitudeDelta 
        });
        reverseGeocode(newCoords);
    };

    const handleSaveAddress = async () => {
        if (!addressLine || addressLine.length < 5) {
            Alert.alert('Missing Address', 'Please provide a detailed address line or select a location on the map.');
            return;
        }

        setIsSaving(true);
        try {
            const userId = await AsyncStorage.getItem("userId");
            if (!userId) {
                Alert.alert("Error", "User not logged in.");
                setIsSaving(false);
                return;
            }
            
            const response = await axios.post(`${config.API_BASE_URL}/api/address/add`, {
                user: userId,
                address: addressLine,
                latitude: markerCoord.latitude,
                longitude: markerCoord.longitude,
            });

            Alert.alert('Success', 'Delivery address saved and set as default!');
            router.back(); 

        } catch (error) {
            console.error("Failed to save address:", error.response?.data || error.message);
            Alert.alert('Error', 'Failed to save address. Please try again. (Check backend registration)');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <View style={localStyles.container}>
            <Stack.Screen 
                options={{ 
                    headerTitle: () => <Text style={localStyles.headerText}>Select Delivery Location</Text>,
                    headerBackTitle: "Back",
                }} 
            />
            
            <MapView
                style={localStyles.map}
                region={currentRegion} 
                initialRegion={initialRegion}
                onPress={onMapPress}
                showsUserLocation={true}
            >
                {markerCoord.latitude && (
                    <Marker
                        coordinate={markerCoord}
                        title={"Delivery Location"}
                        draggable={true}
                        onDragEnd={onMapPress} 
                    />
                )}
            </MapView>

            <View style={localStyles.bottomSheet}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={localStyles.label}>
                    Delivery Address Details 
                    <Text style={{fontSize: 12, color: '#FF6C9B'}}> (Tap map or drag marker to select)</Text>
                </Text>
                <TextInput
                    style={localStyles.input}
                    value={addressLine}
                    onChangeText={setAddressLine}
                    placeholder="Auto-filled, or enter building/floor/unit details"
                    multiline
                />
                
                <TouchableOpacity 
                    style={localStyles.saveButton} 
                    onPress={handleSaveAddress}
                    disabled={isSaving}
                >
                    <Text style={localStyles.saveButtonText}>
                        {isSaving ? 'Saving...' : 'Confirm Location & Save'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}