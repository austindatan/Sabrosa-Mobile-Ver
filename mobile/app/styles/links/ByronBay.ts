import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFf",
  },

  sectionHeader: {
    marginTop: -2,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: { 
    fontSize: 16,
    color: "#ff4081",
    fontFamily: "Manrope-Bold",
  },

  seeAll: {
    fontSize: 11,
    color: "rgba(47,47,47, 0.5)",
  },

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    padding: 20,
    marginTop: -10,
  },


  });
export default styles;