import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function ChampagneBears() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/ChampagneBears.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/sugar.png")}
      productName={"Champagne Bears"}
      price={"1500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/ChampagneBears.png"),
        require("../../../assets/images/initialization_assets/product/ChampagneBears2.png"),
        require("../../../assets/images/initialization_assets/product/ChampagneBears3.png"),
      ]}
      description={[
        "Celebrate in style with Sugarfina iconic Champagne Bears® — made with Dom Pérignon Vintage Champagne for a sparkling twist on candy.",
        "Delicately sweet and irresistibly chewy, these gummy bears bring luxury to every occasion.",
        "Perfect for gifting, celebrating, or simply treating yourself to a touch of bubbly bliss!"
      ]}
    />
  );
}
