import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    padding: 10,
    elevation: 1,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8a8a8a3a",
    resizeMode: 'contain',
  },

  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    fontFamily: "Barlow",
    marginBottom: 1,
  },

  brandImage: {
    width: 40,
    height: 20,
  },

  price: {
    fontSize: 15,
    color: "#FF6C9B",
    fontFamily: "DMSans-Bold"
  },

  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  minusButton: {
    backgroundColor: "#ffc8d9ff",
    borderRadius: 6,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  minusText: {
    color: "#FF6C9B",
    fontWeight: "bold",
  },

  quantityText: {
    marginHorizontal: 10,
    fontWeight: "600",
    fontFamily: "DIN-Next",
  },

  plusButton: {
    backgroundColor: "#FF6C9B",
    borderRadius: 6,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  plusText: {
    color: "#fff",
    fontWeight: "bold",
  },
});


export default styles;
