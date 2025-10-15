import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function SweetChilliCrunch() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/SweetChilliCrunch.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/graze.png")}
      productName={"Sweet Chilli Crunch"}
      price={"500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/SweetChilliCrunch.png"),
        require("../../../assets/images/initialization_assets/product/SweetChilliCrunch2.png"),
        require("../../../assets/images/initialization_assets/product/SweetChilliCrunch3.png"),
      ]}
      description={[
        "Spice up your snack time with Sweet Chilli Crunch — a fiery blend of sweetness and heat in every bite.",
        "Each crisp piece is coated with a tangy chilli seasoning for that perfect kick.",
        "Bold, flavorful, and addictive — the ultimate snack for spice lovers!"
      ]}
    />
  );
}
