import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function PineappleParadise() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/PineappleParadise.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/olipop_black.png")}
      productName={"Pineapple Paradise"}
      price={"500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/PineappleParadise.png"),
        require("../../../assets/images/initialization_assets/product/PineappleParadise2.png"),
        require("../../../assets/images/initialization_assets/product/PineappleParadise3.png"),
      ]}
      description={[
        "Escape to tropical bliss with Pineapple Paradise — the pineapple-iest soda straight from Bikini Bottom!",
        "Bursts of juicy pineapple flavor bring sunshine and sweetness to every sip.",
        "A refreshing tropical treat that is as fun and vibrant as its undersea home!"
      ]}
    />
  );
}
