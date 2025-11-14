import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function WarmingJoyTeaChest() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/WarmingJoyTeaChest.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/tea_logo.png")}
      productName={"Warming Joy Tea Chest ~ Limited Edition"}
      price={"1500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/WarmingJoyTeaChest.png"),
        require("../../../assets/images/initialization_assets/product/WarmingJoyTeaChest2.png"),
        require("../../../assets/images/initialization_assets/product/WarmingJoyTeaChest3.png"),
      ]}
      description={[
        "Celebrate the holidays with Tea Forté Warming Joy Tea Chest — a luxurious collection of festive blends made to warm the heart and soul.",
        "Featuring 40 pyramid infusers with black, oolong, green, white, and herbal teas inspired by winter spices and fruits.",
        "Beautifully packaged for gifting or sharing, this limited-edition tea chest brings comfort and elegance to every cup."
      ]}
    />
  );
}
