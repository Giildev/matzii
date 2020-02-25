import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Container/Home";
import Audio from "./Container/Audio";
import Video from "./Container/Video";
import Theater from "./Container/Theater";
import { NativeRouter, Switch, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.titleBg}>
          <Text style={styles.title}> Welcome to Matzii </Text>
        </View>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Audio" component={Audio} />
          <Route exact path="/Video" component={Video} />
          <Route exact path="/Theater" component={Theater} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
    // justifyContent: "center"
  },
  titleBg: {
    backgroundColor: "#000",
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 32,
    color: "#fff"
  }
});
