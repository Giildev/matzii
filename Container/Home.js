import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "../Components/Button";
import Audio from "../assets/audio.png";
import Video from "../assets/video.jpg";
import Theater from "../assets/theater.jpg";

export default Home = ({ history }) => {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground source={Audio} style={styles.box}>
          <Button url="Audio" text="Book an Audio Room" history={history} />
        </ImageBackground>
        <ImageBackground source={Video} style={styles.box}>
          <Button url="Video" text="Book a Video Room" history={history} />
        </ImageBackground>
        <ImageBackground source={Theater} style={styles.box}>
          <Button url="Theater" text="Book a Theater Room" history={history} />
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },

  box: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0
  }
});
