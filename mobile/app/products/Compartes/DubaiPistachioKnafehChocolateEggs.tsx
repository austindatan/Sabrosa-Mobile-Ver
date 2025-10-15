import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function DubaiPistachioKnafehChocolateEggs() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/DubaiPistachioKnafehChocolateEggs.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/compartes.png")}
      productName={"Dubai Pistachio Knafeh Chocolate Eggs"}
      price={"1000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/DubaiPistachioKnafehChocolateEggs.png"),
        require("../../../assets/images/initialization_assets/product/DubaiPistachioKnafehChocolateEggs2.png"),
        require("../../../assets/images/initialization_assets/product/DubaiPistachioKnafehChocolateEggs3.png"),
      ]}
      description={[
        "Experience luxury with Dubai Pistachio Knafeh Chocolate Eggs — a decadent fusion of Middle Eastern flavor and fine chocolate craftsmanship.",
        "Each egg is filled with layers of rich pistachio cream and crispy knafeh for a unique, indulgent bite.",
        "A perfect balance of texture and taste — elegant, exotic, and unforgettable."
      ]}
    />
  );
}
