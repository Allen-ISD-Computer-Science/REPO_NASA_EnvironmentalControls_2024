import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
// import { Dimensions }q from 'react-native';
import React, { Component } from 'react';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={[styles.button,
     // {backgroundColor: selectedOption === 'Enter' ? 'green' : 'transparent'},
    ]}
              onPress={() => navigation.navigate("Main")}>
                <Text>Enter</Text>
          </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
    container: {
      flex: 1
    },
    button: {
      marginHorizontal: 10,
      borderColor: 'black',
      borderWidth: 2,
      padding: 5,
      top: 200,
    },
  };