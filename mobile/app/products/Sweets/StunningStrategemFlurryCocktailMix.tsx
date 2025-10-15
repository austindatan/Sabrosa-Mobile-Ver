import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function StunningStrategemFlurryCocktailMix() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/StunningStrategemFlurryCocktailMix.png")}
      brandLogo={require("../../../assets/images/initialization_assets/logo/sweets_logo.png")}
      productName={"Stunning Strategem Flurry Cocktail Mix"}
      price={"200"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/StunningStrategemFlurryCocktailMix.png")
      ]}
      description={[
        "Unleash your bold side with Stunning Strategem Flurry Cocktail Mix — a vibrant blend crafted for unforgettable moments.",
        "Infused with refreshing notes of fruit and a hint of sparkle for the perfect party vibe.",
        "Shake, pour, and enjoy — a stunning mix that turns any occasion into a celebration!"
      ]}
    />
  );
}
