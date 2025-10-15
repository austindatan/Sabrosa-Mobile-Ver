import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function DonutBitesChocTruffle() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/DonutBitesChocTruffle.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/bluestar.png")}
      productName={"Donut Bites Choco Truffle"}
      price={"750"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/DonutBitesChocTruffle.png"),
        require("../../assets/images/initialization_assets/product/DonutBitesChocTruffle2.png"),
        require("../../assets/images/initialization_assets/product/DonutBitesChocTruffle3.png"),
      ]}
      description={[
        "Experience pure decadence with our Donut Bites Choc Truffle — soft mini doughnuts filled with rich chocolate truffle cream.",
        "Coated in smooth chocolate glaze for an extra layer of indulgence.",
        "A bite-sized chocolate lovers dream — perfectly sweet, irresistibly rich!"
      ]}
    />
  );
}
