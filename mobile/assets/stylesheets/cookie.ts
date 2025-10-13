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

  header: {
    width: "100%",
    height: 180,
    justifyContent: "flex-start",
  },

  headerImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  leftContainer: {
    flex: 1
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
    height: 45 
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 20,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 45,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },

  searchIcon: { 
    width: 18,
    height: 18,
    tintColor: "#999",
    marginRight: 8 
  },

  searchInput: { 
    flex: 1, 
    fontSize: 14, 
    color: "#333" 
  },

  filterButton: {
    width: 45,
    height: 45,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },

  filterIcon: { 
    width: 20, 
    height: 20 
  },

  specialOffer: { 
    marginTop: 0, 
    paddingHorizontal: 20
  },

  offerImage: {
    width: "100%",
    height: 150, 
    justifyContent: "center" 
  },

  offerContent: { 
    padding: 15 
  },

  offerTitle: {
    fontSize: 20,
    color: "#fff",
    width: "50%",
    lineHeight: 24,
    marginBottom: 5,
    fontFamily: "Manrope-EXBold",
  },

  offerSubtitle: {
    fontSize: 9,
    color: "#fff",
    marginBottom: 10,
    fontFamily: "Barlow",
    width: "40%",
  },

  offerButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: "flex-start",
    fontFamily: "Manrope-EXBold",
  },

  offerButtonText: { 
    color: "#ff4081",
    fontWeight: "600" 
  },

  sectionHeader: {
    marginTop: -8,
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

  brandGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: 12,
  padding: 20,
  marginTop: -10,
  },


  });
export default styles;