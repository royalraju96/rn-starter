import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>THis is Box#1</Text>
      <Text style={styles.textStyle}>THis is Box#2</Text>

      <Text style={styles.textStyle}>THis is Box#3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    justifyContent:"space-around",
    margin: 10
    
  },
  textStyle: {
    borderWidth: 10,
    borderColor: "red",
    margin: 20,
  },
});

export default BoxScreen;
