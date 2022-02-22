import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    color: Colors.secondary,
    fontSize: 22,
  },
});
