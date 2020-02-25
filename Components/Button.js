import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ history, text, url }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => history.push(`/${url}`)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  text: {
    fontSize: 42
  }
});
