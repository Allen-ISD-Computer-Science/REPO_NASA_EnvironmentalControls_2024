import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Alert, Animated, Easing} from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component, useState } from 'react';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-web-linear-gradient';


export default class AndroidMain extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      fadeIn: new Animated.Value(0),
      screen: Dimensions.get('window'),
      selectedOption: null,
      selectedOptionPressure: null,
      selectedOptionTemperature: null,
      tempFarenheit: '50 °F',
      tempCelsius: '10 °C',
      lumen: '0 lux',
      sliding: 'Inactive',
    };
  }

  farenheitToCelsius(farenheit) {
    return ((farenheit - 32) * 5) / 9;
  }

  celsiusToFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // getOrientation() {
  //   if (this.state.screen.width > this.state.screen.height) {
  //     return 'landscape'
  //   } else {
  //     return 'portrait'
  //   }
  // }

  // getStyle() {
  //   if (this.getOrientation() === 'landscape') {
  //     return allRectangles;
  //   } else {
  //     return portraitStyles;
  //   }
  // }

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
      <View style={allRectangles.container}>
        <LinearGradient
          colors = {['#FFC107', '#FF5722', '#FF4081']}
          style = {allRectangles.gradient} />
          <Animated.View style={[allRectangles.container, {opacity: fadeIn}]}>  

        {/* Button to go back to the Welcome Page */}
        <Pressable 
            style = {commonStyles.buttonBack}
            onPress = {() => navigation.navigate('AndroidWelcome')}>
            <Text style = {commonStyles.buttonBackText}> Back to Android Welcome Page </Text>
        </Pressable>
    

            <View style = {allRectangles.leftRectangle}>
              <View>
                <View style = {humidityStyles.humiditySection}>
                  <Text style = {humidityStyles.humidityFont}> Humidity Sensor: </Text>
                  {/* Creates a button which has a green background when pressed. */}
                  <Pressable style={[humidityStyles.buttonHumidity,{ backgroundColor: selectedOption === 'onHumidity' ? 'green' : 'transparent' },]}
                      onPress={() => this.handleButtonPress('onHumidity')}>
                  <Text style = {humidityStyles.humidityOptions}> ON </Text>
                  </Pressable>

                  {/* Creates a button which has a red background when pressed. */}
                  <Pressable style={[humidityStyles.buttonHumidity,{ backgroundColor: selectedOption === 'offHumidity' ? 'red' : 'transparent' },]}
                      onPress={() => this.handleButtonPress('offHumidity')}>
                        <Text style = {humidityStyles.humidityOptions}> OFF </Text>
                  </Pressable>
                </View>
              </View>



              <View style = {temperatureStyles.temperatureSection}>
                <Text style = {temperatureStyles.temperatureFontSize}> Temperature Sensor: </Text>
                
                  <Pressable style = {[temperatureStyles.temperatureButtons, {backgroundColor: selectedOptionTemperature === 'onTemp' ? 'green' : 'transparent'},]}
                        onPress = {() => this.handleTemperaturePress('onTemp')}>
                          <Text style = {temperatureStyles.temperatureOptions}> ON </Text>
                  </Pressable>

                  <Pressable style = {[temperatureStyles.temperatureButtons,{ backgroundColor: selectedOptionTemperature === 'offTemp' ? 'red' : 'transparent' },]}
                        onPress={() => this.handleTemperaturePress('offTemp')}>
                          <Text style = {temperatureStyles.temperatureOptions}> OFF </Text>
                  </Pressable>

                  <View style = {temperatureStyles.temperatureStatus}>
                    <Text style = {temperatureStyles.temperatureStatusFonts}> Current Temperature in °F: </Text>
                    <Text style = {temperatureStyles.temperatureStatusFonts}> Current Temperature in °C: </Text>
                  </View>

                  {/* <View style = {allRectangles.rectangleTemperatureSetter}>
                    <Text style = {commonStyles.temperatureStatusFontSize}> Set Temperature in °F: </Text>

                    <View style = {allRectangles.rectangleTemperatureMin}>
                      <Text style = {commonStyles.temperatureSetterMinMaxFontSize}> Min Temperature: 65 </Text>
                    </View>

                    <View style = {allRectangles.rectangleTemperatureMax}>
                      <Text style = {commonStyles.temperatureSetterMinMaxFontSize}> Max Temperature: 80 </Text>
                    </View>
                    
                  </View> */}

                  <View style = {{zIndex: 999}}>
                    <Text style={temperatureStyles.farenheitValue}>{this.state.tempFarenheit}</Text>
                    <Text style={temperatureStyles.celsiusValue}>{this.state.tempCelsius}</Text>
                    <Text style={temperatureStyles.slidingText}>{this.state.sliding}</Text>

                    <Slider
                      style={temperatureStyles.temperatureSlider}
                      
                      minimumValue={65}
                      maximumValue={80}
                      minimumTrackTintColor='#28BEFF'
                      maximumTrackTintColor='gray'
                      thumbTintColor='#28BEFF'
                      value={this.celsiusToFarenheit(5)}
                      onValueChange={value => {this.setState({tempFarenheit: parseInt(value) + ' °F', tempCelsius: parseInt(this.farenheitToCelsius(value)) + ' °C', })}}
                      onSlidingStart={() => this.setState({sliding: 'Adjusting...'})}
                      onSlidingComplete={() => this.setState({sliding: 'Setting Temp'})}    
                    />
                  </View>
              </View>




              <View style = {luminosityStyles.luminositySection}>
                <Text style = {luminosityStyles.luminosityFont}> Luminosity Level: </Text>
                <View style= {{zIndex: 999}}>
                <Text style={luminosityStyles.luminosityLevel}>{this.state.lumen}</Text>
                {/* <Text style={commonStyles.sliderCelsius}>{this.state.tempCelsius}</Text> */}
                {/* <Text style={commonStyles.slidingText}>{this.state.sliding}</Text> */}

                <Slider
                  style={luminosityStyles.luminositySlider}
                  
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

              <View style = {pressureStyles.pressureSection}>
                <Text style = {pressureStyles.pressureTextFontSize}> Pressure Sensor: </Text>

                  <Pressable style = {[pressureStyles.pressureButtons, {backgroundColor: selectedOptionPressure === 'onPressure' ? 'green' : 'transparent'},]}
                        onPress = {() => this.handlePressurePress('onPressure')}>
                          <Text style = {pressureStyles.pressureOptions}> ON </Text>
                  </Pressable>

                  <Pressable style = {[pressureStyles.pressureButtons,{ backgroundColor: selectedOptionPressure === 'offPressure' ? 'red' : 'transparent' },]}
                        onPress={() => this.handlePressurePress('offPressure')}>
                          <Text style = {pressureStyles.pressureOptions}> OFF </Text>
                  </Pressable>
              </View>
            </View>

          <View style={allRectangles.rightRectangle}>
            <View style={parameterStyles.rectangleCriticalParameters}>
              <Text style={parameterStyles.parameterHeading}>
                Critical Parameters
              </Text>
            </View>

            <View style={allRectangles.rectangleRight}>
              {/* New rectangle with text "Class 1 Alarm" */}
              <View style={alarmStyles.classOne}>
                <Text style={alarmStyles.classFonts}>
                  CLASS 1 ALARM ACTIVE!!!
                </Text>
              </View>
            </View>

            <View style={allRectangles.rectangleRight}>
              {/* New rectangle with text "Class 2 Alarm" */}
              <View style={alarmStyles.classTwo}>
                <Text style={alarmStyles.classFonts}>
                  CLASS 2 ALARM ACTIVE!!!
                </Text>
              </View>
            </View>

            <View style={allRectangles.rectangleRight}>
              {/* New rectangle with text "Class 3 Alarm" */}
              <View style={alarmStyles.classThree}>
                <Text style={alarmStyles.classFonts}>
                  CLASS 3 ALARM ACTIVE!!!
                </Text>
              </View>
            </View>

          </View>   
        </Animated.View>
    </View>
    );
  }
};

const humidityStyles = {
  humiditySection: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  buttonHumidity: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    height: 30,
  },

  humidityFont: {
    fontSize: 20,
    marginTop: 10,
  },

  humidityOptions: {
    fontSize: 15,
    marginTop: -5,
  },
};


const temperatureStyles = {
  temperatureSection: {
    position: 'absolute',
    top: 75,
    left: -5,
    width: Dimensions.get('window').width * 0.525,
    height: Dimensions.get('window').height * 0.35,
    borderWidth: 5,
    borderColor: 'black',
    display: "flex",
    flexDirection: "row",
  },

  temperatureStatus: {
    position: 'absolute',
    marginTop: 35,
    left: 5,
  },

  temperatureButtons: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    flexDirection: "row",
    height: 30,
  },

  temperatureOptions: {
    fontSize: 15,
    marginTop: -5,
  },

  temperatureFontSize: {
    fontSize: 20,
    marginTop: 5,
  },

  temperatureStatusFonts: {
    fontSize: 15,
    marginTop: 10,
  },

  temperatureSlider: {
    zIndex: 999,
    width: 250, 
    height: 40, 
    top: 30,
    left: -200,
  },

  farenheitValue: {
    fontSize: 15, 
    fontWeight: 'bold', 
    left: -135,
    top: 45,
  },
  
  celsiusValue: {
    fontSize: 15, 
    fontWeight: 'bold', 
    left: -135,
    top: 55,
  },

  slidingText: {
    fontSize: 15, 
    fontWeight: 'bold',
    left: -300,
    top: 60,
  },

  // temperatureSetterMinMaxFontSize: {
  //   fontSize: 20,
  //   marginTop: 5,
  // },
};

const luminosityStyles = {
  luminositySection: {
    position: 'absolute',
    left: -5,
    bottom: 85,
    width: Dimensions.get('window').width * 0.525,
    height: Dimensions.get('window').height * 0.2,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
  },

  luminosityFont: {
    fontSize: 20,
    marginTop: 10,
  },

  luminosityLevel: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: 1, 
    left: -10, 
    padding: 10, 
  },

  luminositySlider: {
    width:250, 
    height: 40, 
    top: -15, 
    left: -170,
  },
};

const pressureStyles = {
  pressureSection: {
    position: 'absolute',
    left: -5,
    bottom: -7.5,
    width: Dimensions.get('window').width * 0.525,
    height: Dimensions.get('window').height * 0.25,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
  },

  pressureTextFontSize: {
    fontSize: 20,
    marginTop: 15,
  },

  pressureButtons: {
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    marginTop: 15,
    height: 30,
  },

  pressureOptions: {
    fontSize: 15,
    marginTop: -5,
  },
};

const alarmStyles = {
  classOne: {
    position: 'absolute',
    left: -5,
    width: Dimensions.get('window').width * 0.425,
    height: Dimensions.get('window').height * 0.275,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
  },

  classTwo: {
    position: 'absolute',
    left: -5,
    width: Dimensions.get('window').width * 0.425,
    height: Dimensions.get('window').height * 0.275,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 170,
  },

  classThree: {
    position: 'absolute',
    left: -5,
    width: Dimensions.get('window').width * 0.425,
    height: Dimensions.get('window').height * 0.275,
    borderColor: 'black',
    borderWidth: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 275,
  },

  classFonts: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
  },
};

const parameterStyles = {
  rectangleCriticalParameters: {
    position: 'absolute',
    left: -5,
    top: -5,
    width: Dimensions.get('window').width * 0.425,
    height: 75,
    borderWidth: 5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },  

  parameterHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline'
  },
};


const commonStyles = {
  buttonBack: {
    zIndex: 999,
    top: -130,
    right: 25,
    width: 150,
    borderRadius: 25,
    backgroundColor: "#28BEFF",
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },

  buttonBackText: {
    alignItems: "center",
  },

  
  slidingText: {
    fontSize: 15, 
    fontWeight: 'bold', 
    // top: -125, 
    // left: -170,
  },

  slider: {
    width: 250, 
    // height: 10, 
    marginTop: -75, 
    left: -100,
  },

  criticalParametersText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
};

const allRectangles = StyleSheet.create({
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

  leftRectangle: {
    position: 'absolute',
    marginBottom: 10,
    marginTop: 100,
    marginHorizontal: 10,
    width: Dimensions.get('screen').width * 0.5,
    height: Dimensions.get('window').height * 0.975,
    left: 0,
    borderWidth: 5,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rightRectangle: {
    position: 'absolute',
    top: 5,
    width: Dimensions.get('window').width * 0.425,
    height: Dimensions.get('window').height * 0.985,
    left: Dimensions.get('window').width * 0.55,
    borderColor: 'black',
    borderWidth: 5,
  },


    // rectangleTemperatureSetter: {
  //   position: 'absolute',
  //   marginTop: 100,
  //   left: 15,
  //   width: Dimensions.get('window').width * 0.45,
  //   height: Dimensions.get('window').height * 0.07,
  //   borderColor: 'black',
  //   borderWidth: 3,
  // },

  // rectangleTemperatureMax: {
  //   position: 'absolute',
  //   marginTop: 70,
  //   left: 280,
  //   width: Dimensions.get('window').width * 0.2,
  //   height: Dimensions.get('window').height * 0.05,
  //   borderColor: 'black',
  //   borderWidth: 3,
  // },

  // rectangleTemperatureMin: {
  //   position: 'absolute',
  //   marginTop: 70,
  //   width: Dimensions.get('window').width * 0.2,
  //   height: Dimensions.get('window').height * 0.05,
  //   borderColor: 'black',
  //   borderWidth: 3,
  // },
});