import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

let Home = () => {
  const [images, setImages] = useState([
    "https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Couple1.jpg",
  ]);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    let pickedImages = [];
    console.log(result);

    if (!result.cancelled) {
      pickedImages.push(result.uri);
      setImages([...images, ...pickedImages]);
    
    }
    console.log(pickedImages)
  };

  let CardData = [
    {
      name: "Hishmat Rai",
    },
    {
      name: "Hishmat Rai",
    },
    {
      name: "Hishmat Rai",
    },
    {
      name: "Hishmat Rai",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles._notification}>
        <Ionicons name="notifications" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles._heading}>Feed</Text>
      <View style={{paddingVertical:10}}>
        <ScrollView horizontal={true}>
          <View>
            <TouchableOpacity style={styles._add_image_btn} onPress={pickImage}>
              <FontAwesome name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {images.length !== 0 &&
            images.map((val, i) => {
              return (
                <View style={styles._image_main} key={i}>
                  <Image source={{ uri: val }} style={styles._image} />
                </View>
              );
            })}
        </ScrollView>
      </View>
      <View style={{ flex: 1}}>
        <ScrollView >
          {CardData.map((v, i) => {
            return (
              <View style={styles._card_main} key={i}>
                <Image
                  source={require("./../../../assets/images/bgImage.jpg")}
                  style={styles._card_image}
                />
                <View style={styles._card_header_main}>
                  <View style={styles._card_header_profile_main}>
                    <Image
                      source={require("./../../../assets/images/profile.jpg")}
                      style={styles._profile_image}
                    />
                    <View>
                      <Text style={styles._user_name}>Hishmat Rai</Text>
                      <Text style={styles._time}>2 hrs ago</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles._card_comment_main}>
                  <TouchableOpacity style={styles._card_comment}>
                    <FontAwesome5 name="heart" size={20} color="#fff" />
                    <Text style={styles._show_comment_counter}>5.2K</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles._card_comment}>
                    <Feather name="message-square" size={20} color="#fff" />
                    <Text style={styles._show_comment_counter}>1.2K</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles._card_comment}>
                    <FontAwesome name="share" size={20} color="#fff" />
                    <Text style={styles._show_comment_counter}>2.2K</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
          <View style={{paddingBottom:20}}/>
        </ScrollView>
      </View>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View> */}
    </SafeAreaView>
  );
};
export default Home;
