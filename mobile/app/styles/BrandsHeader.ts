import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFf",
    },

    headerWrapper: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
    },

    brandInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 55,
        gap: 15,
    },

    brandLogoContainer: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    brandLogoImage: {
        width: "80%",
        height: "80%",
    },

    brandTextContainer: {
        flexShrink: 1,
    },

    brandName: {
        fontSize: 20,
        fontFamily: "Manrope-EXBold",
        top: 6,
        color: "#fff",
        right: 5
    },

    brandTagline: {
        fontSize: 11,
        fontFamily: "DIN-Black",
        color: "rgba(255,255,255,0.9)",
        marginTop: 4,
        width: "90%",
        right: 5
    },

    header: {
        width: "100%",
        height: 180,
        justifyContent: "flex-start",
    },

    headerImage: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        bottom: 0,
    },

    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 50,
    },

    leftContainer: {
        flex: 1,
    },

    locationLabel: {
        fontSize: 13,
        color: "#fff",
        fontFamily: "DMSans-Medium",
    },

    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },

    locationIcon: {
        width: 18,
        height: 18,
        marginRight: 6,
    },

    locationValue: {
        fontSize: 15,
        color: "#fff",
        fontFamily: "DMSans-Medium",
    },

    logo: {
        width: 45,
        height: 45,
    },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -5,
        paddingHorizontal: 20,
    },

    searchBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 35,
    },

    searchIcon: { 
        width: 18,
        height: 18,
        tintColor: "#FF6C9B",
        marginRight: 8,
    },

    searchInput: {
        top: 2,
        flex: 1, 
        fontSize: 14, 
        color: "#333",
    },
});


export default styles;
