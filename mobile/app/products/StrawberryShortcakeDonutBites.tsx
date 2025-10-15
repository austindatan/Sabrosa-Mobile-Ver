import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function StrawberryShortcakeDonutBites() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/StrawberryShortcakeDonutBites.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/bluestar.png")}
      productName={"Strawberry Shortcake Donut Bites"}
      price={"800"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/StrawberryShortcakeDonutBites.png"),
        require("../../assets/images/initialization_assets/product/StrawberryShortcakeDonutBites2.png"),
        require("../../assets/images/initialization_assets/product/StrawberryShortcakeDonutBites3.png"),
      ]}
      description={[
        "Delight in our Strawberry Shortcake Donut Bites — soft, bite-sized doughnuts bursting with strawberry flavor.",
        "Coated in a sweet strawberry glaze and topped with crunchy shortcake crumbs for the perfect texture.",
        "Light, fruity, and irresistible — a mini treat that is big on sweetness!"
      ]}
    />
  );
}
