import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, } from 'react-native';
import nasalogoImg from './assets/nasaLogoImage.png';

// import { Dimensions }q from 'react-native';
import React, { Component } from 'react';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      
      <Image source={nasalogoImg} style={{
        height: 400,
        width: 400,
        left: 410,
        top: 150,

      }}/>
    
      <StatusBar style="auto" />
      <Text style={styles.titlem}>NASA Environmental Controls</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress = {() => navigation.navigate('Main') }
       > 
          <Text> Welcome </Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = {
    container: {
      flex: 1
    },
    titlem: {
      margin: 15,
      marginTop: 50,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'Black',
      borderRadius: 10,
      color: 'Black',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic',
      top: -400
      },
    button: {
      marginTop: 100,
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
      left: 515,
    },
  };