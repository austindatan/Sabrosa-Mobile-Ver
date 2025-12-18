import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 16,
        marginBottom: 12,
        marginHorizontal: 20,
        elevation: 1,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        borderWidth: 1,
        borderColor: "#f0f0f0",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },

    statusText: {
        fontSize: 12,
        fontFamily: "DMSans-Bold",
    },

    dateText: {
        fontSize: 12,
        color: "#999",
        fontFamily: "DMSans-Medium",
    },

    itemsContainer: {
        marginBottom: 12,
    },

    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#f5f5f5",
        resizeMode: "contain",
    },

    itemInfo: {
        flex: 1,
        marginLeft: 10,
    },

    itemName: {
        fontSize: 14,
        color: "#333",
        fontFamily: "DMSans-Medium",
    },

    itemQuantity: {
        fontSize: 12,
        color: "#999",
        marginTop: 2,
        fontFamily: "DMSans-Regular",
    },

    itemPrice: {
        fontSize: 14,
        color: "#333",
        fontFamily: "DMSans-Bold",
    },

    moreItems: {
        fontSize: 12,
        color: "#FF6C9B",
        fontFamily: "DMSans-Medium",
        marginTop: 4,
    },

    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        marginBottom: 12,
    },

    totalLabel: {
        fontSize: 14,
        color: "#666",
        fontFamily: "DMSans-Medium",
    },

    totalValue: {
        fontSize: 16,
        color: "#333",
        fontFamily: "DMSans-Bold",
    },

    reorderButton: {
        backgroundColor: "#FF6C9B",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderRadius: 10,
        gap: 8,
    },

    reorderText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "DMSans-Bold",
    },
});

export default styles;
