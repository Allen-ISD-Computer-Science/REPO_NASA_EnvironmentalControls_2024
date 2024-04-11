// Import necessary libraries from React Native
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Imports for the USER screens/pages
import Welcome from './Screens/Welcome';
import Main from './Screens/User/Main';

// Imports for the DEVELOPER screens/pages
import DeveloperMain from './Screens/Developer/DeveloperMain';
import DeveloperBC from './Developer_BC';
import TestPlan from './TestPlan';

// Creates a Navigation Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome" 
        screenOptions={{ headerShown: false }}
      >
          {/* USER Navigation Stack */}
          <Stack.Screen name = "Welcome" component={Welcome} />
          <Stack.Screen name = "Main" component = {Main} />
          {/* <Stack.Screen name = "UserAlarm" component={Alarm} /> */}

          {/* DEVELOPER Navigation Stack */}
          <Stack.Screen name = "DeveloperMain" component = {DeveloperMain} />
          <Stack.Screen name = "DeveloperBC" component={DeveloperBC} />
          <Stack.Screen name = "TestPlan" component={TestPlan} />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}