import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import nasalogoImg from './assets/nasaLogoImage.png';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  // This function handles the popup and sets if it should be visible or not.
  showPopup = () => {
    this.setState({ isModalVisible: true });
  };

  hidePopup = () => {
    this.setState({ isModalVisible: false });
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      // Creates a linear gradient for the background
      <LinearGradient
        colors={['#0022ff', '#6c5bff', '#9d8cfd', '#c6bcf6', '#ececec']}
        style={styles.container}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        >
        <View style={styles.logoAndTextContainer}>
          <View style={styles.imageContainer}>
            <Image source={nasalogoImg} style={styles.logoImage} />
          </View>
          <Text style={styles.titleNasa}> NASA Environmental Controls </Text>
          
          <Pressable
            style={styles.button}
            onPress={this.showPopup}
          >

            <Text style={styles.buttonText}> Head to the Arduino Data </Text>
          </Pressable>

          {/* Gives access to the developer end of the page 
          (Hide from users during later development)*/}
          <Pressable
            style={styles.button}
            onPress={() => this.props.navigation.navigate('DeveloperWelcome')}
          >
            <Text style={styles.buttonText}> Admin Access </Text>
          </Pressable>
        </View>

        {/* 
        Renders the popup that warns the user to use the app in Landscape
        Mode/Orientation
        */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => { this.setState({ isModalVisible: false }) }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}> Please use the app in Landscape Orientation </Text>
              <Pressable style={styles.modalButton} onPress={this.hidePopup}>
                <Text> OK </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <StatusBar style="auto" />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
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

  button: {
    marginTop: 'auto',
    width: 'auto',
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "transparent",
    marginBottom: 25,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    top: 0,
    boxShadow: '10px 5px 5px black',
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
