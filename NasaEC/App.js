import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import Main from './main';

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
    </Stack.Navigator>
    
    </NavigationContainer>
  );
}

const commonStyles = {
    button: {
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 2,
      padding: 5,
      top: 200,
    },
  };