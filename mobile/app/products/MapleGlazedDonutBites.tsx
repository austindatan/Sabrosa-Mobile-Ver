import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function MapleGlazedDonutBites() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/MapleGlazedDonutBites.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/bluestar.png")}
      productName={"Maple Glazed Donut Bites"}
      price={"800"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/MapleGlazedDonutBites.png"),
        require("../../assets/images/initialization_assets/product/MapleGlazedDonutBites2.png"),
        require("../../assets/images/initialization_assets/product/MapleGlazedDonutBites3.png"),
      ]}
      description={[
        "Indulge in our Maple Glazed Donut Bites — soft, fluffy mini doughnuts coated in rich maple glaze.",
        "Each bite delivers the perfect balance of sweetness and warmth with that classic maple flavor.",
        "A cozy, melt-in-your-mouth treat perfect for any time of day!"
      ]}
    />
  );
}
