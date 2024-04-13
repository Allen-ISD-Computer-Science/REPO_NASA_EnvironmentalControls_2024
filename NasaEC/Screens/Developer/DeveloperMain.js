import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DevStyles, devHumidityStyles, devLuminosityStyles, devPressureStyles, devTemperatureStyles } from '../../Styles/Developer/DeveloperMainStyles';
import Menu from '../../Components/Menu';

import { db, ref, onValue} from '../../firebase';


export default function DeveloperMain({navigation}) {
    const [firebaseTempFahrenheit, setFirebaseTempFahrenheit] = useState();
    const [firebaseTempCelsius, setFirebaseTempCelsius] = useState();
    const [firebaseHumidity, setFirebaseHumidity] = useState();
    const [firebasePressure, setFirebasePressure] = useState();
    const [firebaseLuminosity, setFirebaseLuminosity] = useState();

    const fadeIn = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce,
            useNativeDriver: false,
            RCTAnimation: true,
        }).start();
    }, []);

    useEffect(() => {
        const data = ref(db);

        onValue(data, (snapshot) => {
            setFirebaseTempCelsius(Math.round(snapshot.val().temperature_C));
            setFirebaseTempFahrenheit(Math.round(snapshot.val().temperature_F));
            setFirebaseHumidity(Math.round(snapshot.val().humid));
            setFirebasePressure(snapshot.val().pressure);
            setFirebaseLuminosity(snapshot.val().lumin);
        })
    }, [db]);

    return (
        // Linear Gradient for the background
        <LinearGradient
            colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
            start = {{x: 0, y: 0}}
            end = {{x: 0.5, y: 0.5}}
            style = {DevStyles.container}
        >
            {/* Render the Menu component for both the DEVELOPER and USER */}
            <Menu navigation = {navigation} />
                <Animated.View style = {[DevStyles.container, {opacity: fadeIn}]}>

                    <View style = {DevStyles.roomIndicationContainer}>
                        <Text style = {DevStyles.roomIndicationText}> Room One (Dev Access) </Text>
                    </View>

                    {/* Render the side container */}
                    <View style = {DevStyles.container}>
                        <View style = {DevStyles.dataDisplayContainer}>
                            {/* Render the Temperature Rectangle that's going to contain the data(the text) */}
                            <View style = {devTemperatureStyles.temperatureContainer}>
                                <Text style = {devTemperatureStyles.temperatureHeading}> Temperature </Text>

                                <Text style = {DevStyles.dataText}> {firebaseTempFahrenheit} °F </Text>

                                <Text style = {DevStyles.dataText}> {firebaseTempCelsius} °C </Text>
                            </View>

                            {/* Render the Humidity Rectangle that's going to contain the data(the text) */}
                            <View style = {devHumidityStyles.humidityContainer}>
                                <Text style = {devHumidityStyles.humidityHeading}> Humidity </Text>

                                <Text style = {DevStyles.dataText}> {firebaseHumidity} % </Text>
                                <Text style = {DevStyles.dataText}> rH</Text>
                            </View>

                            {/* Render the Luminosity Rectangle that's going to contain the data(the text) */}
                            <View style = {devLuminosityStyles.luminosityContainer}>
                                <Text style = {devLuminosityStyles.luminosityHeading}> Luminosity </Text>

                                <Text style = {DevStyles.dataText}> {firebaseLuminosity} lux </Text>
                            </View>

                            {/* Render the Pressure Rectangle that's going to contain the data(the text) */}
                            <View style = {devPressureStyles.pressureContainer}>
                                <Text style = {devPressureStyles.pressureHeading}> Pressure </Text>

                                <Text style = {DevStyles.dataText}> {firebasePressure} Pa </Text>
                            </View>
                        </View>
                    </View>
                </Animated.View>
        </LinearGradient>
    );
};