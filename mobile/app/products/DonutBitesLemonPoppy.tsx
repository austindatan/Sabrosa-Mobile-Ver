import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function DonutBitesLemonPoppy() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/DonutBitesLemonPoppy.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/bluestar.png")}
      productName={"Donut Bites Lemon Poppy"}
      price={"800"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/DonutBitesLemonPoppy.png"),
        require("../../assets/images/initialization_assets/product/DonutBitesLemonPoppy2.png"),
        require("../../assets/images/initialization_assets/product/DonutBitesLemonPoppy3.png"),
      ]}
      description={[
        "Brighten your day with our Donut Bites Lemon Poppy — soft, zesty mini doughnuts with a refreshing lemon twist.",
        "Infused with poppy seeds for a delightful crunch and topped with a light citrus glaze.",
        "Sweet, tangy, and perfectly balanced — a sunshine-filled treat in every bite!"
      ]}
    />
  );
}
