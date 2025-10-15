import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function HollywoodxSugarfinaCandyTastingCollection() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/HollywoodxSugarfinaCandyTastingCollection.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/sugar.png")}
      productName={"Hollywood x Sugarfina Candy Tasting Collection"}
      price={"1500"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/HollywoodxSugarfinaCandyTastingCollection.png"),
        require("../../assets/images/initialization_assets/product/HollywoodxSugarfinaCandyTastingCollection2.png"),
        require("../../assets/images/initialization_assets/product/HollywoodxSugarfinaCandyTastingCollection3.png"),
      ]}
      description={[
        "Step into the spotlight with the Hollywood x Sugarfina Candy Tasting Collection — a glamorous assortment of premium sweets inspired by the magic of the movies.",
        "Featuring sparkling gummies, decadent chocolates, and star-worthy confections crafted for true candy lovers.",
        "Perfect for gifting or indulging yourself — a red-carpet candy experience in every bite!"
      ]}
    />
  );
}
