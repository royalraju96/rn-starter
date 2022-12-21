import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {

  const name = "Raju";
return (
  <View>
    <Text style={styles.textStyle}>Getting started with RN</Text>
    <Text style={styles.subHeaderTextStyle}>Hi There {name}</Text>
  </View>
);
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 50
    },
    subHeaderTextStyle : {
      fontSize: 20
    }
});

export default ComponentScreen;