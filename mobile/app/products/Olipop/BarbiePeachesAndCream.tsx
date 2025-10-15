import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function BarbiePeachesAndCream() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/BarbiePeachesAndCream.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/olipop_black.png")}
      productName={"Barbie Peaches & Cream"}
      price={"500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/BarbiePeachesAndCream.png"),
        require("../../../assets/images/initialization_assets/product/BarbiePeachesAndCream2.png"),
        require("../../../assets/images/initialization_assets/product/BarbiePeachesAndCream3.png"),
      ]}
      description={[
        "Embrace the sweetness of Barbie Peaches and Cream — a dreamy chocolate bar inspired by classic nostalgia and modern glamour.",
        "Blended with creamy white chocolate, juicy peach flavor, and a touch of sparkle for that signature Barbie magic.",
        "Pretty, playful, and irresistibly smooth — a treat as iconic as Barbie herself!"
      ]}
    />
  );
}
