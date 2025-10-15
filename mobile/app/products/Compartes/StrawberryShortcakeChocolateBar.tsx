import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function StrawberryShortcakeChocolateBar() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/StrawberryShortcakeChocolateBar.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/compartes.png")}
      productName={"Strawberry Shortcake Chocolate Bar"}
      price={"1500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/StrawberryShortcakeChocolateBar.png"),
        require("../../../assets/images/initialization_assets/product/StrawberryShortcakeChocolateBar2.png"),
        require("../../../assets/images/initialization_assets/product/StrawberryShortcakeChocolateBar3.png"),
      ]}
      description={[
        "Delight in the sweetness of the Strawberry Shortcake Chocolate Bar — creamy white chocolate infused with real strawberry flavor.",
        "Studded with crunchy shortcake pieces for the perfect mix of texture and sweetness.",
        "A playful, indulgent treat that tastes just like dessert in every bite!"
      ]}
    />
  );
}
