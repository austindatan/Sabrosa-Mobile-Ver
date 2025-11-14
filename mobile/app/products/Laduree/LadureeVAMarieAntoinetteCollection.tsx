import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function LadureeVAMarieAntoinetteCollection() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/LadureeVAMarieAntoinetteCollection.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/laduree.png")}
      productName={"Laduree x VA Marie Antoinette Collection"}
      price={"5000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/LadureeVAMarieAntoinetteCollection.png"),
        require("../../../assets/images/initialization_assets/product/LadureeVAMarieAntoinetteCollection2.png"),
        require("../../../assets/images/initialization_assets/product/LadureeVAMarieAntoinetteCollection3.png"),
      ]}
      description={[
        "Celebrate art and elegance with the Ladurée x V&A Collection — inspired by the grace and grandeur of Marie Antoinette.",
        "Featuring exquisitely crafted macarons in pastel hues and delicate flavors fit for royalty.",
        "A decadent collaboration that captures the spirit of French luxury and timeless sophistication."
      ]}
    />
  );
}
