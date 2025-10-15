import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function DottyCookie() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/DottyCookie.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/byron.png")}
      productName={"Biscoff Latte"}
      price={"₱280"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/DottyCookie.png"),
        require("../../assets/images/initialization_assets/product/DottyCookie2.png"),
        require("../../assets/images/initialization_assets/product/DottyCookie3.png"),
      ]}
      description={[
        "Go Dotty® with this fun, chocolate chunk doughnut topped with colorful rainbow candy pieces.",
        "A fan-favorite and top seller, it is a playful twist that brings joy with every bite.",
        "Perfectly crafted and glazed for sweetness and delight — a treat that is as cheerful as it is delicious!"
      ]}
    />
  );
}
