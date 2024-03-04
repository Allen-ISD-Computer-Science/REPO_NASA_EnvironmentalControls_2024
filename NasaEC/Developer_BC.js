import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Image, Alert} from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component, useState } from 'react';
import Slider from '@react-native-community/slider';

export default class DeveloperBC extends Component {
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
                onPress = {() => navigation.navigate('DeveloperWelcome')}>
                  <Text style = {styles.buttonBackText}> Back to the Developer Welcome Page</Text>
              </Pressable>
    
              <View style={[styles.mapTitleBox, {top: -80}]}>
                <View style={styles.textContainer}>
                  <Text style={styles.underlinedText}> MAP </Text>
                </View>
              </View>
    
              {/* <View style={styles.alarmContainer}>
                <View style={styles.classAlarmBox}>
                  <View style={styles.textContainer}>
                    <Text style={styles.underlinedText}>Class 1 Alarm:</Text>
                  </View>
                </View> */}
    
                <View style={[styles.rectangleBox, {height: 550}, {width: 300}, {top: -160}, {left: 400}]}>
                  {/* <Text style={styles.rectangleBoxText}>You are receiving this Class 1 Alarm because of a violation of the minimum or maximum amounts that exceed safety standards, so this alarm message will be sent to the building controller. Please make sure to keep the range within the minimum and maximum amounts for everyone's safety.</Text> */}
                </View>
                <View style={[styles.rectangleBox, {height: 200}, {width: 150}, {top: -700}, {left: -450}]}>
                  <Text style={styles.rectangleBoxText}>RESTROOM</Text>
                </View>
                <View style={[styles.rectangleBox, {height: 100}, {width: 250}, {top: -900}, {left: -240}]}>
                  <Text style={styles.rectangleBoxText}>SLEEPING QUARTERS 1</Text>
                </View>
                <View style={[styles.rectangleBox, {height: 250}, {width: 120}, {top: -900}, {left: -305}]}>
                  <Text style={styles.rectangleBoxText}>SLEEPING QUARTERS 2</Text>
                </View>
                <View style={[styles.rectangleBox, {height: 100}, {width: 150}, {top: -1155}, {left: -160}]}>
                  {/* <Text style={styles.rectangleBoxText}>SLEEPING QUARTERS 1</Text> */}
                </View>
                <View style={[styles.rectangleBox, {height: 275}, {width: 60}, {top: -1162.5}, {left: -150}]}>
                  {/* <Text style={styles.rectangleBoxText}>SLEEPING QUARTERS 2</Text> */}
                </View>
                <View style={[styles.rectangleBox, {height: 100}, {width: 150}, {top: -1435}, {left: -40}]}>
                  <Text style={styles.rectangleBoxText}>DINING ROOM</Text>
                </View>
                <View style={[styles.rectangleBox, {height: 100}, {width: 150}, {top: -1430}, {left: -40}]}>
                  <Text style={styles.rectangleBoxText}>KITCHEN</Text>
                </View>
                <View style={[styles.rectangleBox, {height: 60}, {width: 375}, {top: -1378}, {left: -175}]}>
                  {/* <Text style={styles.rectangleBoxText}>SLEEPING QUARTERS 2</Text> */}
                </View>
                <View style={[styles.rectangleBox, {height: 110}, {width: 300}, {top: -1560}, {left: -350}]}>
                  <Text style={styles.rectangleBoxText}>GREENHOUSE</Text>
                </View>
              {/* </View> */}
    
              {/* <View style={styles.alarmContainer}>
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
              </View> */}
            </View>
          </View>
        );
      }
    };
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
      
        mapTitleBox: {
          width: 100,
          height: 150,
          marginTop: 20,
          alignItems: 'center',
          //top: -80,
          left: -460,
        },
      
        classAlarmBox: {
          backgroundColor: 'red',
          marginTop: 0,
          marginLeft: 0,
          left:-200,
          alignSelf: 'flex-start', // Align to the start (left)
        },
      
        rectangleBox: {
          //width: 300,
          //height: 550,
          borderWidth: 2,
          borderColor: 'black',
          marginTop: 5, // Adjust the marginTop as needed
          marginLeft: 5,
          //top: -160,
          //left: 100,
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