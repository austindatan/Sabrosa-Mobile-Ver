import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function VictoriousLegendTonkotsuRamen() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/VictoriousLegendTonkotsuRamen.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/sweets_logo.png")}
      productName={"Victorious Legend Tonkotsu Ramen"}
      price={"1000"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/VictoriousLegendTonkotsuRamen.png")
      ]}
      description={[
        "Conquer your cravings with Victorious Legend Tonkotsu Ramen — a rich, flavorful fusion of creamy pork broth and perfectly chewy noodles.",
        "Infused with authentic Japanese spices for that deep, umami-packed taste.",
        "A legendary ramen experience that delivers bold flavor and comfort in every bowl!"
      ]}
    />
  );
}
