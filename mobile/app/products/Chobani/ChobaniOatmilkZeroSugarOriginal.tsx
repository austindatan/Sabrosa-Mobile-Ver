import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function ChobaniOatmilkZeroSugarOriginal() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/ChobaniOatmilkZeroSugarOriginal.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/chobani.png")}
      productName={"Chobani Oatmilk Zero Sugar Original"}
      price={"2000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/ChobaniOatmilkZeroSugarOriginal.png"),
        require("../../../assets/images/initialization_assets/product/ChobaniOatmilkZeroSugarOriginal2.png"),
        require("../../../assets/images/initialization_assets/product/ChobaniOatmilkZeroSugarOriginal3.png"),
      ]}
      description={[
        "Enjoy the smooth, creamy taste of Chobani Oatmilk Zero Sugar Original — made from whole grain oats with zero grams of sugar.",
        "Perfectly balanced and deliciously dairy-free, it is great for coffee, cereal, or smoothies.",
        "A wholesome plant-based choice that is simple, pure, and naturally satisfying!"
      ]}
    />
  );
}
