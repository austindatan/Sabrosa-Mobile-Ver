import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function BiscoffLatte() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/BiscoffLatte.jpg")}
      brandLogo={require("../../../assets/images/initialization_assets/light/krispy.png")}
      productName={"Biscoff Latte"}
      price={"₱215"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/BiscoffLatte.jpg"),
        require("../../../assets/images/initialization_assets/product/BiscoffLatte2.jpg"),
        require("../../../assets/images/initialization_assets/product/BiscoffLatte3.jpg"),
      ]}
      description={[
        "A rich caramel toffee-inspired latte blended to perfection for a smooth, golden treat.",
        "Topped with whipped kreme, cookie crumble, and a touch of golden shimmer sugar for extra indulgence.",
        "Available in hot, iced, or frozen — your perfect sip for any mood!"
      ]}
    />
  );
}
