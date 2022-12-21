import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
    return (
       <View>
        <ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')}/>
        <ImageDetail title = "Beach" imageSource = {require('../../assets/beach.jpg')}/>
        <ImageDetail title = "Mountain" imageSource = {require('../../assets/mountain.jpg')}/>
       </View>
    );
}


export default ImageScreen;