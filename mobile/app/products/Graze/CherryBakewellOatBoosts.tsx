import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function CherryBakewellOatBoosts() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/CherryBakewellOatBoosts.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/graze.png")}
      productName={"Cherry Bakewell Oat Boosts"}
      price={"₱700"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/CherryBakewellOatBoosts.png"),
        require("../../../assets/images/initialization_assets/product/CherryBakewellOatBoosts2.png"),
        require("../../../assets/images/initialization_assets/product/CherryBakewellOatBoosts3.png"),
      ]}
      description={[
        "Enjoy our Cherry Bakewell Oat Boosts — a delicious blend of juicy cherries, toasted oats, and a hint of almond sweetness.",
        "Soft, chewy, and packed with wholesome flavor for an energy-filled bite.",
        "A perfect on-the-go treat that combines classic Bakewell charm with nourishing goodness!"
      ]}
    />
  );
}
