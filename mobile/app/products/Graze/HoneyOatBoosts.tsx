import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function HoneyOatBoosts() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/HoneyOatBoosts.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/graze.png")}
      productName={"Honey Oat Boosts"}
      price={"800"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/HoneyOatBoosts.png"),
        require("../../../assets/images/initialization_assets/product/HoneyOatBoosts2.png"),
        require("../../../assets/images/initialization_assets/product/HoneyOatBoosts3.png"),
      ]}
      description={[
        "Fuel your day with Honey Oat Boosts — a wholesome blend of golden honey and hearty oats.",
        "Soft, chewy, and naturally sweet, they’re perfect for an energy boost anytime.",
        "A simple, delicious snack that’s as nourishing as it is satisfying!"
      ]}
    />
  );
}
