import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function ChobaniDairyCoffeeCreamerPeppermintMocha() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/ChobaniCreationsCherryCheesecake.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/chobani.png")}
      productName={"Chobani Dairy Coffee Creame Peppermint Mocha"}
      price={"1500"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/ChobaniDairyCoffeeCreamerPeppermintMocha.png"),
        require("../../assets/images/initialization_assets/product/ChobaniDairyCoffeeCreamerPeppermintMocha2.png"),
        require("../../assets/images/initialization_assets/product/ChobaniDairyCoffeeCreamerPeppermintMocha3.png"),
      ]}
      description={[
        "Add a festive touch to your coffee with Chobani Dairy Coffee Creamer Peppermint Mocha — rich, creamy, and perfectly balanced.",
        "Blending real cream, natural peppermint, and decadent chocolate for a cozy holiday flavor.",
        "A smooth, indulgent creamer that turns every cup into a seasonal delight!"
      ]}
    />
  );
}
