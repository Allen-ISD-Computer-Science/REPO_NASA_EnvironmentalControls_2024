import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={[styles.button,{ backgroundColor: selectedOption === 'Enter' ? 'green' : 'transparent' },]}
              onPress={() => this.handleButtonPress('Enter')}>
                <Text>Enter</Text>
          </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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