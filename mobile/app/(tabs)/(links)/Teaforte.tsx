// @ts-nocheck
import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useRouter } from "expo-router";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import styles from "../../styles/links/ByronBay";
import ProductCard from "../../components/ProductCard";
import AnimatedHeader from "../../components/BrandsHeader";
import useHomeHeaderAnimation from "../../../hooks/HeaderAnimation";
import useHideOnScroll from "../../../hooks/useHideOnScroll";
import { useBackToCookie } from "../../../hooks/BacktoCookie";
import config from "../../../config";

const Teaforte = () => {
  useBackToCookie();
  const router = useRouter();
  const { visible, handleScroll } = useHideOnScroll();
  const tabBarHeight = useBottomTabBarHeight();

  const {
    scrollY,
    headerHeight,
    topContentOpacity,
    topContentTranslateY,
    logoScale,
    searchTranslateY,
    HEADER_MAX,
  } = useHomeHeaderAnimation();

  const tabBarTranslateY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(tabBarTranslateY, {
      toValue: visible ? 0 : 100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`${config.API_BASE_URL}/api/products/brand/Teaforte`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AnimatedHeader
        headerHeight={headerHeight}
        topContentOpacity={topContentOpacity}
        topContentTranslateY={topContentTranslateY}
        logoScale={logoScale}
        searchTranslateY={searchTranslateY}
        brandName="Tea Forte"
        brandTagline="Extraordinary teas meet unparalleled presentation.                                             "
        backgroundImage={require("../../../assets/images/initialization_assets/teaforte_bg.png")}
        brandLogo={require("../../../assets/images/initialization_assets/logo/tea_logo.png")}
      />

      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: HEADER_MAX + 20,
          paddingBottom: tabBarHeight + 70,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
            listener: handleScroll,
          }
        )}
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
              brandImage={{ uri: p.brandImage }}
              onPress={() => router.push(`/products/${p._id}`)}
            />
          ))}
        </View>

      </Animated.ScrollView>

    </View>
  );
};

export default Teaforte;
