import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function LadureexBridgertonMacaronBox() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/LadureexBridgertonMacaronBox.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/laduree.png")}
      productName={"Laduree x Bridgerton Macaron Box"}
      price={"2000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/LadureexBridgertonMacaronBox.png"),
        require("../../../assets/images/initialization_assets/product/LadureexBridgertonMacaronBox2.png"),
        require("../../../assets/images/initialization_assets/product/LadureexBridgertonMacaronBox3.png"),
      ]}
      description={[
        "Experience elegance with the Ladurée x Bridgerton Macaron Box — a regal collaboration inspired by timeless romance and royal indulgence.",
        "Featuring an exquisite selection of Ladurée signature macarons in delicate, Bridgerton-inspired flavors and hues.",
        "Perfectly packaged for gifting or savoring — a luxurious treat worthy of high society."
      ]}
    />
  );
}
