import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },

    // Header Styles (like Privacy)
    curvedContainer: {
        overflow: "hidden",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    headerBackground: {
        width: "100%",
        height: 130,
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 10 : 40,
    },

    headerContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    backButton: {
        width: 40,
    },

    headerTextContainer: {
        flex: 1,
        alignItems: "center",
    },

    headerTitle: {
        fontSize: 22,
        fontFamily: "DMSans-Bold",
        color: "#fff",
        textAlign: "center",
    },

    headerSubtitle: {
        fontSize: 12,
        color: "#fff",
        marginTop: 2,
        textAlign: "center",
        fontFamily: "DMSans-Regular",
    },

    addButton: {
        width: 40,
        alignItems: "flex-end",
    },

    filterContainer: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },

    filterLabel: {
        fontSize: 13,
        fontFamily: "DMSans-Bold",
        color: "#333",
        marginBottom: 8,
    },

    filterScroll: {
        flexDirection: "row",
    },

    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        marginRight: 8,
        borderWidth: 1,
        borderColor: "#fff",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    filterChipActive: {
        backgroundColor: "#ffb2cbff",
        borderColor: "#ffb2cbff",
    },

    filterChipText: {
        fontSize: 13,
        fontFamily: "DMSans-Medium",
        color: "#666",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    filterChipTextActive: {
        color: "#fff",
    },

    filterChipLogo: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: "#fff",
        marginRight: 8,
        borderWidth: 2,
        borderColor: "#e9e9e9ff",
        justifyContent: "center",
        alignItems: "center",
    },

    filterBrandLogo: {
        width: 50,
        height: 24,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    listContainer: {
        padding: 15,
    },

    productCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    productImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: "#f0f0f0",
        resizeMode: "contain",
    },

    productInfo: {
        flex: 1,
        marginLeft: 12,
    },

    productName: {
        fontSize: 12,
        fontFamily: "DMSans-Bold",
        color: "#333",
    },

    brandRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },

    brandLogo: {
        width: 40,
        height: 20,
        resizeMode: "contain",
    },

    price: {
        fontSize: 14,
        fontFamily: "DMSans-Bold",
        color: "#FF6C9B",
        marginTop: 4,
    },

    actions: {
        flexDirection: "row",
        gap: 8,
    },

    editButton: {
        backgroundColor: "#4CAF50",
        padding: 8,
        borderRadius: 8,
    },

    deleteButton: {
        backgroundColor: "#F44336",
        padding: 8,
        borderRadius: 8,
    },

    // Modal Styles
    modalContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },

    heroImage: {
        width: "100%",
        height: 250,
        backgroundColor: "#f0f0f0",
    },

    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 10 : 50,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },

    modalTitle: {
        fontSize: 20,
        fontFamily: "DMSans-Bold",
        color: "#333",
    },

    formContainer: {
        marginTop: 0,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    label: {
        fontSize: 14,
        fontFamily: "DMSans-Bold",
        color: "#333",
        marginTop: 16,
        marginBottom: 8,
    },

    helperText: {
        fontSize: 12,
        fontFamily: "DMSans-Regular",
        color: "#666",
        marginBottom: 12,
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        fontFamily: "DMSans-Medium",
        marginBottom: 8,
    },

    textArea: {
        height: 100,
        textAlignVertical: "top",
    },

    // Vertical Brand Picker
    brandPickerVertical: {
        maxHeight: 200,
        marginBottom: 12,
    },

    brandOptionVertical: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 8,
        gap: 12,
    },

    brandOptionSelected: {
        backgroundColor: "#FFE8F0",
        borderColor: "#FF6C9B",
    },

    brandLogoOption: {
        width: 50,
        height: 30,
        resizeMode: "contain",
    },

    brandOptionText: {
        flex: 1,
        fontSize: 14,
        fontFamily: "DMSans-Medium",
        color: "#333",
    },

    // Image Gallery
    imageGallery: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    imagePickerBox: {
        width: "31%",
        aspectRatio: 1,
        borderRadius: 8,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#ddd",
        borderStyle: "dashed",
    },

    previewImage: {
        width: "100%",
        height: "100%",
    },

    placeholderBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
    },

    placeholderText: {
        fontSize: 11,
        fontFamily: "DMSans-Medium",
        color: "#999",
        marginTop: 4,
    },

    uploadingIndicator: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        gap: 8,
    },

    uploadingText: {
        fontSize: 14,
        fontFamily: "DMSans-Medium",
        color: "#FF6C9B",
    },

    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        gap: 10,
    },

    cancelButton: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
    },

    cancelButtonText: {
        fontSize: 16,
        fontFamily: "DMSans-Bold",
        color: "#666",
    },

    saveButton: {
        flex: 1,
        backgroundColor: "#FF6C9B",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
    },

    saveButtonText: {
        fontSize: 16,
        fontFamily: "DMSans-Bold",
        color: "#fff",
    },

    descriptionRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 8,
        gap: 8,
    },

    descInput: {
        flex: 1,
        minHeight: 60,
    },

    removeDescButton: {
        paddingTop: 12,
    },

    addDescButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderWidth: 1,
        borderColor: "#FF6C9B",
        borderRadius: 8,
        borderStyle: "dashed",
        marginTop: 8,
        marginBottom: 5,
        gap: 8,
    },

    addDescText: {
        fontSize: 14,
        fontFamily: "DMSans-Medium",
        color: "#FF6C9B",
    },
});

export default styles;
