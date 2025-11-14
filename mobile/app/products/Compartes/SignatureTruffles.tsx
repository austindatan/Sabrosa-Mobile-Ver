import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function SignatureTruffles() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/SignatureTruffles.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/compartes.png")}
      productName={"Signature Truffles"}
      price={"1000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/SignatureTruffles.png"),
        require("../../../assets/images/initialization_assets/product/SignatureTruffles2.png"),
        require("../../../assets/images/initialization_assets/product/SignatureTruffles3.png"),
      ]}
      description={[
        "Indulge in Jonathan Signature Truffles — Compartés Chocolatiers best-selling gourmet creation.",
        "Handmade in the European tradition with rich chocolate ganache and seasonal ingredients for a truly artistic taste experience.",
        "Exotic, elegant, and preservative-free, each box offers a unique assortment of 10 to 20 decadent truffle flavors — the perfect gift for any occasion!"
      ]}
    />
  );
}
