import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function CaramelChocoBobaMilkTea() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/CaramelChocoBobaMilkTea.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/sweets_logo.png")}
      productName={"Caramel Choco Boba Milk Tea"}
      price={"200"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/CaramelChocoBobaMilkTea.png")
      ]}
      description={[
        "Indulge in Caramel Choco Boba Milk Tea — a decadent fusion of rich chocolate, creamy milk, and luscious caramel.",
        "Paired with chewy boba pearls for the perfect blend of texture and sweetness.",
        "A smooth, irresistible drink that is pure dessert bliss in every sip!"
      ]}
    />
  );
}
