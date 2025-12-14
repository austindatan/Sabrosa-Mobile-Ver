import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerBg: {
        width: '100%',
        height: 120,
        justifyContent: 'flex-end',
        zIndex: 10,
    },
    headerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255,108,155,0.12)',
    },
    pageTitle: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 12,
        fontFamily: 'DMSans-Bold',
    },
    scroll: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 0,
        top: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 16,
        color: '#222',
        fontFamily: 'DMSans-Bold'
    },
    linkText: {
        color: '#FF6C9B',
        fontSize: 14,
        fontFamily: 'DMSans-Medium',
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    addressLabel: {
        color: '#222',
        fontFamily: 'DMSans-Bold',
    },
    addressLine: {
        color: '#555',
        marginTop: 6,
        fontFamily: 'DMSans-Medium',
    },
    addressMeta: {
        color: '#888',
        marginTop: 6,
        fontSize: 13,
        fontFamily: 'DMSans-Medium',
    },
    smallButton: {
        backgroundColor: '#FF6C9B',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    smallButtonText: {
        color: '#fff',
        fontWeight: '700',
    },

    /** NEW MAP STYLE */
    mapImage: {
        width: "100%",
        height: 140,
        borderRadius: 12,
        marginTop: 12,
    },

    mapOverlay: {
        position: 'absolute',
        bottom: 12,
        left: 12,
        right: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    mapOverlayText: {
        color: '#FF6C9B',
        fontSize: 13,
        fontFamily: 'DMSans-Bold',
    },

    paymentRow: {
        marginTop: 12,
    },
    paymentOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    paymentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    paymentLabel: {
        color: '#666',
        fontFamily: 'DMSans-Medium',
    },

    paymentLabelActive: {
        color: '#222',
        fontFamily: 'DMSans-Bold',
    },

    /** ITEM WITH IMAGE */
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: "#f4f4f4",
        resizeMode: 'contain',
    },
    itemName: {
        color: '#222',
        fontFamily: 'DMSans-Medium'
    },
    itemQty: {
        color: '#999',
        fontSize: 13,
    },
    itemPrice: {
        color: '#111',
        fontFamily: 'DMSans-Bold'
    },

    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    summaryLabel: {
        color: '#666',
        fontFamily: 'DMSans-Medium'
    },
    summaryValue: {
        color: '#222',
        fontFamily: 'DMSans-Bold'
    },

    stickyBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 20,
    },
    placeButton: {
        backgroundColor: '#FF6C9B',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
    },
    placeBtnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'DMSans-Bold',
    },
});

export default styles;