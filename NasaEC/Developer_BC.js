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
    
                <View style={[styles.rectangleBox, {height: 600}, {width: 300}, {top: -140}, {left: 200}]}>
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
                </View>
                <View style={[styles.rectangleBox, {height: 275}, {width: 60}, {top: -1162.5}, {left: -150}]}>
                </View>
                <View style={[styles.rectangleBox, {height: 100}, {width: 150}, {top: -1435}, {left: -40}]}>
                  <Text style={styles.rectangleBoxText}>DINING ROOM</Text>
                </View>
                <View style={[styles.rectangleBox, {height: 100}, {width: 150}, {top: -1430}, {left: -40}]}>
                  <Text style={styles.rectangleBoxText}>KITCHEN</Text>
                </View>
                <View style={[styles.rectangleBox, {height: 60}, {width: 375}, {top: -1378}, {left: -175}]}>
                </View>
                <View style={[styles.rectangleBox, {height: 110}, {width: 300}, {top: -1560}, {left: -350}]}>
                  <Text style={styles.rectangleBoxText}>GREENHOUSE</Text>
                </View>

              {/* restroom button */}
              <Pressable
                style = {[styles.buttonToRoom, {top: -1970}, {left: -450}]}>
              </Pressable>
              {/* sleeping quarters 1 button */}
              <Pressable
                style = {[styles.buttonToRoom, {top: -2050}, {left: -300}]}>
              </Pressable>
              {/* sleeping quarters 2 button */}
              <Pressable
                style = {[styles.buttonToRoom, {top: -1980}, {left: -300}]}>
              </Pressable>
              {/* garden button */}
              <Pressable
                style = {[styles.buttonToRoom, {top: -1780}, {left: -450}]}>
              </Pressable>
              {/* dining room button */}
              <Pressable
                style = {[styles.buttonToRoom, {top: -1990}, {left: -60}]}>
              </Pressable>
              <Pressable
                style = {[styles.buttonToRoom, {top: -1930}, {left: -60}]}>
              </Pressable>
                
              <View style={[styles.rectangleBox, {height: 550}, {width: 250}, {top: -2362.5}, {left: 200}]}>
                </View>
              
              {/* sleeping quarters 1 status */}
              <View style={[styles.rectangleBox, {height: 40}, {width: 200}, {top: -2860}, {left: 200}, {backgroundColor: "#40be25"}]}>
                  <Text style={styles.alarmBoxText}>NO ALARMS</Text>
                </View>
              <View style={[styles.rectangleBox, {height: 20}, {width: 180}, {top: -2925}, {left: 190}, {marginBottom: 10}]}>
                  <Text style={styles.normalText}>SQ1 ROOM CONTROLLER:</Text>
                </View>

              {/* sleeping quarters 2 status */}
              <View style={[styles.rectangleBox, {height: 40}, {width: 200}, {top: -2860}, {left: 200}, {backgroundColor: "#40be25"}]}>
                <Text style={styles.alarmBoxText}>NO ALARMS</Text>
              </View>
              <View style={[styles.rectangleBox, {height: 20}, {width: 180}, {top: -2925}, {left: 190}, {marginBottom: 10}]}>
                <Text style={styles.normalText}>SQ2 ROOM CONTROLLER:</Text>
              </View>
              
              {/* dining room status */}
              <View style={[styles.rectangleBox, {height: 40}, {width: 200}, {top: -2860}, {left: 200}, {backgroundColor: "#40be25"}]}>
                <Text style={styles.alarmBoxText}>NO ALARMS</Text>
              </View>
              <View style={[styles.rectangleBox, {height: 20}, {width: 180}, {top: -2925}, {left: 190}, {marginBottom: 10}]}>
                <Text style={styles.normalText}>DR CONTROLLER:</Text>
              </View>

              {/* kitchen status */}
              <View style={[styles.rectangleBox, {height: 40}, {width: 200}, {top: -2860}, {left: 200}, {backgroundColor: "#40be25"}]}>
                <Text style={styles.alarmBoxText}>NO ALARMS</Text>
              </View>
              <View style={[styles.rectangleBox, {height: 20}, {width: 180}, {top: -2925}, {left: 190}, {marginBottom: 10}]}>
                <Text style={styles.normalText}>KITCHEN CONTROLLER:</Text>
              </View>

              {/* greenhouse status */}
              <View style={[styles.rectangleBox, {height: 40}, {width: 200}, {top: -2860}, {left: 200}, {backgroundColor: "#40be25"}]}>
                <Text style={styles.alarmBoxText}>NO ALARMS</Text>
              </View>
              <View style={[styles.rectangleBox, {height: 20}, {width: 180}, {top: -2925}, {left: 190}, {marginBottom: 10}]}>
                <Text style={styles.normalText}>GH CONTROLLER:</Text>
              </View>

              {/* restroom status */}
              <View style={[styles.rectangleBox, {height: 40}, {width: 200}, {top: -2860}, {left: 200}, {backgroundColor: "#Bf4c4c"}]}>
                <Text style={styles.alarmBoxText}>ALARM ACTIVE</Text>
              </View>
              <View style={[styles.rectangleBox, {height: 20}, {width: 180}, {top: -2925}, {left: 190}, {marginBottom: 10}]}>
                <Text style={styles.normalText}>RESTROOM CONTROLLER:</Text>
              </View>

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
          // height: Dimensions.get('window').height,
          // width: Dimensions.get('window').width,
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
          alignText: "center",
        },
      
        rectangleBoxText: {
          fontSize: 16, // Adjust the font size as needed
          fontFamily: 'Courier New', 
        },
        
        alarmBoxText: {
          fontSize: 16, // Adjust the font size as needed
          fontFamily: 'Courier New',
          alignText: "center",
          marginLeft: 52.5,
          marginTop: 10,
        },
        normalText: {
          fontSize: 14,
          marginTop: 2,
          fontFamily: 'Courier New',
          alignText: "center",
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
          height: 60, 
          borderRadius: 25,
          backgroundColor: "#28BEFF",
          marginBottom: 5,
          justifyContent: 'center',
          marginHorizontal: 10,
          borderColor: 'black',
          borderWidth: 1,
          top: 15,
          right: -425,
          elevation: 3,
          padding: 20,
      },
      
      buttonToRoom: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'darkgray',
        //zIndex: 9999,
        borderRadius: 9999,
      },


        buttonBackText: {
          alignItems: "center",
          fontSize: 20,
        },
      });