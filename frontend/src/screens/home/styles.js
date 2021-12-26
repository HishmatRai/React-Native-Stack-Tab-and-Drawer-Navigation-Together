import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  _notification: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 10,
  },
  _heading: {
    marginHorizontal: 20,
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
  },
  _add_image_btn: {
    backgroundColor: "#babfc4b3",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  _image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 15,
    marginRight: 5,
  },
  _card_image: {
    width: "100%",
    height: 250,
    borderRadius: 20,
  },
  _card_main: {
    width: "90%",
    height: 250,
    alignSelf: "center",
    marginTop:20
  },
  _card_header_main: {
    position: "absolute",
    top: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  _card_header_profile_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _profile_image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    marginRight: 5,
  },
  _user_name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  _time: {
    color: "#fff",
    fontSize: 15,
  },
  _card_comment_main: {
    position: "absolute",
    width: "100%",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  _card_comment: {
    backgroundColor: "#ffffff75",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
    width: "30%",
    borderRadius: 50,
    paddingHorizontal: 12,
  },
  _show_comment_counter:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  }
});
