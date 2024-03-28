import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Alert, Dimensions} from 'react-native';
import nasalogoImg from './assets/nasaLogoImage.png';
import React, { Component, useState } from 'react';

export default function AndroidWelcome({navigation}) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showPopup = () => {
    setIsModalVisible(true);
  };

  const hidePopup = () => {
    setIsModalVisible(false);
    navigation.navigate('Welcome');
  };

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

        {/* Welcome Button
        <Pressable
          style = {styles.button} 
          onPress= {() => {
            // console.log('Button Pressed');
            showPopup();
          }}
          >

          Text for the button
          <Text style = {styles.buttonText} > Back to Main Welcome </Text>
        </Pressable> */}

        <Pressable
          style = {styles.toMain} 
          onPress ={() => navigation.navigate('AndroidMain')}
          >

          <Text style = {styles.buttonText}> Android Main </Text>
        </Pressable>

        <Pressable
          style = {styles.toBluetooth} 
          onPress ={() => navigation.navigate('AndroidBluetooth')}
          >

          <Text style = {styles.buttonText}> Bluetooth </Text>
        </Pressable>

        <Pressable
          style = {styles.backToWelcome} 
          onPress ={() => navigation.navigate('Welcome')}
          >

          <Text style = {styles.buttonText}> Back to the Main Welcome Page </Text>
        </Pressable>

        {/* Alarm Button
        <Pressable
          style = {styles.button} 
          onPress ={() => navigation.navigate('DeveloperWelcome')}
          >

          Text for the button
          <Text style = {styles.buttonText}>Developer Access </Text>
        </Pressable> */}
      </View>

      <Modal 
        animationType="slide" 
        transparent={true} 
        visible={isModalVisible}
        onRequestClose={() => {setIsModalVisible(false)}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Please use the app in Landscape Orientation</Text>
            <Pressable style={styles.modalButton} onPress={hidePopup}>
              <Text>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
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
      borderColor: 'black',
      borderRadius: 10,
      color: 'black',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic',
      padding: 5,
      },
      
    toMain: {
      marginTop: 'auto',
      width: 175, 
      alignItems: "center",
      // padding: 10,
      paddingVertical: 25,
      borderRadius:50,
      backgroundColor: "#28BEFF",
      marginBottom: 25,
      justifyContent: 'center',
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 1,
      elevation: 3,
      left: 0,
      top: 75,
    },

    toBluetooth: {
      marginTop: 'auto',
      width: 175, 
      alignItems: "center",
      // padding: 10,
      paddingVertical: 25,
      borderRadius:50,
      backgroundColor: "#28BEFF",
      marginBottom: 25,
      justifyContent: 'center',
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 1,
      elevation: 3,
      left: -200,
      top: 50,
    },

    backToWelcome: {
      marginTop: 'auto',
      width: 'auto', 
      alignItems: "center",
      // padding: 10,
      paddingVertical: 25,
      borderRadius:50,
      backgroundColor: "#28BEFF",
      marginBottom: 25,
      justifyContent: 'center',
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 1,
      top: 20,
      elevation: 3,
      left: 250,
      },

    buttonText: {
      alignItems: 'center',
      fontSize: 18,
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    modalContent: {
      backgroundColor: 'white',
      padding: 40,
      borderRadius: 20,
      elevation: 5,
    },
  
    modalText: {
      marginBottom: 25,
      textAlign: 'center',
      fontSize: 20,
    },
  
    modalButton: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#28BEFF',
      borderRadius: 5,
    },
});