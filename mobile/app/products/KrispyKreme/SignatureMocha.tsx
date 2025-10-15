import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function SignatureMocha() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/SignatureMocha.jpg")}
      brandLogo={require("../../../assets/images/initialization_assets/light/krispy.png")}
      productName={"Signature Mocha"}
      price={"₱175"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/SignatureMocha.jpg"),
        require("../../../assets/images/initialization_assets/product/SignatureMocha2.jpg"),
        require("../../../assets/images/initialization_assets/product/SignatureMocha3.png"),
      ]}
      description={[
        "An iced coffee crafted with rich signature espresso, smooth milk, and decadent chocolate syrup.",
        "Blended with our special cream mixture for a velvety, indulgent finish.",
        "Enjoy creamy goodness in every sip — the perfect pick-me-up anytime!"
      ]}
    />
  );
}
