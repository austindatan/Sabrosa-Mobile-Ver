import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function CloudBombomBites() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/CloudBombomBites.jpg")}
      brandLogo={require("../../assets/images/initialization_assets/light/krispy.png")}
      productName={"Cloud Bombom Bites"}
      price={"₱230"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/CloudBombomBites.jpg"),
        require("../../assets/images/initialization_assets/product/CloudBombomBites2.jpg"),
        require("../../assets/images/initialization_assets/product/CloudBombomBites3.jpg"),
      ]}
      description={[
        "Our melt-in-your-mouth Cloud Bombom Bites are coated and dipped in cinnamon®, strawberry, or chocolate powder with creamy fillings inside.",
        "Each box of 12 or 24 comes pre-assorted with Spiced Cookie Cloud, Strawberry Cloud, and Chocolate Cloud flavors.",
        "Soft, fluffy, and delightfully sweet — every bite feels like a little taste of heaven!"
      ]}
    />
  );
}
