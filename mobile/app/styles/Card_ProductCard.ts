import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 108, 155, 0.5)",
    padding: 16,
    width: "100%",
    alignSelf: "center",
  },

  productImage: {
    width: "120%",
    height: 120,
    alignContent: "center",
    alignSelf: "center",
    bottom: 3,
    borderRadius: 12,
  },

  productInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  brandImage: {
    width: 50,
    height: 20,
    resizeMode: "contain",
  },

  productName: {
    fontSize: 12,
    fontFamily: "Barlow",
    color: "#000",
    maxWidth: 80,
  },

  priceTag: {
    backgroundColor: "#ff7eb9",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 40,
    marginTop: 10,
  },

  priceText: {
    color: "#fff",
    fontFamily: "Barlow",
    fontSize: 13,
  },
});

export default styles;