import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function MilkChocChunkCookie() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/MilkChocChunkCookie.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/byron.png")}
      productName={"Milk Choco Chunk Cookie"}
      price={"₱250"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/MilkChocChunkCookie.png"),
        require("../../../assets/images/initialization_assets/product/MilkChocChunkCookie2.png"),
        require("../../../assets/images/initialization_assets/product/MilkChocChunkCookie3.png"),
      ]}
      description={[
        "This classic doughnut is generously filled with rich chocolate chunks and glazed to golden perfection.",
        "Best enjoyed with your favorite coffee, it is the perfect blend of sweetness and comfort.",
        "Each doughnut is crafted fresh for that irresistible melt-in-your-mouth goodness every time."
      ]}
    />
  );
}
