import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function ChobaniCreationsCherryCheesecake() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/ChobaniCreationsCherryCheesecake.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/chobani.png")}
      productName={"Chobani Creations Cherry Cheesecake"}
      price={"1000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/ChobaniCreationsCherryCheesecake.png"),
        require("../../../assets/images/initialization_assets/product/ChobaniCreationsCherryCheesecake2.png"),
        require("../../../assets/images/initialization_assets/product/ChobaniCreationsCherryCheesecake3.png"),
      ]}
      description={[
        "Indulge in Chobani Creations Cherry Cheesecake — rich, creamy yogurt inspired by the classic dessert.",
        "Swirled with real cherry compote and graham-style crumbles for that authentic cheesecake taste.",
        "A perfectly balanced treat that’s decadent, delicious, and ready to enjoy anytime!"
      ]}
    />
  );
}
