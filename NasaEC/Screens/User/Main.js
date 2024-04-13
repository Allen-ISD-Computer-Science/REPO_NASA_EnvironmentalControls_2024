import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MainStyles, humidityStyles, luminosityStyles, pressureStyles, temperatureStyles } from '../../Styles/User/MainStyles';
import Menu from '../../Components/Menu';

// Import Firebase related libraries to ensure connection with the Firebase data.
import { db, ref, onValue} from '../../firebase';

export default function Main({navigation}) {
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
            style = {MainStyles.container}
        >
            {/* Render the Menu component for both the DEVELOPER and USER */}
            <Menu navigation = {navigation} />
                <Animated.View style = {[MainStyles.container, {opacity: fadeIn}]}>

                    {/* Render the side container */}
                    <View style = {MainStyles.container}>
                        <View style = {MainStyles.dataDisplayContainer}>
                            {/* Render the Temperature Rectangle that's going to contain the data(the text) */}
                            <View style = {temperatureStyles.temperatureContainer}>
                                <Text style = {temperatureStyles.temperatureHeading}> Temperature </Text>

                                <Text style = {MainStyles.dataText}> {firebaseTempFahrenheit} °F </Text>

                                <Text style = {MainStyles.dataText}> {firebaseTempCelsius} °C </Text>
                            </View>
                            
                            {/* Render the Humidity Rectangle that's going to contain the data(the text) */}
                            <View style = {humidityStyles.humidityContainer}>
                                <Text style = {humidityStyles.humidityHeading}> Humidity </Text>

                                <Text style = {MainStyles.dataText}> {firebaseHumidity} % </Text>
                                <Text style = {MainStyles.dataText}> rH </Text>
                            </View>

                            {/* Render the Luminosity Rectangle that's going to contain the data(the text) */}
                            <View style = {luminosityStyles.luminosityContainer}>
                                <Text style = {luminosityStyles.luminosityHeading}> Luminosity </Text>

                                <Text style = {MainStyles.dataText}> {firebaseLuminosity} lux </Text>
                            </View>

                            {/* Render the Pressure Rectangle that's going to contain the data(the text) */}
                            <View style = {pressureStyles.pressureContainer}>
                                <Text style = {pressureStyles.pressureHeading}> Pressure </Text>

                                <Text style = {MainStyles.dataText}> {firebasePressure} Pa </Text>
                            </View>
                        </View>
                    </View>
                </Animated.View>
        </LinearGradient>
    );
};