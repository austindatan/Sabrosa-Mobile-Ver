import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 45
  },

  heroContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#FF6C9B",
    position: "relative",
  },

  heroImage: {
    width: "100%",
    height: 240
  },

  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#fff",
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF6C9B",
  },

  heartButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#fff",
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF6C9B",
  },

  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 15,
  },

  leftColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
    gap: 4,
  },

  brandLogo: {
    width: 50,
    height: 20
  },

  productName: {
    fontSize: 15,
    fontFamily: "Barlow",
    color: "#000",
    flexWrap: "wrap",
  },

  priceTag: {
    width: 70,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C9B",
    borderRadius: 6,
    paddingHorizontal: 0,
    paddingVertical: 6,
    alignSelf: "flex-start",
    right: 0,
  },

  priceSkeleton: {
    width: 70,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E9EE",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignSelf: "flex-start",
    right: 0,
  },

  priceText: {
    color: "#fff",
    fontFamily: "Barlow",
    fontSize: 16
  },

  galleryContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 15,
  },

  galleryItem: {
    borderWidth: 1,
    borderColor: "#FF6C9B",
    borderRadius: 10,
    overflow: "hidden",
  },

  galleryImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  description: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  text: {
    fontSize: 12,
    color: "#222",
    lineHeight: 16,
    marginBottom: 12,
    fontFamily: "DIN-Next",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFEBF0",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  qtyButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFD8E6",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    fontSize: 18,
    color: "#FF6C9B",
    fontFamily: "DIN-Next"
  },

  qtyValue: {
    fontSize: 16,
    color: "#000",
    fontFamily: "DIN-Next",
    minWidth: 25,
    textAlign: "center",
  },

  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C9B",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 45,
    gap: 8,
  },

  cartText: {
    color: "#fff",
    fontFamily: "DIN-Next",
    fontSize: 15
  },
});

export default styles;