import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameOverScreen = ({ roundsNumber, userNumber }) => {
  return (
    <View style={styles.screen}>
      <Text>This Game is Over</Text>
      <Text>Number of Rounds : {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestarts} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
