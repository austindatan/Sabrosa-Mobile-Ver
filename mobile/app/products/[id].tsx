// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import ProductDetail from "../components/ProductDetail";
import axios from "axios";
import config from "../../config";

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return null;

  return (
    <ProductDetail
      productId={product._id}
      heroImage={{ uri: product.productImages[1] }}
      brandLogo={{ uri: product.brandImage }}
      productName={product.productName}
      price={`₱${product.price}`}

      galleryImages={[
        { uri: product.productImages[0] },
        { uri: product.productImages[1] },
        { uri: product.productImages[2] },
      ]}
      description={[product.description]}
    />
  );
}
