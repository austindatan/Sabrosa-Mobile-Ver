import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 8,
    padding: 12,
    elevation: 1,
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
  
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
        marginBottom: 10,
    },
    dateText: {
        fontSize: 12,
        color: "#777",
        fontFamily: "DMSans-Medium",
    },
    itemsListContainer: {
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: 10,
        resizeMode: 'contain',
    },
    itemDetails: {
        flex: 1,
        justifyContent: "center",
    },
    itemName: {
        fontSize: 13,
        fontFamily: "DMSans-Medium",
        color: "#333",
        paddingRight:10,
    },
    itemQuantity: {
        fontSize: 11,
        color: "#888",
    },
    itemTotal: {
        fontSize: 13,
        fontFamily: "DMSans-Bold",
        color: "#333",
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    summaryText: {
        fontSize: 12,
        color: "#666",
    },
    summaryValue: {
        fontSize: 12,
        color: "#666",
        fontFamily: "DMSans-Medium",
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        paddingTop: 8,
        marginTop: 4,
    },
    totalText: {
        fontSize: 15,
        fontFamily: "DMSans-Bold",
        color: "#111",
    },
    totalValue: {
        fontSize: 15,
        fontFamily: "DMSans-Bold",
        color: "#FF6C9B",
    },
});


export default styles;