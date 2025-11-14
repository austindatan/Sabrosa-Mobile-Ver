import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function SummerFestivalFish() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/SummerFestivalFish.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/sweets_logo.png")}
      productName={"Summer Festival Fish"}
      price={"1000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/SummerFestivalFish.png")
      ]}
      description={[
        "Dive into the fun with Summer Festival Fish — a colorful candy mix inspired by sunny days and seaside fairs.",
        "Chewy, fruity, and bursting with flavor in every playful fish-shaped bite.",
        "A joyful treat that captures the taste of summer with every handful!"
      ]}
    />
  );
}
