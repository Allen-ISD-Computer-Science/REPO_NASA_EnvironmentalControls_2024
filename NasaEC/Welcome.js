import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Alert} from 'react-native';
import nasalogoImg from './assets/nasaLogoImage.png';
import React, { Component, useState } from 'react';

export default function Welcome({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showPopup = () => {
    setIsModalVisible(true);
  };

  const hidePopup = () => {
    setIsModalVisible(false);
    navigation.navigate('Main');
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

        {/* Welcome Button */}
        <Pressable
          style = {styles.button} 
          onPress= {() => {
            // console.log('Button Pressed');
            showPopup();
          }}
          >

          {/* Text for the button */}
          <Text> Welcome </Text>
        </Pressable>

        {/* Alarm Button */}
        <Pressable
          style = {styles.button} 
          onPress ={() => navigation.navigate('Alarm')}
          >

          {/* Text for the button */}
          <Text> Alarm Page </Text>
        </Pressable>
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