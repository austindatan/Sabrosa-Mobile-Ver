import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function CerealBowlGourmetChocolateBar() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/CerealBowlGourmetChocolateBar.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/compartes.png")}
      productName={"Cereal Bowl Gourmet Chocolate Bar"}
      price={"1500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/CerealBowlGourmetChocolateBar.png"),
        require("../../../assets/images/initialization_assets/product/CerealBowlGourmetChocolateBar2.png"),
        require("../../../assets/images/initialization_assets/product/CerealBowlGourmetChocolateBar3.png"),
      ]}
      description={[
        "Start your day the sweet way with the Cereal Bowl Gourmet Chocolate Bar — creamy milk chocolate blended with crunchy cereal pieces.",
        "Each bite delivers a nostalgic mix of breakfast crunch and smooth chocolate indulgence.",
        "Fun, flavorful, and irresistibly unique — a true treat for cereal and chocolate lovers alike!"
      ]}
    />
  );
}
