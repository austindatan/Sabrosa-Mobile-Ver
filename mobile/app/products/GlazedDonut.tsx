import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function GlazedDonut() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/GlazedDonut.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/krispy.png")}
      productName={"Glazed Donut"}
      price={"₱465"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/GlazedDonut.png"),
        require("../../assets/images/initialization_assets/product/GlazedDonut2.png"),
        require("../../assets/images/initialization_assets/product/GlazedDonut3.png"),
      ]}
      description={[
        "Indulge in melt-in-your-mouth goodness with our world-famous Original Glazed® Doughnuts — soft, sweet, and perfectly glazed.",
        "Enjoy 12 pieces of pure delight in every box, handcrafted fresh daily for that iconic Krispy Kreme taste.",
        "OG Card holders, treat yourself! Get a free Box of 6 Original Glazed® Doughnuts when you purchase a Dozen Original Glazed® Doughnuts.",
      ]}
    />
  );
}
