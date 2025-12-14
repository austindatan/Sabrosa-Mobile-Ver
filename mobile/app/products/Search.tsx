// @ts-nocheck
import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Modal, ScrollView, Image, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import ProductCard from "../components/ProductCard";
import api from "../../config";
import styles from "../styles/AppEffects";
import { Ionicons } from "@expo/vector-icons";

const SearchPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = useState(params.query || "");
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${api.API_BASE_URL}/api/products/brands`);
        const data = await response.json();
        // API now returns array of {name, image} objects
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      const searchProducts = async () => {
        try {
          let url = `${api.API_BASE_URL}/api/products/search?q=${searchQuery}`;
          if (selectedBrand) {
            url += `&brand=${selectedBrand}`;
          }
          const response = await fetch(url);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error searching products:", error);
        }
      };

      searchProducts();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, selectedBrand]);

  return (
    <View style={[styles.container, { flex: 1, paddingTop: 50 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 10 }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 5 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 10, marginLeft: 10, fontFamily: "DMSans-Regular" }}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoFocus
        />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 5, marginLeft: 10 }}>
          <Ionicons name="filter" size={24} color="#FF6C9B" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalContainer}>
            {/* Header */}
            <View style={modalStyles.header}>
              <Text style={modalStyles.headerTitle}>Filter by Brand</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            {/* Brand List */}
            <ScrollView style={modalStyles.brandList} showsVerticalScrollIndicator={false}>
              {brands.map(brand => (
                <TouchableOpacity
                  key={brand.name}
                  onPress={() => {
                    setSelectedBrand(brand.name);
                    setModalVisible(false);
                  }}
                  style={[
                    modalStyles.brandItem,
                    selectedBrand === brand.name && modalStyles.brandItemSelected
                  ]}
                  activeOpacity={0.7}
                >
                  <View style={modalStyles.brandLogoContainer}>
                    <Image
                      source={{ uri: brand.image }}
                      style={modalStyles.brandLogo}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[
                    modalStyles.brandName,
                    selectedBrand === brand.name && modalStyles.brandNameSelected
                  ]}>
                    {brand.name}
                  </Text>
                  {selectedBrand === brand.name && (
                    <Ionicons name="checkmark-circle" size={22} color="#FF6C9B" />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Action Buttons */}
            <View style={modalStyles.actionButtons}>
              <TouchableOpacity
                style={modalStyles.clearButton}
                onPress={() => {
                  setSelectedBrand(null);
                  setModalVisible(false);
                }}
                activeOpacity={0.7}
              >
                <Text style={modalStyles.clearButtonText}>Clear Filter</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={modalStyles.applyButton}
                onPress={() => setModalVisible(false)}
                activeOpacity={0.7}
              >
                <Text style={modalStyles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.productGridSE} showsVerticalScrollIndicator={false}>
        {products.length === 0 && searchQuery.length > 0 && (
          <View style={{ width: "100%", marginTop: 50, alignItems: "center" }}>
            <Ionicons name="alert-circle-outline" size={40} color="#999" />
            <Text style={{ marginTop: 10, fontSize: 18, fontFamily: "DMSans-Bold", color: "#666" }}>
              No products found
            </Text>
            <Text style={{ fontSize: 14, color: "#888", marginTop: 4, fontFamily: "DMSans-Regular" }}>
              Try a different keyword.
            </Text>
          </View>
        )}

        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {products.map((item) => (
            <View key={item._id} style={{ marginBottom: 10 }}>
              <ProductCard
                productName={item.productName}
                price={`₱${item.price}`}
                productImage={{ uri: item.productImages[0] }}
                brandImage={{ uri: item.brand?.image }}
                onPress={() => router.push(`/products/${item._id}`)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '85%',
    maxHeight: '70%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'DMSans-Bold',
    color: '#333',
  },
  brandList: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  brandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 4,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  brandItemSelected: {
    backgroundColor: '#FFE5EF',
    borderColor: '#FF6C9B',
  },
  brandLogoContainer: {
    width: 50,
    height: 30,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 4,
  },
  brandLogo: {
    width: '100%',
    height: '100%',
  },
  brandName: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'DMSans-Medium',
    color: '#333',
  },
  brandNameSelected: {
    color: '#FF6C9B',
    fontFamily: 'DMSans-Bold',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    gap: 10,
  },
  clearButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF6C9B',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    color: '#FF6C9B',
  },
  applyButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#FF6C9B',
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    color: '#fff',
  },
});

export default SearchPage;
