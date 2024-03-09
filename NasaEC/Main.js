import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Alert, Animated, Easing} from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component, useState } from 'react';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-web-linear-gradient';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      fadeIn: new Animated.Value(0),
      screen: Dimensions.get('window'),
      selectedOption: null,
      selectedOptionPressure: null,
      selectedOptionTemperature: null,
      tempFarenheit: 50,
      lumen: 0,
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
    this.setState(prevState => ({
      selectedOption: prevState.selectedOption === option ? null : option
    }));
  };

  handleTemperaturePress = (option) => {
    this.setState(prevState => ({
      selectedOptionTemperature: prevState.selectedOptionTemperature === option ? null : option
    }));
  };

  // handleOxygenPress = (option) => {
  //   this.setState({selectedOptionOxygen: option})
  // };

  handlePressurePress = (option) => {
    this.setState({selectedOptionPressure: option})
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
  }

  render() {
    const {navigation} = this.props;
    const {selectedOption} = this.state;
    const {selectedOptionTemperature} = this.state;
    const {selectedOptionPressure} = this.state;
    const {fadeIn} = this.state;
    
    return (
      <View style={landScapeStyles.container}>
      <LinearGradient
            colors={['#FFC107', '#FF5722', '#FF4081']}
            style={landScapeStyles.gradient} />
        <Animated.View style={[landScapeStyles.container, {opacity: fadeIn}]}>
        
            <View style = {landScapeStyles.rectangleLeft}>
              <View>
                <View style = {landScapeStyles.humiditySensor}>
                  <Text style = {commonStyles.humiditySensorFontSize}> Humidity Sensor: </Text>
                  {/* Creates a button which has a green background when pressed. */}
                  <Pressable style={[commonStyles.buttonHumidity,{ backgroundColor: selectedOption === 'onHumidity' ? 'green' : 'transparent' },]}
                      onPress={() => this.handleButtonPress('onHumidity')}>
                  <Text style = {commonStyles.optionsFontSize}> ON </Text>
                  </Pressable>

                  {/* Creates a button which has a red background when pressed. */}
                  <Pressable style={[commonStyles.buttonHumidity,{ backgroundColor: selectedOption === 'offHumidity' ? 'red' : 'transparent' },]}
                      onPress={() => this.handleButtonPress('offHumidity')}>
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

            <View style = {landScapeStyles.rectanglePressure}>
              <Text style = {commonStyles.rectangleBottomFontSize}> Pressure Sensor: </Text>

                <Pressable style = {[commonStyles.buttonPressure, {backgroundColor: selectedOptionPressure === 'onPressure' ? 'green' : 'transparent'},]}
                      onPress = {() => this.handlePressurePress('onPressure')}>
                        <Text style = {commonStyles.optionsFontSize}> ON </Text>
                </Pressable>

                <Pressable style = {[commonStyles.buttonPressure,{ backgroundColor: selectedOptionPressure === 'offPressure' ? 'red' : 'transparent' },]}
                      onPress={() => this.handlePressurePress('offPressure')}>
                        <Text style = {commonStyles.optionsFontSize}> OFF </Text>
                </Pressable>

                <Pressable 
                  style = {commonStyles.buttonBack}
                  onPress = {() => navigation.navigate('Welcome')}>
                    <Text style = {commonStyles.buttonBackText}> Back to Welcome Page </Text>
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
            <View style={landScapeStyles.rectangleRight}>
              {/* New rectangle with text "Class 1 Alarm" */}
              <View style={[landScapeStyles.rectangleAlarm, {backgroundColor: 'red'}, {marginTop: 75}]}>
                <Text style={[commonStyles.criticalParametersText, { textDecorationLine: 'underline' }, {top: 65}, {left: 100}]}>
                  CLASS 1 ALARM ACTIVE!!!
                </Text>
              </View>
            </View>
            <View style={landScapeStyles.rectangleRight}>
              {/* New rectangle with text "Class 2 Alarm" */}
              <View style={[landScapeStyles.rectangleAlarm, {backgroundColor: 'orange'}, {marginTop: 235}]}>
                <Text style={[commonStyles.criticalParametersText, { textDecorationLine: 'underline' }, {top: 65}, {left: 100}]}>
                  CLASS 2 ALARM ACTIVE!!!
                </Text>
              </View>
            </View>
            <View style={landScapeStyles.rectangleRight}>
              {/* New rectangle with text "Class 3 Alarm" */}
              <View style={[landScapeStyles.rectangleAlarm, {backgroundColor: 'yellow'}, {marginTop: 395}]}>
                <Text style={[commonStyles.criticalParametersText, { textDecorationLine: 'underline' }, {top: 65}, {left: 100}]}>
                  CLASS 3 ALARM ACTIVE!!!
                </Text>
              </View>
            </View>
            
        </Animated.View>
        </View>
    );
  }
};

const commonStyles = {
  buttonBack: {
      marginTop: 40,
      width: 150, 
      borderRadius: 25,
      backgroundColor: "#28BEFF",
      marginBottom: 25,
      justifyContent: 'center',
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 1,
      top: 15,
      right: -225,
      elevation: 3,
  },

  buttonBackText: {
    alignItems: "center",
  },

  buttonHumidity: {
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
  
  buttonPressure: {
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

  humiditySensorFontSize: {
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
    top: -170, 
    left: -145, 
    padding: 10, 
  },

  sliderLumen: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: 5, 
    left: -10, 
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

  lumenSlider: {
    width:250, 
    height: 40, 
    top: 0, 
    left: -145,
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
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'linear-gradient(to bottom right, #FFC107, #FF5722, #FF4081)',
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  rectangleLeft: {
    position: 'absolute',
    marginBottom: 10,
    marginTop: 100,
    marginHorizontal: 10,
    width: '60%',
    height: Dimensions.get('window').height,
    left: 0,
    borderWidth: 5,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  humiditySensor: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },

  rectangleTemperature: {
    position: 'absolute',
    left: 10,
    marginTop: 20,
    marginBottom: 10,
    top: 65,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.42,
    borderWidth: 5,
    borderColor: 'black',
    display: "flex",
    flexDirection: "row",
  },

  rectangleTemperatureController: {
    position: 'absolute',
    marginTop: 60,
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

  rectanglePressure: {
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

  rectangleAlarm: {
    position: 'absolute',
    left: -2.5,
    width: Dimensions.get('window').width * 0.378,
    height: Dimensions.get('window').height * 0.2,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
  },
});