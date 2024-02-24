import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Alert} from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component, useState } from 'react';
import Slider from '@react-native-community/slider';

export default class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: Dimensions.get('window'),
    };
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.outsideBox}>

        <Pressable 
            style = {styles.buttonBack}
            onPress = {() => navigation.navigate('Welcome')}>
              <Text style = {styles.buttonBackText}> Back to the Welcome Page</Text>
          </Pressable>

          <View style={styles.alarmTitleBox}>
            <View style={styles.textContainer}>
              <Text style={styles.underlinedText}> Alarms </Text>
            </View>
          </View>

          <View style={styles.alarmContainer}>
            <View style={styles.classAlarmBox}>
              <View style={styles.textContainer}>
                <Text style={styles.underlinedText}>Class 1 Alarm:</Text>
              </View>
            </View>

            <View style={styles.rectangleBox}>
              <Text style={styles.rectangleBoxText}>You are receiving this Class 1 Alarm because of a violation of the minimum or maximum amounts that exceed safety standards, so this alarm message will be sent to the building controller. Please make sure to keep the range within the minimum and maximum amounts for everyone's safety.</Text>
            </View>
          </View>

          <View style={styles.alarmContainer}>
            <View style={styles.classAlarmBox}>
              <View style={styles.textContainer}>
                <Text style={styles.underlinedText}>Class 2 Alarm:</Text>
              </View>
            </View>

            <View style={styles.rectangleBox}>
              <Text style={styles.rectangleBoxText}>You are receiving this Class 2 Alarm because you are receiving a message from the Building Controller of a class 1 or class 2 alarm. Please read the message that was sent by the Building Controller and execute its instructions as needed.</Text>
            </View>
          </View>

          <View style={styles.alarmContainer}>
            <View style={styles.classAlarmBox}>
              <View style={styles.textContainer}>
                <Text style={styles.underlinedText}>Class 3 Alarm:</Text>
              </View>
            </View>

            <View style={styles.rectangleBox}>
              <Text style={styles.rectangleBoxText}>You are receiving this Class 3 Alarm because you have gone past the critical parameters and it is currently out of bounds. Please go and put the entry within the critical parameters that won't make it out of bounds (For example, the Temperature cannot go below 65 Degrees F or above 80 Degrees F).</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};


// const OutsideBox = () => {
//   return (
//     <View style={styles.outsideBox}>
//       <AlarmTitleBox />
//       <View style={styles.alarmContainer}>
//         <Class1AlarmBox />
//         <RectangleAlarmBox1 />
//       </View>
//       <View style={styles.alarmContainer}>
//         <Class2AlarmBox />
//         <RectangleAlarmBox2 />
//       </View>
//       <View style={styles.alarmContainer}>
//         <Class3AlarmBox />
//         <RectangleAlarmBox3 />
//       </View>
//       {/* Other content of the outside box */}
//     </View>
//   );
// };

// const AlarmTitleBox = () => {
//   return (
//     <View style={styles.alarmTitleBox}>
//       <View style={styles.textContainer}>
//         <Text style={styles.underlinedText}> Alarms </Text>
//       </View>
//     </View>
//   );
// };

// const Class1AlarmBox = () => {
//   return (
//     <View style={styles.classAlarmBox}>
//       <View style={styles.textContainer}>
//         <Text style={styles.underlinedText}>Class 1 Alarm:</Text>
//       </View>
//     </View>
//   );
// };

// const Class2AlarmBox = () => {
//   return (
//     <View style={styles.classAlarmBox}>
//       <View style={styles.textContainer}>
//         <Text style={styles.underlinedText}>Class 2 Alarm:</Text>
//       </View>
//     </View>
//   );
// };

// const Class3AlarmBox = () => {
//   return (
//     <View style={styles.classAlarmBox}>
//       <View style={styles.textContainer}>
//         <Text style={styles.underlinedText}>Class 3 Alarm:</Text>
//       </View>
//     </View>
//   );
// };

// const RectangleAlarmBox1 = () => {
//   return (
//     <View style={styles.rectangleBox}>
//       {/* Content of the rectangle box for Class1AlarmBox */}
//       <Text style={styles.rectangleBoxText}>You are receiving this Class 1 Alarm because of a violation of the minimum or maximum amounts that exceed 
//       saftey standards, so this alarm message will be sent to the building controller. Please make sure to keep the range within the minimum and 
//       maximum amounts for everyone's own safety.
//       </Text>
//     </View>
//   );
// };

// const RectangleAlarmBox2 = () => {
//   return (
//     <View style={styles.rectangleBox}>
//       {/* Content of the rectangle box for Class2AlarmBox */}
//       <Text style={styles.rectangleBoxText}>You are receiving this Class 2 Alarm because you are receiving a message from the Building Controller of a class 1 or class 2 alarm.
//       Please read the message that was send by the Building Controller and execute its instructions as needed. 
//       </Text>
//     </View>
//   );
// };

// const RectangleAlarmBox3 = () => {
//   return (
//     <View style={styles.rectangleBox}>
//       {/* Content of the rectangle box for Class3AlarmBox */}
//       <Text style={styles.rectangleBoxText}>You are receiving this Class 3 Alarm because you have gone past the critical parameters and it is currently out of bounds.
//         Please go and put the entry within the critical parameters that won't make it out of bounds (For example, the Temperature cannot go below 65 Degrees F or above
//         80 Degrees F).
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <OutsideBox />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  // The outsideBox is the outer border of this Alarm Page
  outsideBox: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'lightgray',
    borderWidth: 20,
    borderColor: 'black',
    justifyContent: 'flex-start', // Align items from the start (top)
    alignItems: 'center',
  },

  alarmContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  alarmTitleBox: {
    width: 100,
    height: 150,
    marginTop: 20,
  },

  classAlarmBox: {
    backgroundColor: 'red',
    marginTop: 10,
    marginLeft: 5,
    alignSelf: 'flex-start', // Align to the start (left)
  },

  rectangleBox: {
    width: 1100,
    height: 105,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 5, // Adjust the marginTop as needed
    marginLeft: 5,
  },

  rectangleBoxText: {
    fontSize: 16, // Adjust the font size as needed
    fontFamily: 'Courier New', 
  },

  textContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },

  underlinedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  buttonBack: {
    marginTop: 0,
    width: 250, 
    borderRadius: 25,
    backgroundColor: "#28BEFF",
    marginBottom: 25,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    top: 15,
    right: -425,
    elevation: 3,
    padding: 20,
},

  buttonBackText: {
    alignItems: "center",
    fontSize: "1em",
  },
});

// export default App;

