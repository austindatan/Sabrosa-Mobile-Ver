// @ts-nocheck
import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Text, TouchableOpacity, Modal, Button, ScrollView } from "react-native";
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
          style={{ flex: 1, height: 40, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, marginLeft: 10, fontFamily: "DMSans-Regular" }}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoFocus
        />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 5, marginLeft: 10 }}>
          <Ionicons name="filter" size={24} color="black" />
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, width: '80%' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Filter by Brand</Text>
            {brands.map(brand => (
              <TouchableOpacity
                key={brand}
                onPress={() => {
                  setSelectedBrand(brand);
                  setModalVisible(false);
                }}
                style={{ paddingVertical: 10 }}
              >
                <Text>{brand}</Text>
              </TouchableOpacity>
            ))}
            <Button title="Clear Filter" onPress={() => {
              setSelectedBrand(null);
              setModalVisible(false);
            }} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.productGridSE} showsVerticalScrollIndicator={false}>
        {products.length === 0 && searchQuery.length > 0 && (
          <View style={{ width: "100%", marginTop: 50, alignItems: "center" }}>
            <Ionicons name="alert-circle-outline" size={40} color="#999" />
            <Text style={{ marginTop: 10, fontSize: 18, fontFamily:"DMSans-Bold", color: "#666" }}>
              No products found
            </Text>
            <Text style={{ fontSize: 14, color: "#888", marginTop: 4, fontFamily:"DMSans-Regular" }}>
              Try a different keyword.
            </Text>
          </View>
        )}

        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {products.map((item) => (
            <View key={item._id} style={{marginBottom:10}}>
              <ProductCard
                productName={item.productName}
                price={`₱${item.price}`}
                productImage={{ uri: item.productImages[0] }}
                brandImage={{ uri: item.brandImage }}
                onPress={() => router.push(`/products/${item._id}`)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

export default SearchPage;
