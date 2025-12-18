import { StyleSheet } from "react-native";

const localStyles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 90,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    zIndex: 10,
  },
  tabButton: {
    alignItems: "center",
    paddingBottom: 8,
  },
  tabButtonActive: {
  },
  tabText: {
    fontSize: 16,
    color: "#b2b2c2",
    fontFamily: "DMSans-Medium",
  },
  tabTextActive: {
    color: "#ff4d92",
    fontWeight: "600",
    fontFamily: "DMSans-Bold",
  },
  tabUnderline: {
    marginTop: 4,
    width: 60,
    height: 3,
    backgroundColor: "#ff4d92",
  },

  // Skeleton Styles
  skeletonCard: {
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
    overflow: "hidden",
  },
  skeletonImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  skeletonLineShort: {
    width: "40%",
    height: 12,
    borderRadius: 6,
    backgroundColor: "#e0e0e0",
    marginTop: 8,
  },
  skeletonLineLong: {
    width: "80%",
    height: 12,
    borderRadius: 6,
    backgroundColor: "#e0e0e0",
    marginTop: 8,
  },
  skeletonButtonRow: {
    flexDirection: "row",
    marginTop: 12,
    gap: 10,
  },
  skeletonButton: {
    flex: 1,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },

  checkoutCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 25,
    padding: 20,
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  checkoutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  stickyCheckout: {
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    paddingHorizontal: 30,
  },

  checkoutLabel: {
    fontSize: 15,
    color: "#555",
    fontFamily: "DMSans-Medium",
  },
  checkoutValue: {
    fontSize: 15,
    fontFamily: "DMSans-Bold",
    color: "#000",
  },
  checkoutTotal: {
    fontSize: 18,
    color: "#FF6C9B",
    fontFamily: "DMSans-Bold",
  },
  checkoutButton: {
    backgroundColor: "#FF6C9B",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "DMSans-Bold",
  },
});


export default localStyles;