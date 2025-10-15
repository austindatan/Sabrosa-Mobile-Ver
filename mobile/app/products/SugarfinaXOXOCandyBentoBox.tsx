import React from "react";
import ProductDetail from "../components/ProductDetail";

export default function SugarfinaXOXOCandyBentoBox() {
  return (
    <ProductDetail
      heroImage={require("../../assets/images/initialization_assets/food/SugarfinaXOXOCandyBentoBox.png")}
      brandLogo={require("../../assets/images/initialization_assets/light/sugar.png")}
      productName={"Sugarfina XOXO Candy Bento Box"}
      price={"1800"}
      galleryImages={[
        require("../../assets/images/initialization_assets/food/SugarfinaXOXOCandyBentoBoxt.png"),
        require("../../assets/images/initialization_assets/product/SugarfinaXOXOCandyBentoBox2.png"),
        require("../../assets/images/initialization_assets/product/SugarfinaXOXOCandyBentoBox3.png"),
      ]}
      description={[
        "Share the love with the Sugarfina XOXO Candy Bento Box — a charming collection of sweet treats made for gifting and indulging.",
        "Featuring an assortment of Sugarfina signature gummies and chocolates, beautifully arranged in a keepsake box.",
        "The perfect way to say I love you — one bite at a time!"
      ]}
    />
  );
}
