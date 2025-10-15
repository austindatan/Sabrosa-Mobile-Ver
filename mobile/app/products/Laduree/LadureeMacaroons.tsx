import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function LadureeMacaroons() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/LadureeMacaroons.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/laduree.png")}
      productName={"Laduree x Bridgerton Macaron Box"}
      price={"2000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/LadureeMacaroons.png"),
        require("../../../assets/images/initialization_assets/product/LadureeMacaroons2.png"),
        require("../../../assets/images/initialization_assets/product/LadureeMacaroons3.png"),
      ]}
      description={[
        "Experience timeless Parisian indulgence with Ladurée Macarons — a luxurious selection of 24 iconic flavors like chocolate, vanilla, raspberry, and pistachio.",
        "Each delicate shell is crafted with almonds, rich cream, and natural flavors for the perfect balance of texture and sweetness.",
        "Elegantly presented in the signature green box — a true taste of French sophistication in every bite!"
      ]}
    />
  );
}
