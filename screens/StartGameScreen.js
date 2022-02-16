import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>StartGameScreen</Text>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
