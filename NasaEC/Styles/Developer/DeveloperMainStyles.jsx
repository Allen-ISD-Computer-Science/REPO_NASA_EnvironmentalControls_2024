import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

// For the Ardiuno Data Containers
const dataContainerWidth = screenWidth * 0.3215;
const dataContainerHeight = screenHeight * 0.325;

Font.loadAsync({
    'K2D-SemiBold': require("../../assets/Fonts/K2D-SemiBold.ttf"),
});

export const DevStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
    },

    dataDisplayContainer: {
        alignContent: 'flex-start',
        alignSelf: 'center',
        width: screenWidth * 0.7,
        height: screenHeight * 0.775,
        marginRight: screenWidth * 0.575,
        marginTop: screenHeight * 0.1375,
        backgroundColor: 'rgba(210, 183, 183, 0.4)',
        borderRadius: 30,
    },

    dataText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 22.5 * fontScaleFactor,
        marginVertical: screenHeight * 0.025,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
    },

    roomIndicationContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: screenWidth * 0.4,
        height: screenHeight * 0.125,
        marginLeft: screenWidth * 0.175,
        marginBottom: screenHeight * 0.825,
        backgroundColor: 'blue',
        borderRadius: 50,
    },
    
    roomIndicationText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 20 * fontScaleFactor,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
    },
});

export const devTemperatureStyles = StyleSheet.create({
    temperatureContainer: {
        alignContent: 'center',
        alignSelf: 'flex-start',
        width: dataContainerWidth,
        height: dataContainerHeight,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 27.5,
        marginLeft: screenWidth * 0.025,
        marginTop: screenHeight * 0.0305,
        marginHorizontal: screenWidth * 0.5,
        elevation: 20,
        // boxShadow: '5px 7.5px 7.5px black',
    },

    temperatureHeading: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 27.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
        textDecorationLine: 'underline',
    },
});

export const devHumidityStyles = StyleSheet.create({
    humidityContainer: {
        alignContent: 'center',
        alignSelf: 'flex-start',
        width: dataContainerWidth,
        height: dataContainerHeight,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 27.5,
        marginLeft: screenWidth * 0.025,
        marginTop: screenHeight * 0.05325,
        // boxShadow: '5px 7.5px 7.5px black',
    },

    humidityHeading: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 27.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
        textDecorationLine: 'underline',
    },
});

export const devLuminosityStyles = StyleSheet.create({
    luminosityContainer: {
        alignContent: 'center',
        alignSelf: 'flex-end',
        width: dataContainerWidth,
        height: dataContainerHeight,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 27.5,
        marginRight: screenWidth * 0.02,
        marginTop: -screenHeight * 0.7025,
        // boxShadow: '7.5px 12.5px 12.5px black',
    },

    luminosityHeading: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 27.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
        textDecorationLine: 'underline',
    },
});

export const devPressureStyles = StyleSheet.create({
    pressureContainer: {
        alignContent: 'center',
        alignSelf: 'flex-end',
        width: dataContainerWidth,
        height: dataContainerHeight,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 27.5,
        marginRight: screenWidth * 0.02,
        marginTop: screenHeight * 0.05325,
        // boxShadow: '7.5px 12.5px 12.5px black',
    },

    pressureHeading: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 27.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
        textDecorationLine: 'underline',
    },
});