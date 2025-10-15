import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function TeaChestTeaTastingAssortment() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/TeaChestTeaTastingAssortment.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/tea_logo.png")}
      productName={"Tea Chest Tea Tasting Assortment"}
      price={"2500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/TeaChestTeaTastingAssortment.png"),
        require("../../../assets/images/initialization_assets/product/TeaChestTeaTastingAssortment2.png"),
        require("../../../assets/images/initialization_assets/product/TeaChestTeaTastingAssortment3.png"),
      ]}
      description={[
        "Tea Forté’s Tea Chest Tea Tasting Assortment is a grand collection of 40 pyramid tea infusers, featuring organic black, oolong, green, white, and herbal blends for every mood and moment.",
        "Each elegant chest opens to reveal a detailed tea menu — an invitation to explore refined flavors like Earl Grey, Cherry Blossom, and Vanilla Pear, beautifully curated for the ultimate tasting experience.",
        "Perfect for gifting or self-indulgence, this luxurious assortment combines artistry and flavor in one timeless chest — a celebration of tea at its finest."
      ]}
    />
  );
}
