import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => {
          navigation.navigate("Component");
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Go to Counter Screen"
      />
       <Button
        onPress={() => {
          navigation.navigate("Color");
        }}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Go to Square Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("TextField");
        }}
        title="Go to Text Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Box");
        }}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
