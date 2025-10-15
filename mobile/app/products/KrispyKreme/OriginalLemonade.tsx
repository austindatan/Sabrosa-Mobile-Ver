import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function OriginalLemonade() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/OriginalLemonade.jpg")}
      brandLogo={require("../../../assets/images/initialization_assets/light/krispy.png")}
      productName={"Original Lemonade"}
      price={"₱125"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/OriginalLemonade.jpg"),
        require("../../../assets/images/initialization_assets/product/OriginalLemonade2.jpeg"),
        require("../../../assets/images/initialization_assets/product/OriginalLemonade3.jpg"),
      ]}
      description={[
        "A refreshing iced-blended drink bursting with zesty lemonade flavor.",
        "Perfectly chilled to quench your thirst and keep you cool all summer long.",
        "Enjoy the Frozen Original Lemonade — your ultimate summer refreshment!"
      ]}
    />
  );
}
