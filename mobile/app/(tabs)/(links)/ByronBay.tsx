// @ts-nocheck
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/links/ByronBay";
import ProductCard from "../../components/ProductCard";
import AnimatedHeader from "../../components/BrandsHeader";
import { useBackToCookie } from "../../../hooks/BacktoCookie";
import config from "../../../config";

const STATIC_HEADER_HEIGHT = 165;

const ByronBay = () => {
  useBackToCookie();
  const router = useRouter();

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`${config.API_BASE_URL}/api/products/brand/ByronBay`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AnimatedHeader
        brandName="Byron Bay"
        brandTagline="Crafted with passion and baked to perfection."
        backgroundImage={require("../../../assets/images/initialization_assets/byronbay_bg.png")}
        brandLogo={require("../../../assets/images/initialization_assets/logo/byronbay_logo.png")}
      />

      <ScrollView
        contentContainerStyle={{
          paddingTop: STATIC_HEADER_HEIGHT + 20,
          paddingBottom: 70,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Picks!</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productGrid}>
          {products.map((p) => (
            <ProductCard
              key={p._id}
              productName={p.productName}
              price={`₱${p.price}`}
              productImage={{ uri: p.productImages[0] }}
              brandImage={{ uri: p.brand?.image }}
              onPress={() => router.push(`/products/${p._id}`)}
            />
          ))}
        </View>

      </ScrollView>

    </View>
  );
};

export default ByronBay;
