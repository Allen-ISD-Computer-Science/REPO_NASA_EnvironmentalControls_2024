import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Alert, Animated, Easing} from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component, useState } from 'react';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-web-linear-gradient';

// All of the above imports the needed libraries for our app to function.

import { GeneralStyleElements, rectangleLeftElements, humidityElements, temperatureElements, luminosityElements, 
  pressureElements, rectangleRightElements, navigationButtons, alarmStyles} from './Styles/Consumer/Main/MainStyles';
// This part of the import imports all of the styles from a common folder 
// which contains all of the styles for easy organization and easy debugging.

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // All of these are the initial values for all of the variables.
      fadeIn: new Animated.Value(0),
      blinkAnim: new Animated.Value(0),
      blinkAnim2: new Animated.Value(0), 
      blinkAnim3: new Animated.Value(0),
      screen: Dimensions.get('window'),
      selectedOption: null,
      selectedOptionPressure: null,
      selectedOptionTemperature: null,
      tempFarenheit: 50,
      lumen: '0 lux',
      sliding: 'Inactive',
    };
  }

  // Functions to convert temperature from Celcius to Farenheit that are going
  // to used to give the user proper and accurate readings from the Arduino. (Theoretical)
  farenheitToCelsius(farenheit) {
    return ((farenheit - 32) * 5) / 9;
  }

  celsiusToFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // All of the following handle the actions that turn the buttons ON/OFF.
  // These buttons enable the user to only display the data for specific sensors.
  handleButtonPress = (option) => {
    this.setState(prevState => ({
      selectedOption: prevState.selectedOption === option ? null : option
    }));
  };

  handleTemperaturePress = (option) => {
    this.setState(prevState => ({
      selectedOptionTemperature: prevState.selectedOptionTemperature === option ? null : option
    }));
  };

  handlePressurePress = (option) => {
    this.setState(prevState => ({
      selectedOptionPressure: prevState.selectedOptionPressure === option ? null : option
    }));
  };

  componentDidMount() {
    Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
     //This duration interval is supposed to be for the text that says "CLASS 1 ALARM"
    //It's at a fast duration interval because it is the highest class alarm
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.blinkAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.blinkAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ])
    ).start();
    //This duration interval is supposed to be for the text that says "CLASS 2 ALARM"
    //It's at a somewhat slow duration interval because it is the middle class alarm
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.blinkAnim2, {
          toValue: 1,
          duration: 500, 
          useNativeDriver: true,
        }),
        Animated.timing(this.state.blinkAnim2, {
          toValue: 0,
          duration: 500, 
          useNativeDriver: true,
        }),
      ])
    ).start();
    //This duration interval is supposed to be for the text that says "CLASS 3 ALARM"
    //It's at a slower duration interval because it is the lowest class alarm
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.blinkAnim3, {
          toValue: 1,
          duration: 750, 
          useNativeDriver: true,
        }),
        Animated.timing(this.state.blinkAnim3, {
          toValue: 0,
          duration: 750, 
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  render() {
    const {navigation} = this.props;
    const {selectedOption} = this.state;
    const {selectedOptionTemperature} = this.state;
    const {selectedOptionPressure} = this.state;
    const {fadeIn} = this.state;
    
    return (
      <View style={GeneralStyleElements.container}>
           <LinearGradient
            colors={['#2E3192', '#1BFFFF']}
            style={GeneralStyleElements.gradient} 
            start={{x: 0, y: 0}} 
            end={{x: 0.5, y: 0.5}}
            />
        <Animated.View style={[GeneralStyleElements.container, {opacity: fadeIn}]}>
        
            <View style = {rectangleLeftElements.rectangleLeft}>
              <View>
                <View style = {humidityElements.humiditySection}>
                  <Text style = {humidityElements.humidityText}> Humidity Sensor: </Text>
                  {/* Creates a button which has a green background when pressed. */}
                  <Pressable style={[humidityElements.humidityButtons,{ backgroundColor: selectedOption === 'onHumidity' ? 'green' : 'transparent' },]}
                      onPress={() => this.handleButtonPress('onHumidity')}>
                  <Text style = {humidityElements.humidityOptions}> ON </Text>
                  </Pressable>

                  {/* Creates a button which has a red background when pressed. */}
                  <Pressable style={[humidityElements.humidityButtons,{ backgroundColor: selectedOption === 'offHumidity' ? 'red' : 'transparent' },]}
                      onPress={() => this.handleButtonPress('offHumidity')}>
                        <Text style = {humidityElements.humidityOptions}> OFF </Text>
                  </Pressable>
                </View>
              </View>
            </View>

            {/* Controls the sliders that handle the part about */}
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

            {/* The part below displays all of the data (theoretical) form the Arduino*/}
            <View style = {temperatureElements.temperatureSection}>
              <Text style = {temperatureElements.temperatureSensorText}> Temperature Sensor: </Text>
              
                <Pressable style = {[temperatureElements.temperatureButtons, {backgroundColor: selectedOptionTemperature === 'onTemp' ? 'green' : 'transparent'},]}
                      onPress = {() => this.handleTemperaturePress('onTemp')}>
                        <Text style = {temperatureElements.temperatureOptions}> ON </Text>
                </Pressable>

                <Pressable style = {[temperatureElements.temperatureButtons,{ backgroundColor: selectedOptionTemperature === 'offTemp' ? 'red' : 'transparent' },]}
                      onPress={() => this.handleTemperaturePress('offTemp')}>
                        <Text style = {temperatureElements.temperatureOptions}> OFF </Text>
                </Pressable>

                <View style = {temperatureElements.temperatureControllerSection}>
                  <Text style = {temperatureElements.temperatureStatusFarenheit}> Current Temperature in °F: </Text>
                  <Text style = {temperatureElements.temperatureStatusCelsius}> Current Temperature in °C: </Text>
                </View>

                <View style = {temperatureElements.tempertaureSetterSection}>
                  <Text style = {temperatureElements.temperatureSetterText}> Set Temperature in °F: </Text>

                  <View style = {temperatureElements.temperatureMinimumSection}>
                    <Text style = {temperatureElements.temperatureMinimum}> Min Temperature: 65 </Text>
                  </View>

                  <View style = {temperatureElements.temperatureMaximumSection}>
                    <Text style = {temperatureElements.temperatureMaximum}> Max Temperature: 80 </Text>
                  </View>
                  
                </View>
            </View>

            <View style = {landScapeStyles.rectangleLuminosity}>
              <Text style = {commonStyles.rectangleBottomFontSize}> Luminosity Level: </Text>
              <View style= {{zIndex: 999}}>
              <Text style={commonStyles.sliderLumen}>{this.state.lumen}</Text>
              {/* <Text style={commonStyles.sliderCelsius}>{this.state.tempCelsius}</Text> */}
              {/* <Text style={commonStyles.slidingText}>{this.state.sliding}</Text> */}

              <Slider
                style={commonStyles.lumenSlider}
                
                minimumValue={0}
                maximumValue={1700}
                minimumTrackTintColor='#28BEFF'
                maximumTrackTintColor='gray'
                thumbTintColor='#28BEFF'
                //value={this.celsiusToFarenheit(5)}
                onValueChange={value => {this.setState({lumen: parseInt(value) + ' lux'})}}
                // onSlidingStart={() => this.setState({sliding: 'Adjusting...'})}
                // onSlidingComplete={() => this.setState({sliding: 'Setting Luminosity'})}    
              />
              </View>
            </View>

            <View style = {pressureElements.pressureSection}>
              <Text style = {pressureElements.pressureText}> Pressure Sensor: </Text>

                <Pressable style = {[pressureElements.pressureButtons, {backgroundColor: selectedOptionPressure === 'onPressure' ? 'green' : 'transparent'},]}
                      onPress = {() => this.handlePressurePress('onPressure')}>
                        <Text style = {pressureElements.pressureOptions}> ON </Text>
                </Pressable>

                <Pressable style = {[pressureElements.pressureButtons,{ backgroundColor: selectedOptionPressure === 'offPressure' ? 'red' : 'transparent' },]}
                      onPress={() => this.handlePressurePress('offPressure')}>
                        <Text style = {pressureElements.pressureOptions}> OFF </Text>
                </Pressable>

                <Pressable 
                  style = {navigationButtons.returnButton}
                  onPress = {() => navigation.navigate('Welcome')}>
                    <Text style = {navigationButtons.returnButtonText}> Back to Welcome Page </Text>
                </Pressable>
            </View>

            {/* This part of the */}
            <View style={rectangleRightElements.rectangleRight}>
              <View style={rectangleRightElements.criticalParametersSection}>
                <Text style={rectangleRightElements.criticalParametersText}> 
                  Critical Parameters 
                </Text>
              </View>

              <View style={alarmStyles.classOneSection}>
                <Animated.Text style={[alarmStyles.classOneText, {opacity: this.state.blinkAnim}]}> 
                  Class One Alarm 
                </Animated.Text>
              </View>

              <View style={alarmStyles.classTwoSection}>
                <Animated.Text style={[alarmStyles.classTwoText, {opacity: this.state.blinkAnim2}]}>
                   Class Two Alarm 
                </Animated.Text>
              </View>

              <View style={alarmStyles.classThreeSection}>
                <Animated.Text style={[alarmStyles.classThreeText, {opacity: this.state.blinkAnim3}]}> 
                  Class Three Alarm 
                </Animated.Text>
              </View>
            </View>
            
        </Animated.View>
        </View>
    );
  }
};

const commonStyles = {
  rectangleBottomFontSize: {
    fontSize: 30,
    marginTop: 15,
    color: 'white',
  },

  sliderFarenheit: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: -170, 
    left: -145, 
    padding: 10, 
  },

  sliderLumen: {
    fontSize: 25, 
    fontWeight: 'bold', 
    top: 7.5, 
    left: -5, 
    padding: 10, 
  },

  sliderCelsius: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: -165, 
    left: -145, 
    padding: 10, 
  },

  slidingText: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: -125, 
    left: -170,
    color: 'white',
  },

  slider: {
    width:250, 
    height: 40, 
    top: -135, 
    left: -165,
    color: 'white',
  },

  lumenSlider: {
    width: 250, 
    height: 40, 
    top: 0, 
    left: -200,
  },
};



const landScapeStyles = StyleSheet.create({
  ...commonStyles,
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  rectangleLuminosity: {
    position: 'absolute',
    left: 10,
    marginTop: 255,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.275,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
  },
});