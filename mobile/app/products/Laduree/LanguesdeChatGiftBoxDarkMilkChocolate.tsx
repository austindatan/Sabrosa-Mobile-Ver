import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function LanguesdeChatGiftBoxDarkMilkChocolate() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/LanguesdeChatGiftBoxDarkMilkChocolate.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/laduree.png")}
      productName={"Langues de Chat Gift Box Dark Milk Chocolate"}
      price={"1500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/LanguesdeChatGiftBoxDarkMilkChocolate.png"),
        require("../../../assets/images/initialization_assets/product/LanguesdeChatGiftBoxDarkMilkChocolate2.png"),
        require("../../../assets/images/initialization_assets/product/LanguesdeChatGiftBoxDarkMilkChocolate3.png"),
      ]}
      description={[
        "Delight in the timeless charm of Langues de Chat — delicately crisp biscuits with a golden edge and light, airy texture.",
        "Each piece is coated in rich dark chocolate and smooth milk chocolate for the perfect harmony of sweetness and cocoa depth.",
        "Beautifully presented in a gift box, it is an elegant treat to enjoy with tea, coffee, or on its own."
      ]}
    />
  );
}
