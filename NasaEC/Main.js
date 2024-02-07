import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, } from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component, useState } from 'react';
import Slider from '@react-native-community/slider';



export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      screen: Dimensions.get('window'),
      selectedOption: null,
      selectedOptionDust: null,
      selectedOptionTemperature: null,
      selectedOptionOxygen: null,
      tempFarenheit: 50,
      sliding: 'Inactive',
    };
  }

  farenheitToCelsius(farenheit) {
    return ((farenheit - 32) * 5) / 9;
  }

  celsiusToFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
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

  handleTemperaturePress = (option) => {
    this.setState({selectedOptionTemperature: option})
  };

  handleOxygenPress = (option) => {
    this.setState({selectedOptionOxygen: option})
  };

  handleDustPress = (option) => {
    this.setState({selectedOptionDust: option})
  };

  render() {
    // console.log('Current Style:', this.getStyle().container);
    const {selectedOption} = this.state;
    const {selectedOptionDust} = this.state;
    const {selectedOptionOxygen} = this.state;
    const {selectedOptionTemperature} = this.state;
    
    return (
      <View style={landScapeStyles.container}>
          <View style = {landScapeStyles.rectangleLeft}>
            <View>
              
              <View style = {landScapeStyles.smokeSensor}>
                <Text style = {commonStyles.smokeSensorFontSize}> Smoke Sensor: </Text>
                {/* Creates a button which has a green background when pressed. */}
                <Pressable style={[commonStyles.buttonSmoke,{ backgroundColor: selectedOption === 'on' ? 'green' : 'transparent' },]}
                    onPress={() => this.handleButtonPress('on')}>
                <Text style = {commonStyles.optionsFontSize}> ON </Text>
                </Pressable>

                {/* Creates a button which has a red background when pressed. */}
                <Pressable style={[commonStyles.buttonSmoke,{ backgroundColor: selectedOption === 'off' ? 'red' : 'transparent' },]}
                    onPress={() => this.handleButtonPress('off')}>
                      <Text style = {commonStyles.optionsFontSize}> OFF </Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style= {{zIndex: 999}}>
            <Text style={commonStyles.sliderFarenheit}>{this.state.tempFarenheit}</Text>
            <Text style={commonStyles.sliderCelsius}>{this.state.tempCelsius}</Text>
            <Text style={commonStyles.slidingText}>{this.state.sliding}</Text>

            <Slider
              style={commonStyles.slider}
              
              minimumValue={65}
              maximumValue={80}
              minimumTrackTintColor='#28BEFF'
              maximumTrackTintColor='gray'
              thumbTintColor='#28BEFF'
              value={this.celsiusToFarenheit(5)}
              onValueChange={value => {this.setState({tempFarenheit: parseInt(value) + ' F', tempCelsius: parseInt(this.farenheitToCelsius(value)) + ' C', })}}
              onSlidingStart={() => this.setState({sliding: 'Adjusting...'})}
              onSlidingComplete={() => this.setState({sliding: 'Setting Temp'})}    
            />
          </View>

          <View style = {landScapeStyles.rectangleTemperature}>
            <Text style = {commonStyles.allTemperatureFontSize}> Temperature Sensor: </Text>
            
              <Pressable style = {[commonStyles.buttonTemperature, {backgroundColor: selectedOptionTemperature === 'onTemp' ? 'green' : 'transparent'},]}
                    onPress = {() => this.handleTemperaturePress('onTemp')}>
                      <Text style = {commonStyles.optionsFontSize}> ON </Text>
              </Pressable>

              <Pressable style = {[commonStyles.buttonTemperature,{ backgroundColor: selectedOptionTemperature === 'offTemp' ? 'red' : 'transparent' },]}
                    onPress={() => this.handleTemperaturePress('offTemp')}>
                      <Text style = {commonStyles.optionsFontSize}> OFF </Text>
              </Pressable>

              <View style = {landScapeStyles.rectangleTemperatureController}>
                <Text style = {commonStyles.allTemperatureFontSize}> Current Temperature in °F: </Text>
                <Text style = {commonStyles.allTemperatureFontSize}> Current Temperature in °C: </Text>
              </View>

              <View style = {landScapeStyles.rectangleTemperatureSetter}>
                <Text style = {commonStyles.allTemperatureFontSize}> Set Temperature in °F: </Text>

                <View style = {landScapeStyles.rectangleTemperatureMin}>
                  <Text style = {commonStyles.temperatureSetterMinMaxFontSize}> Min Temperature: 65 </Text>
                </View>

                <View style = {landScapeStyles.rectangleTemperatureMax}>
                  <Text style = {commonStyles.temperatureSetterMinMaxFontSize}> Max Temperature: 80 </Text>
                </View>
                
              </View>
          </View>

          <View style = {landScapeStyles.rectangleOxygen}>
            <Text style = {commonStyles.rectangleBottomFontSize}> Oxygen Sensor: </Text>

              <Pressable style = {[commonStyles.buttonOxygen, {backgroundColor: selectedOptionOxygen === 'onOxygen' ? 'green' : 'transparent'},]}
                    onPress = {() => this.handleOxygenPress('onOxygen')}>
                      <Text style = {commonStyles.optionsFontSize}> ON </Text>
              </Pressable>

              <Pressable style = {[commonStyles.buttonOxygen,{ backgroundColor: selectedOptionOxygen === 'offOxygen' ? 'red' : 'transparent' },]}
                    onPress={() => this.handleOxygenPress('offOxygen')}>
                      <Text style = {commonStyles.optionsFontSize}> OFF </Text>
              </Pressable>
          </View>

          <View style = {landScapeStyles.rectangleDust}>
            <Text style = {commonStyles.rectangleBottomFontSize}> Dust Sensor: </Text>

              <Pressable style = {[commonStyles.buttonDust, {backgroundColor: selectedOptionDust === 'onDust' ? 'green' : 'transparent'},]}
                    onPress = {() => this.handleDustPress('onDust')}>
                      <Text style = {commonStyles.optionsFontSize}> ON </Text>
              </Pressable>

              <Pressable style = {[commonStyles.buttonDust,{ backgroundColor: selectedOptionDust === 'offDust' ? 'red' : 'transparent' },]}
                    onPress={() => this.handleDustPress('offDust')}>
                      <Text style = {commonStyles.optionsFontSize}> OFF </Text>
              </Pressable>
          </View>

          <View style={landScapeStyles.rectangleRight}>
            {/* New rectangle with text "Critical Parameters" */}
            <View style={landScapeStyles.rectangleCriticalParameters}>
              <Text style={[commonStyles.criticalParametersText, { textDecorationLine: 'underline' }]}>
                Critical Parameters
              </Text>
            </View>
          </View>
      </View>
    );
  }
};

const commonStyles = {
  buttonSmoke: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
  },

  buttonTemperature: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    flexDirection: "row",
    height: 40,
  },
  
  buttonDust: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    height: 40,
  },

  buttonOxygen: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    height: 40,
  },

  optionsFontSize: {
    fontSize: 20,
  },

  smokeSensorFontSize: {
    fontSize: 25,
    marginTop: 10,
  },

  allTemperatureFontSize: {
    fontSize: 25,
    marginTop: 15,
  },

  temperatureSetterMinMaxFontSize: {
    fontSize: 20,
    marginTop: 5,
  },

  rectangleBottomFontSize: {
    fontSize: 20,
    marginTop: 15,
  },

  sliderFarenheit: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: -150, 
    left: -145, 
    padding: 10, 
  },

  sliderCelsius: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: -150, 
    left: -145, 
    padding: 10, 
  },

  slidingText: {
    fontSize: 15, 
    fontWeight: 'bold', 
    top: -125, 
    left: -170,
  },

  slider: {
    width:250, 
    height: 40, 
    top: -135, 
    left: -165,
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
    marginTop: 5,
    marginHorizontal: 10,
    width: Dimensions.get('window').width * 0.6,
    left: 0,
    height: Dimensions.get('window').height - 20,
    borderWidth: 5,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  smokeSensor: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  rectangleTemperature: {
    position: 'absolute',
    left: 10,
    marginTop: 20,
    marginBottom: 10,
    top: 65,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.5,
    borderWidth: 5,
    borderColor: 'black',
    display: "flex",
    flexDirection: "row",
  },

  rectangleTemperatureController: {
    position: 'absolute',
    marginTop: 80,
    left: 5,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.32,
    borderColor: 'black',
    borderWidth: 5,
  },

  rectangleTemperatureSetter: {
    position: 'absolute',
    marginTop: 200,
    left: 15,
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.07,
    borderColor: 'black',
    borderWidth: 3,
  },

  rectangleTemperatureMax: {
    position: 'absolute',
    marginTop: 70,
    left: 280,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').height * 0.05,
    borderColor: 'black',
    borderWidth: 3,
  },

  rectangleTemperatureMin: {
    position: 'absolute',
    marginTop: 70,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').height * 0.05,
    borderColor: 'black',
    borderWidth: 3,
  },

  rectangleOxygen: {
    position: 'absolute',
    left: 10,
    marginTop: 325,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.2,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
  },

  rectangleDust: {
    position: 'absolute',
    left: 10,
    marginTop: 635,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.195,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
  },

  rectangleRight: {
    position: 'absolute',
    marginTop: -5,
    width: Dimensions.get('window').width * 0.38,
    height: Dimensions.get('window').height - 20,
    right: 10,
    left: Dimensions.get('window').width * 0.6 + 20,
    borderColor: 'black',
    borderWidth: 5,
  },

  rectangleCriticalParameters: {
    position: 'absolute',
    left: -5,
    top: -5,
    width: Dimensions.get('window').width * 0.36,
    height: 50,
    // borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightblue',
  },
});