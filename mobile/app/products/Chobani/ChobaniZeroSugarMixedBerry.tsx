import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function ChobaniZeroSugarMixedBerry() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/ChobaniZeroSugarMixedBerry.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/chobani.png")}
      productName={"Chobani Creations Cherry Cheesecake"}
      price={"500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/ChobaniZeroSugarMixedBerry.png"),
        require("../../../assets/images/initialization_assets/product/ChobaniZeroSugarMixedBerry2.png"),
        require("../../../assets/images/initialization_assets/product/ChobaniZeroSugarMixedBerry3.png"),
      ]}
      description={[
        "Delight in the fruity flavor of Chobani Zero Sugar Mixed Berry — a creamy yogurt with no added sugar and 0g lactose.",
        "Blended with real strawberries, blueberries, and raspberries for a naturally sweet taste.",
        "A delicious, guilt-free snack packed with protein and bursting with berry goodness!"
      ]}
    />
  );
}
