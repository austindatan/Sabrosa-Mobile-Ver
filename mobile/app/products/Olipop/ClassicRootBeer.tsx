import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function ClassicRootBeer() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/ClassicRootBeer.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/olipop_black.png")}
      productName={"Classic Root Beer"}
      price={"500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/ClassicRootBeer.png"),
        require("../../../assets/images/initialization_assets/product/ClassicRootBeer2.png"),
        require("../../../assets/images/initialization_assets/product/ClassicRootBeer3.png"),
      ]}
      description={[
        "Relive the nostalgia with Classic Root Beer — a smooth, creamy soda with that old-fashioned flavor you love.",
        "Rich notes of vanilla and spice blend perfectly for a satisfying, frothy sip.",
        "A timeless favorite that’s as comforting as it is refreshing!"
      ]}
    />
  );
}
