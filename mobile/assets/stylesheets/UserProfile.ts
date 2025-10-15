import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBackground: {
    width: "100%",
    height: 120,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: -100,
    
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  editButton: {
    backgroundColor: "#FF6C9B",
    borderRadius: 20,
    padding: 5,
    position: "absolute",
    right: "6%",
    top: 70,
  },
  userName: {
    fontSize: 18,
    marginTop: 10,
    color: "#333",
    fontFamily: "DMSans-Bold"
  },
  userOccupation: {
    fontSize: 14,
    color: "#777",
    fontFamily: "DMSans-Medium"
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 120,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    fontFamily: "DMSans-Bold",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    color: "#555",
    fontFamily: "DMSans-Medium",
  },
  value: {
    color: "#111",
    fontWeight: "500",
    fontFamily: "DMSans-Medium",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  settingLabel: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
    fontFamily: "DMSans-Medium",
  },
  editProfileButton: {
    backgroundColor: "#FF6C9B",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 80
  },
  editProfileText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "DMSans-Bold"
  },
});

export default styles;