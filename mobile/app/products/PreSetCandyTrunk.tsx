import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function PreSetCandyTrunk() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/PreSetCandyTrunk.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/sugar.png")}
      productName={"Pre-Set Candy Trunk"}
      price={"850"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/PreSetCandyTrunk.png"),
        require("../../assets/images/initialization_assets/product/PreSetCandyTrunk2.png"),
        require("../../assets/images/initialization_assets/product/PreSetCandyTrunk3.png"),
      ]}
      description={[
        "Discover sweetness in style with our Pre-Set Candy Trunk — a curated collection of premium confections in a beautifully designed trunk.",
        "Filled with an irresistible mix of gummies, chocolates, and sweets for every craving.",
        "Perfect for gifting, sharing, or indulging — a statement piece for every candy lover!"
      ]}
    />
  );
}
