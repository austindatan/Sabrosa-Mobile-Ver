import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function SmokyBarbecueCrunch() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/SmokyBarbecueCrunch.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/graze.png")}
      productName={"Smoky Barbecue Crunch"}
      price={"500"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/SmokyBarbecueCrunch.png"),
        require("../../../assets/images/initialization_assets/product/SmokyBarbecueCrunch2.png"),
        require("../../../assets/images/initialization_assets/product/SmokyBarbecueCrunch3.png"),
      ]}
      description={[
        "Turn up the flavor with Smoky Barbecue Crunch — a bold, savory snack packed with irresistible BBQ goodness.",
        "Each bite delivers the perfect mix of smoky, sweet, and salty for a truly satisfying crunch.",
        "Perfect for snacking anytime — bring the barbecue vibes wherever you go!"
      ]}
    />
  );
}
