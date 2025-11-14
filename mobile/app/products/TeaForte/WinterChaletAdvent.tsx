import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function WinterChaletAdvent() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/WinterChaletAdvent.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/tea_logo.png")}
      productName={"Winter Chalet Advent ~ 12 Days of Cozy Teas"}
      price={"1500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/WinterChaletAdvent.png"),
        require("../../../assets/images/initialization_assets/product/WinterChaletAdvent2.png"),
        require("../../../assets/images/initialization_assets/product/WinterChaletAdvent3.png"),
      ]}
      description={[
        "Celebrate the season with Tea Forté Winter Chalet Advent — a limited-edition collection of 12 cozy teas to warm your winter days.",
        "Each numbered door reveals a unique blend, from spiced chai to soothing herbal infusions, capturing the comfort of a snowy mountain retreat.",
        "A luxurious tea experience perfect for gifting or savoring solo — a festive countdown to pure tea bliss!"
      ]}
    />
  );
}
