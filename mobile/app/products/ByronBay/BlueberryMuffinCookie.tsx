import React from "react";
import ProductDetail from "../../components/ProductDetail";

export default function BlueberryMuffinCookie() {
  return (
    <ProductDetail
      heroImage={require("../../../assets/images/initialization_assets/food/BlueberryMuffinCookie.png")}
      brandLogo={require("../../../assets/images/initialization_assets/light/byron.png")}
      productName={"White Choc Macadamia Cookie"}
      price={"₱350"}
      galleryImages={[
        require("../../../assets/images/initialization_assets/food/BlueberryMuffinCookie.png"),
        require("../../../assets/images/initialization_assets/product/BlueberryMuffinCookie2.png"),
        require("../../../assets/images/initialization_assets/product/BlueberryMuffinCookie3.png"),
      ]}
      description={[
        "A blueberry muffin inspired doughnut, soft and fluffy with warm notes of blueberry and cinnamon.",
        "Paired with velvety white chocolate chunks for a perfectly balanced, fruity-sweet delight.",
        "Freshly made and beautifully glazed — a comforting treat that feels like home in every bite!"
      ]}
    />
  );
}
