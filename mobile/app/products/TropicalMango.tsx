import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function TropicalMango() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/product/passionfruit1.jpg")}
      brandLogo={require("../../assets/images/initialization_assets/logo/byronbay_logo.png")}
      productName={"Tropical Mango & Passionfruit Cookie"}
      price={"₱85"}
      galleryImages={[
        require("../../assets/images/initialization_assets/product/passionfruit2.jpg"),
        require("../../assets/images/initialization_assets/food/product1.png"),
        require("../../assets/images/initialization_assets/product/passionfruit1.jpg"),
      ]}
      description={[
        "Escape to the tropics with flavours of coconut coupled with mango and passionfruit jellies.",
        "Individually wrapped for convenience, each Byron Bay Wrapped Cafe Cookie delivers a taste of Byron in every bite. Available as an individually wrapped 55g cookie or as a dozen individually wrapped 55g cookies in a cookie box. Featuring unique artwork from Australian artist Chloe Joyce.",
        "Designed with cafes in mind, the Byron Bay Cookie display box is your ultimate cookie stash! Showcase your cookies at home or at work, and wherever else cookie cravings may arise.",
      ]}
    />
  );
}
