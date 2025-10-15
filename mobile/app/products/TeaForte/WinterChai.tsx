import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function WinterChai() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/WinterChai.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/tea_logo.png")}
      productName={"Winter Chai"}
      price={"1000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/WinterChai.png"),
        require("../../../assets/images/initialization_assets/product/WinterChai2.png"),
        require("../../../assets/images/initialization_assets/product/WinterChai3.png"),
      ]}
      description={[
        "Tea Forté Winter Chai is a cozy herbal blend of South African rooibos, cinnamon, cardamom, vanilla, and ginger — the perfect companion for chilly days.",
        "This caffeine-free chai offers a golden infusion with sweet, spicy notes that comfort the senses and lift the spirit.",
        "Handcrafted with organic ingredients and artful balance, Winter Chai delivers the warmth of traditional chai without the buzz — pure serenity in every sip."
      ]}
    />
  );
}
