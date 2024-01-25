// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
// import { Dimensions } from 'react-native';
// import React, { Component, useState } from 'react';
// import Slider from '@react-native-community/slider';

// export default function Slides() {
//     const [temp, setTemp] = useState(50);
//     const [sliding, setSliding] = useState('Inactive');
  
//   return (
//   <View style={styles.container}>
//     <Text style={{ fontsize: 20, fontWeight: 'bold' }}>{temp}</Text>
//     <Text style={{ fontsize: 20, fontWeight: 'bold' }}>{sliding}</Text>

//     <Slider
//       style={{ width:250, height: 40}}
//       minimumValue={0}
//       maximumValue={1}
//       minimumTrackTintColor='tomato'
//       maximumTrackTintColor='black'
//       thumbTintColor='tomato'
//       value={.5}
//       onValueChange={value => setTemp(parseInt(value * 100) + 'F')}
//       onSlidingStart={() =>setSliding('Sliding')}
//       onSlidingComplete={() => setSliding('Inactive')}    
//     />
//     <StatusBar style="auto" />
//   </View>
//   )
// }