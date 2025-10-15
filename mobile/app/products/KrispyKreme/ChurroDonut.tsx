import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function ChurroDonut() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/ChurroDonut.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/krispy.png")}
      productName={"Churro Donut"}
      price={"441"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/ChurroDonut.png"),
        require("../../../assets/images/initialization_assets/product/ChurroDonut2.png"),
        require("../../../assets/images/initialization_assets/product/ChurroDonut3.jpg"),
      ]}
      description={[
        "A C-shaped unglazed doughnut coated in your choice of cinnamon-sugar or classic sugar for that extra crunch.",
        "Each box of 6 includes 4 churro doughnuts, 2 sugar doughnuts, and 3 irresistible dips — Matcha, Dark Chocolate, and White Chocolate.",
        "Perfect for sharing or treating yourself, this delightful mix brings sweetness and fun to every bite!"
      ]}
    />
  );
}
