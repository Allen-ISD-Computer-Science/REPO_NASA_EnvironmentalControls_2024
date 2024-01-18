import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component } from 'react';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: Dimensions.get('window'),
      selectedOption: null,
    };
  }

  getOrientation() {
    if (this.state.screen.width > this.state.screen.height) {
      return 'landscape'
    } else {
      return 'portrait'
    }
  }

  getStyle() {
    if (this.getOrientation() === 'landscape') {
      return landScapeStyles;
    } else {
      return portraitStyles;
    }
  }

  onLayout() {
    // const newDimensions = Dimensions.get('window');
    // console.log('New Dimensions:', newDimensions);
    this.setState({screen: Dimensions.get('window')});
  }

  handleButtonPress = (option) => {
    this.setState({selectedOption: option})
  };

  render() {
    // console.log('Current Style:', this.getStyle().container);
    const {selectedOption} = this.state;
    const styles = this.getStyle();

    return (
      <View style={landScapeStyles.container} onLayout = {this.onLayout.bind(this)}>
        <View style={landScapeStyles.rectangleLeft_Portrait}>
          <View>
          <View style={landScapeStyles.smokeSensor}>
          <Text> Smoke Sensor </Text>
          {/* Creates a button which has a green background when pressed. */}
          <TouchableOpacity style={[styles.button,{ backgroundColor: selectedOption === 'yes' ? 'green' : 'transparent' },]}
              onPress={() => this.handleButtonPress('yes')}>
                <Text>Yes</Text>
          </TouchableOpacity>

          {/* Creates a button which has a red background when pressed. */}
          <TouchableOpacity style={[styles.button,{ backgroundColor: selectedOption === 'no' ? 'red' : 'transparent' },]}
              onPress={() => this.handleButtonPress('no')}>
                <Text>No</Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={landScapeStyles.rectangleLeftTemperature_Portrait}>

          </View>

        </View>
      </View>
    );
  }
};

const commonStyles = {
  button: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
  },
};

const landScapeStyles = StyleSheet.create({
  ...commonStyles,

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  rectangleLeft_Portrait: {
    position: 'absolute',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    width: 700,
    left: 0,
    height: Dimensions.get('window').height-20,
    borderWidth: 5,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  rectangleLeftText_Portrait: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
  },

  smokeSensor: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  rectangleLeftTemperature_Portrait: {
    position: 'absolute',
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 20,
    width: 700,
    left: 0,
    height: Dimensions.get('window').height-100,
    borderWidth: 5,
    borderColor: 'black',
    },
});

const portraitStyles = StyleSheet.create({
  ...commonStyles,

  container: {
    flex: 1,
    backgroundColor: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  rectangleLeft_Landscape: {
    position: 'absolute',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    width: 700,
    left: 0,
    height: Dimensions.get('window').height-20,
    borderWidth: 5,
    borderColor: 'black',
  }
});