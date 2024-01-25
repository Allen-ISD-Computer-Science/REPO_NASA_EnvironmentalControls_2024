import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, } from 'react-native';
import nasalogoImg from './assets/nasaLogoImage.png';
import React, { Component } from 'react';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      
      {/* Container for the logo and the text*/}
      <View style = {styles.logoAndTextContainer}>

        {/* Image */}
        <View style = {styles.imageContainer}>
          <Image source={nasalogoImg} style = {styles.logoImage} />
        </View>

        {/* Text */}
        <Text style={styles.titleNasa}>NASA Environmental Controls</Text>

        <TouchableOpacity

          style = {styles.button} 
          onPress ={() => navigation.navigate('Main')}
          >

          {/* Text for the button */}
          <Text> Welcome </Text>
        </TouchableOpacity>
        <TouchableOpacity

          style = {styles.button} 
          onPress ={() => navigation.navigate('Alarm')}
          >

          {/* Text for the button */}
          <Text> Alarm Page </Text>
        </TouchableOpacity>
        <TouchableOpacity

          style = {styles.button} 
          onPress ={() => navigation.navigate('Test')}
          >

          {/* Text for the button */}
          <Text> Testing Page </Text>
        </TouchableOpacity>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    logoAndTextContainer: {
      alignItems: 'center',
      marginTop: 20,
    },

    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    logoImage: {
      height: 200,
      width: 200,
    },

    titleNasa: {
      margin: 15,
      marginTop: 20,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'Black',
      borderRadius: 10,
      color: 'Black',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic',
      padding: 5,
      },
      
    button: {
      marginTop: 20,
      width:150, 
      alignItems: "center",
      padding: 20,
      borderRadius:50,
      backgroundColor: "#28BEFF",
      marginBottom: 25,
      justifyContent: 'center',
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 1,
      top: 0,
      elevation: 3,
    },
});