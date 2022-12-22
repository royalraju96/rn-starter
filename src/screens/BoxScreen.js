import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
    <View style={styles.viewOneStyle} />
    <View style={styles.viewTwoParent}>
      <View style={styles.viewTwoStyle} />
    </View>
    <View style={styles.viewThreeStyle} />
  </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 500,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewTwoParent: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    borderWidth: 2,
    height: 50,
    width: 50,
    color: "red",
  },
  viewTwoStyle: {
    borderWidth: 2,
    height: 50,
    width: 50,
    color: "green",
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    color: "purple",
  },
});

export default BoxScreen;
