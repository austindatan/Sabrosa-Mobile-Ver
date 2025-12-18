//@ts-nocheck
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
    ScrollView,
    Alert,
    ActivityIndicator,
    ImageBackground,
    Platform,
    StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import config from "../../config";
import styles from "../styles/AdminDashboard";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dldwg8flq/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "unsigned_preset"; // Change this if you have a different unsigned preset

const AdminDashboard = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState("All Brands");

    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        brand: "",
        productImages: ["", "", ""],
        localImageUris: ["", "", ""],
        description: [""],
    });

    useEffect(() => {
        checkAdminAccess();
        fetchProducts();
        fetchBrands();
    }, []);

    const checkAdminAccess = async () => {
        const userEmail = await AsyncStorage.getItem("userEmail");
        if (userEmail !== "admin@sabrosa.com") {
            Alert.alert("Access Denied", "You don't have admin privileges");
            router.replace("/Home");
        }
    };

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${config.API_BASE_URL}/api/admin/products`);
            const sortedProducts = (res.data.products || []).sort((a, b) =>
                a.productName.localeCompare(b.productName)
            );
            setProducts(sortedProducts);
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchBrands = async () => {
        try {
            const res = await axios.get(`${config.API_BASE_URL}/api/admin/brands`);
            setBrands(res.data || []);
        } catch (err) {
            console.error("Error fetching brands:", err);
        }
    };

    const uploadToCloudinary = async (uri, folder) => {
        const formData = new FormData();
        formData.append("file", {
            uri,
            type: "image/jpeg",
            name: "upload.jpg",
        });
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", folder);

        console.log("Uploading to Cloudinary:", { uri, folder });

        try {
            const response = await fetch(CLOUDINARY_URL, {
                method: "POST",
                body: formData,
            });

            console.log("Cloudinary response status:", response.status);
            const data = await response.json();
            console.log("Cloudinary response data:", data);

            if (!response.ok) {
                console.error("Cloudinary error response:", data);
                throw new Error(data.error?.message || "Upload failed");
            }

            if (!data.secure_url) {
                console.error("No secure_url in response:", data);
                throw new Error("No URL returned from Cloudinary");
            }

            return data.secure_url;
        } catch (error) {
            console.error("Cloudinary upload error:", error);
            throw error;
        }
    };

    const pickImage = async (index) => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permission needed", "Please grant camera roll permissions");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false, // No crop
            quality: 1,
        });

        if (!result.canceled) {
            const newLocalUris = [...formData.localImageUris];
            newLocalUris[index] = result.assets[0].uri;
            setFormData({ ...formData, localImageUris: newLocalUris });
        }
    };

    const openAddModal = () => {
        setEditMode(false);
        setCurrentProduct(null);
        setFormData({
            productName: "",
            price: "",
            brand: "",
            productImages: ["", "", ""],
            localImageUris: ["", "", ""],
            description: [""],
        });
        setModalVisible(true);
    };

    const openEditModal = (product) => {
        setEditMode(true);
        setCurrentProduct(product);

        const cleanedDesc = Array.isArray(product.description)
            ? product.description.map(d => d.replace(/ \/$/, '').trim())
            : [product.description?.replace(/ \/$/, '').trim() || ""];

        setFormData({
            productName: product.productName,
            price: product.price.toString(),
            brand: product.brand?._id || "",
            productImages: product.productImages || ["", "", ""],
            localImageUris: ["", "", ""], // Empty for edit mode
            description: cleanedDesc,
        });
        setModalVisible(true);
    };

    const addDescriptionField = () => {
        setFormData({
            ...formData,
            description: [...formData.description, ""],
        });
    };

    const removeDescriptionField = (index) => {
        if (formData.description.length > 1) {
            const newDesc = formData.description.filter((_, i) => i !== index);
            setFormData({ ...formData, description: newDesc });
        }
    };

    const updateDescription = (index, text) => {
        const newDesc = [...formData.description];
        newDesc[index] = text;
        setFormData({ ...formData, description: newDesc });
    };

    const handleSave = async () => {
        if (!formData.productName.trim()) {
            Alert.alert("Error", "Product name is required");
            return;
        }
        if (!formData.price || parseFloat(formData.price) <= 0) {
            Alert.alert("Error", "Valid price is required");
            return;
        }
        if (!formData.brand) {
            Alert.alert("Error", "Please select a brand");
            return;
        }

        console.log("Local URIs:", formData.localImageUris);
        console.log("Product Images:", formData.productImages);

        const hasLocalImages = formData.localImageUris.some(uri => uri && typeof uri === 'string' && uri.trim() !== "");
        const hasExistingImages = formData.productImages.some(uri => uri && typeof uri === 'string' && uri.trim() !== "");

        if (!editMode && !hasLocalImages) {
            Alert.alert("Error", "All 3 product images are required");
            return;
        }

        if (!editMode) {
            const localCount = formData.localImageUris.filter(uri => uri && typeof uri === 'string' && uri.trim() !== "").length;
            if (localCount < 3) {
                Alert.alert("Error", "All 3 product images are required");
                return;
            }
        }

        try {
            setUploading(true);

            let finalImages = [...formData.productImages];

            console.log("Starting upload. Initial finalImages:", finalImages);
            console.log("Local URIs to upload:", formData.localImageUris);

            for (let i = 0; i < formData.localImageUris.length; i++) {
                if (formData.localImageUris[i] && typeof formData.localImageUris[i] === 'string') {
                    console.log(`Uploading image ${i + 1}...`);
                    const folder = i === 0 ? "Sabrosa/Sprites" : "Sabrosa/Display";
                    try {
                        const uploadedUrl = await uploadToCloudinary(formData.localImageUris[i], folder);
                        console.log(`Image ${i + 1} uploaded to ${folder}:`, uploadedUrl);
                        finalImages[i] = uploadedUrl;
                    } catch (uploadError) {
                        console.error(`Failed to upload image ${i + 1}:`, uploadError);
                        Alert.alert("Upload Error", `Failed to upload image ${i + 1}`);
                        setUploading(false);
                        return;
                    }
                }
            }

            console.log("Description array:", formData.description);

            const formattedDesc = formData.description
                .filter(desc => desc !== null && desc !== undefined && typeof desc === 'string' && desc.trim() !== "")
                .map(desc => desc.trim() + " /");

            console.log("Formatted descriptions:", formattedDesc);
            console.log("Final images before filter:", finalImages);

            const payload = {
                productName: formData.productName,
                price: parseFloat(formData.price),
                brand: formData.brand,
                productImages: finalImages.filter(img => img && typeof img === 'string' && img.trim() !== ""),
                description: formattedDesc,
            };

            console.log("Payload:", payload);

            if (editMode && currentProduct) {
                await axios.put(`${config.API_BASE_URL}/api/admin/products/${currentProduct._id}`, payload);
                Alert.alert("Success", "Product updated successfully");
            } else {
                await axios.post(`${config.API_BASE_URL}/api/admin/products`, payload);
                Alert.alert("Success", "Product added successfully");
            }

            setModalVisible(false);
            setUploading(false);
            fetchProducts();
        } catch (err) {
            console.error("Error saving product:", err);
            console.error("Error stack:", err.stack);
            Alert.alert("Error", "Failed to save product");
            setUploading(false);
        }
    };

    const handleDelete = (product) => {
        Alert.alert(
            "Delete Product",
            `Are you sure you want to delete "${product.productName}"?`,
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await axios.delete(`${config.API_BASE_URL}/api/admin/products/${product._id}`);
                            Alert.alert("Success", "Product deleted successfully");
                            fetchProducts();
                        } catch (err) {
                            console.error("Error deleting product:", err);
                            Alert.alert("Error", "Failed to delete product");
                        }
                    },
                },
            ]
        );
    };

    const renderProduct = ({ item }) => (
        <View style={styles.productCard}>
            <Image
                source={{ uri: item.productImages?.[0] }}
                style={styles.productImage}
            />
            <View style={styles.productInfo}>
                <View style={styles.brandRow}>
                    <Image
                        source={{ uri: item.brand?.image }}
                        style={styles.brandLogo}
                    />
                </View>
                <Text style={[styles.productName, { paddingRight: 10 }]} numberOfLines={2}>
                    {item.productName}
                </Text>
                <Text style={styles.price}>₱{item.price}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => openEditModal(item)}
                >
                    <Ionicons name="create-outline" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDelete(item)}
                >
                    <Ionicons name="trash-outline" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    const getImageSource = (index) => {
        if (formData.localImageUris[index]) {
            return { uri: formData.localImageUris[index] };
        } else if (formData.productImages[index]) {
            return { uri: formData.productImages[index] };
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.curvedContainer}>
                <ImageBackground
                    source={require("../../assets/images/initialization_assets/new.png")}
                    style={styles.headerBackground}
                    resizeMode="cover"
                >
                    <View style={styles.headerContent}>
                        <TouchableOpacity onPress={() => router.push("/login")} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="#fff" />
                        </TouchableOpacity>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerTitle}>Admin Dashboard</Text>
                            <Text style={styles.headerSubtitle}>Manage products</Text>
                        </View>
                        <TouchableOpacity onPress={openAddModal} style={styles.addButton}>
                            <Ionicons name="add-circle" size={28} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.filterContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
                    <TouchableOpacity
                        style={[
                            styles.filterChip,
                            selectedBrand === "All Brands" && styles.filterChipActive
                        ]}
                        onPress={() => setSelectedBrand("All Brands")}
                    >
                        <Text style={[
                            styles.filterChipText,
                            selectedBrand === "All Brands" && styles.filterChipTextActive
                        ]}>
                            All
                        </Text>
                    </TouchableOpacity>
                    {brands.map((brand) => (
                        <TouchableOpacity
                            key={brand._id}
                            style={[
                                styles.filterChipLogo,
                                selectedBrand === brand.name && styles.filterChipActive
                            ]}
                            onPress={() => setSelectedBrand(brand.name)}
                        >
                            <Image
                                source={{ uri: brand.image }}
                                style={styles.filterBrandLogo}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#FF6C9B" />
                </View>
            ) : (
                <FlatList
                    data={products.filter(product =>
                        selectedBrand === "All Brands" || product.brand?.name === selectedBrand
                    )}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={styles.listContainer}
                />
            )}

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={false}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Hero Image Preview */}
                        {(formData.localImageUris[0] || formData.productImages[0]) && (
                            <Image
                                source={getImageSource(0)}
                                style={styles.heroImage}
                            />
                        )}

                        <View style={styles.modalHeader}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Ionicons name="close" size={28} color="#333" />
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>
                                {editMode ? "Edit Product" : "Add New Product"}
                            </Text>
                            <View style={{ width: 28 }} />
                        </View>

                        <View style={styles.formContainer}>
                            <Text style={styles.label}>Product Name *</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.productName}
                                onChangeText={(text) =>
                                    setFormData({ ...formData, productName: text })
                                }
                                placeholder="Enter product name"
                            />

                            <Text style={styles.label}>Price *</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.price}
                                onChangeText={(text) =>
                                    setFormData({ ...formData, price: text })
                                }
                                placeholder="Enter price"
                                keyboardType="numeric"
                            />

                            <Text style={styles.label}>Brand * (Select one)</Text>
                            <ScrollView style={styles.brandPickerVertical} nestedScrollEnabled>
                                {brands.map((brand) => (
                                    <TouchableOpacity
                                        key={brand._id}
                                        style={[
                                            styles.brandOptionVertical,
                                            formData.brand === brand._id && styles.brandOptionSelected,
                                        ]}
                                        onPress={() => setFormData({ ...formData, brand: brand._id })}
                                    >
                                        <Image
                                            source={{ uri: brand.image }}
                                            style={styles.brandLogoOption}
                                        />
                                        <Text style={styles.brandOptionText}>{brand.name}</Text>
                                        {formData.brand === brand._id && (
                                            <Ionicons name="checkmark-circle" size={24} color="#FF6C9B" />
                                        )}
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                            <Text style={styles.label}>Product Images * (3 required)</Text>
                            <Text style={styles.helperText}>
                                Image 1: Display | Images 2-3: Gallery
                            </Text>

                            <View style={styles.imageGallery}>
                                {[0, 1, 2].map((index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.imagePickerBox}
                                        onPress={() => pickImage(index)}
                                    >
                                        {getImageSource(index) ? (
                                            <Image
                                                source={getImageSource(index)}
                                                style={styles.previewImage}
                                            />
                                        ) : (
                                            <View style={styles.placeholderBox}>
                                                <Ionicons name="camera" size={32} color="#ccc" />
                                                <Text style={styles.placeholderText}>
                                                    Image {index + 1}
                                                </Text>
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text style={styles.label}>Description</Text>
                            {formData.description.map((desc, index) => (
                                <View key={index} style={styles.descriptionRow}>
                                    <TextInput
                                        style={[styles.input, styles.descInput]}
                                        value={desc}
                                        onChangeText={(text) => updateDescription(index, text)}
                                        placeholder={`Description ${index + 1}`}
                                        multiline
                                        numberOfLines={2}
                                    />
                                    {formData.description.length > 1 && (
                                        <TouchableOpacity
                                            style={styles.removeDescButton}
                                            onPress={() => removeDescriptionField(index)}
                                        >
                                            <Ionicons name="close-circle" size={24} color="#F44336" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            ))}

                            <TouchableOpacity
                                style={styles.addDescButton}
                                onPress={addDescriptionField}
                            >
                                <Ionicons name="add-circle-outline" size={20} color="#FF6C9B" />
                                <Text style={styles.addDescText}>Add Description Line</Text>
                            </TouchableOpacity>

                            {uploading && (
                                <View style={styles.uploadingIndicator}>
                                    <ActivityIndicator size="small" color="#FF6C9B" />
                                    <Text style={styles.uploadingText}>Uploading images...</Text>
                                </View>
                            )}

                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.saveButton}
                                    onPress={handleSave}
                                    disabled={uploading}
                                >
                                    <Text style={styles.saveButtonText}>
                                        {uploading ? "Saving..." : "Save"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

export default AdminDashboard;
