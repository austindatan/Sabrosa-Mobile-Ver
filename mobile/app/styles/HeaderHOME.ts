import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 0,
    zIndex: 8,
  },

  headerfirst: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    zIndex: 1000000,
  },

  logo: {
    width: 100,
    height: 37,
    right: 35
  },

  notif: {
    backgroundColor: "#fdc0d07a",
    borderRadius: 30,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center"
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  searchInput: {
    flex: 1,
    width: "100%",
    height: 40,
    fontSize: 16,
    color: "#333",
    fontFamily: "DMSans-Regular",
  },

  filterB: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center"
  },
  
  filterButton: {
    backgroundColor: "#fdc0d07a",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  
  filterText: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 5,
    fontFamily: "DMSans-Regular",
  },

  backgroundImageContainer: {
    width: '100%', 
    height: 142,
    overflow: 'hidden',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 2,
},
});

export default styles;