import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  sideMenuContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 20,
  },
  _profile_img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    // alignSelf:"center",
    marginTop: 5,
    marginLeft: 20,
  },
  _user_name: {
    color: "#000",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: "bold",
  },
  _pages: {
    color: "#000",
    fontSize: 20,
    marginLeft: 10,
  },
  _dwawer_list_main: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
