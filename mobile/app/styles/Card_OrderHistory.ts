import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 8,
    padding: 12,
    elevation: 1,
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
    borderWidth: 1,
    borderColor: "#ececec",
    resizeMode: 'contain',
  },

  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  brandImage: {
    width: 40,
    height: 18,
    marginBottom: 4,
  },

  name: {
    fontSize: 14,
    color: "#111",
    fontFamily: "DMSans-Bold",
    marginBottom: 3,
  },

  date: {
    fontSize: 11,
    color: "#777",
    marginBottom: 4,
    fontFamily: "DMSans-Medium"
  },

  statusBadge: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 5,
  },

  statusText: {
    fontSize: 11,
    fontFamily: "DMSans-Medium",
    color: "#333",
  },

  price: {
    fontSize: 15,
    color: "#FF6C9B",
    fontFamily: "DMSans-Bold",
    textAlign: "right",
  },
});

export default styles;
