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
    // const styles = this.getStyle();

    return (
      <View style={landScapeStyles.container}>
        {/* New rectangle with text "Critical Parameters" */}
        <View style={landScapeStyles.rectangleCriticalParameters}>
        <Text style={[commonStyles.criticalParametersText, { textDecorationLine: 'underline' }]}>
          Critical Parameters
          </Text>
        </View>
          <View style = {landScapeStyles.rectangleLeft}>
            <View>
              <View style = {landScapeStyles.smokeSensor}>
                <Text style = {commonStyles.smokeSensorFontSize}> Smoke Sensor: </Text>
                {/* Creates a button which has a green background when pressed. */}
                <TouchableOpacity style={[commonStyles.button,{ backgroundColor: selectedOption === 'on' ? 'green' : 'transparent' },]}
                    onPress={() => this.handleButtonPress('on')}>
                <Text style = {commonStyles.optionsFontSize}> ON </Text>
                </TouchableOpacity>

                {/* Creates a button which has a red background when pressed. */}
                <TouchableOpacity style={[commonStyles.button,{ backgroundColor: selectedOption === 'off' ? 'red' : 'transparent' },]}
                    onPress={() => this.handleButtonPress('off')}>
                      <Text style = {commonStyles.optionsFontSize}> OFF </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

            <View style = {landScapeStyles.rectangleTemperature}>
                  <Text style = {commonStyles.temperatureFontSize}> Temperature Sensor: </Text>

                  <TouchableOpacity style = {[commonStyles.button, {backgroundColor: selectedOption === 'onTemp' ? 'green' : 'transparent'}, {width: 100},]}
                        onPress = {() => this.handleButtonPress('onTemp')}>
                          <Text style = {commonStyles.optionsFontSize}> ON </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[commonStyles.button,{ backgroundColor: selectedOption === 'offTemp' ? 'red' : 'transparent' },]}
                        onPress={() => this.handleButtonPress('offTemp')}>
                          <Text style = {commonStyles.optionsFontSize}> OFF </Text>
                  </TouchableOpacity>
            </View>

        <View style={landScapeStyles.rectangleRight}>
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
    marginTop: 15,
  },

  optionsFontSize: {
    fontSize: 20,
  },

  smokeSensorFontSize: {
    fontSize: 25,
    marginTop: 15,
  },

  temperatureFontSize: {
    fontSize: 25,
    marginTop: 15,
    flexDirection: "row",
    display: "flex",
  },
  criticalParametersText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
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

  rectangleLeft: {
    position: 'absolute',
    marginBottom: 10,
    marginHorizontal: 10,
    width: Dimensions.get('window').width * 0.6,
    left: 0,
    height: Dimensions.get('window').height - 20,
    borderWidth: 5,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  rectangleLeftText: {
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

  rectangleTemperature: {
    position: 'absolute',
    left: 10,
    marginTop: 25,
    top: 70,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height / 2,
    borderWidth: 5,
    borderColor: 'black',
  },

  temperature: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  rectangleRight: {
    position: 'absolute',
    marginTop: -5,
    width: Dimensions.get('window').width * 0.36,
    height: Dimensions.get('window').height - 20,
    right: 10,
    left: Dimensions.get('window').width * 0.6 + 20,
    borderColor: 'black',
    borderWidth: 5,
  },

  rectangleTemperatureController: {
    position: 'absolute',
    width: Dimensions.get('window').width * 0.6,
    borderColor: 'black',
    borderWidth: 5,
  },
  rectangleCriticalParameters: {
    position: 'absolute',
    top: 10,
    left: Dimensions.get('window').width * 0.6 + 20,
    width: Dimensions.get('window').width * 0.36,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});