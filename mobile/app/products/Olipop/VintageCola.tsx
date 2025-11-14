import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function VintageCola() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/VintageCola.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/olipop_black.png")}
      productName={"Vintage Cola"}
      price={"500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/VintageCola.png"),
        require("../../../assets/images/initialization_assets/product/VintageCola2.png"),
        require("../../../assets/images/initialization_assets/product/VintageCola3.png"),
      ]}
      description={[
        "Enjoy the timeless taste of Vintage Cola — a classic soda crafted with a nostalgic twist.",
        "Rich, bubbly, and perfectly balanced with notes of caramel and spice.",
        "A refreshing throwback to the golden age of cola, made for true soda lovers!"
      ]}
    />
  );
}
