import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productCard: {
    paddingTop: 5,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 108, 155, 0.5)",
    width: 157,
    alignSelf: "center",
  },

  productImage: {
    width: 120,
    height: 120,
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 12,
    resizeMode: "contain",
    transform: [{ scale: 1.2 }], 
  },

  productInfoRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  productColumn: {
    flexDirection: "column",
  },

  brandImage: {
    width: 50,
    height: 20,
    resizeMode: "contain",
    marginBottom: 1,
  },

  productName: {
    fontSize: 13,
    fontFamily: "Barlow",
    color: "#000",
    maxWidth: 70,
  },

  priceTag: {
    backgroundColor: "#ff7eb9",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  priceText: {
    color: "#fff",
    fontFamily: "Barlow",
    fontSize: 13,
  },
});

export default styles;