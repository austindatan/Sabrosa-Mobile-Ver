import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        marginVertical: 8,
        padding: 12,
        elevation: 1,
        flexDirection: "row",
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: "#f4f4f4",
        borderWidth: 1,
        borderColor: "#ececec",
        resizeMode: 'contain',
    },

    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "center",
    },

    brandLogo: {
        width: 50,
        height: 18,
        marginBottom: 4,
    },

    productName: {
        fontSize: 14,
        color: "#111",
        fontFamily: "DMSans-Bold",
        marginBottom: 3,
    },

    price: {
        fontSize: 15,
        color: "#FF6C9B",
        fontFamily: "DMSans-Bold",
    },

    removeButton: {
        position: "absolute",
        top: 12,
        right: 12,
        padding: 4,
    },
});

export default styles;
