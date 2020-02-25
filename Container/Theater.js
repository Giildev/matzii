import React from "react";
import { Text, View, Button } from "react-native";

export default Theater = ({ history }) => {
  return (
    <View>
      <Text> Theater Page </Text>
      <Button title="Change Page to Home" onPress={() => history.push("/")} />
      <Button
        title="Change Page to Video"
        onPress={() => history.push("/Video")}
      />
      <Button
        title="Change Page to Theater"
        onPress={() => history.push("/Theater")}
      />
    </View>
  );
};
