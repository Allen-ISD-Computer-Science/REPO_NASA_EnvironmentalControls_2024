import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import Main from './Main';
import Alarm from './Alarm';
import AndroidMain from './Android_Main';
import AndroidWelcome from './Android_Welcome';
// import BluetoothScanner from './Bluetooth';
// import Test from './Test';
import DeveloperWelcome from './Developer_Welcome';
import DeveloperMain from './Developer_Main';
import DeveloperAlarm from './Developer_Alarm';
import DeveloperBC from './Developer_BC';
// import Bluetooth from './Bluetooth';

import TestPlan from './TestPlan';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator 
    initialRouteName="Welcome" 
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Alarm" component={Alarm} />
      <Stack.Screen name="AndroidMain" component={AndroidMain} />
      <Stack.Screen name="AndroidWelcome" component={AndroidWelcome} />
      {/* <Stack.Screen name="AndroidBluetooth" component={Bluetooth} /> */}
      {/* <Stack.Screen name="Test" component={Test} /> */}
      <Stack.Screen name="DeveloperWelcome" component={DeveloperWelcome} />
      <Stack.Screen name="DeveloperMain" component={DeveloperMain} />
      <Stack.Screen name="DeveloperAlarm" component={DeveloperAlarm} />
      <Stack.Screen name="DeveloperBC" component={DeveloperBC} />
      <Stack.Screen name="TestPlan" component={TestPlan} />
    </Stack.Navigator>
    
    </NavigationContainer>
  );
}