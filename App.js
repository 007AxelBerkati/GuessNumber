import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <View style={styles.page}>
      <Header title="Guess a Number" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
