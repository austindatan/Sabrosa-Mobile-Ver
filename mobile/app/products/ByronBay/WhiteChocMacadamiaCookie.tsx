import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function WhiteChocMacadamiaCookie() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/WhiteChocMacadamiaCookie.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/byron.png")}
      productName={"White Choc Macadamia Cookie"}
      price={"₱250"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/WhiteChocMacadamiaCookie.png"),
        require("../../../assets/images/initialization_assets/product/WhiteChocMacadamiaCookie2.png"),
        require("../../../assets/images/initialization_assets/product/WhiteChocMacadamiaCookie3.png"),
      ]}
      description={[
        "This classic doughnut combines creamy white chocolate chunks with crunchy macadamia nuts for a timeless favorite.",
        "One of the original flavors that started it all, loved for its perfect balance of sweetness and texture.",
        "Freshly made and glazed to perfection — a classic treat that never goes out of style!"
      ]}
    />
  );
}
