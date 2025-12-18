import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 180,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  headerBg: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "80%",
    resizeMode: "cover",
  },

  headerIcons: {
    position: "absolute",
    right: 15,
    top: 125,
    flexDirection: "row",
    gap: 10,
  },

  iconCircle: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 100,
    elevation: 2,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#fff",
    marginLeft: 15,
    marginBottom: -2,
    backgroundColor: "#fff",
    elevation: 2,
  },

  name: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 15,
    fontFamily: "DMSans-Bold"
  },

  emailname: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 15,
    fontFamily: "DMSans-Regular"
  },


  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 90,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    zIndex: 10,
  },

  tabItem: {
    alignItems: "center",
    paddingBottom: 8,
  },

  tabText: {
    fontSize: 16,
    color: "#b2b2c2",
    fontFamily: "DMSans-Medium",
  },

  activeTabText: {
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

  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default styles;