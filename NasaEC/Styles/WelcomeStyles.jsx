import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

Font.loadAsync({
    'K2D-SemiBold': require('../assets/Fonts/K2D-SemiBold.ttf'),
});

export const WelcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        height: screenHeight,
    },

    mainTextContainer: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        height: screenHeight,
        width: screenWidth,
        backgroundColor: 'rgba(59, 105, 224, 0.25)',
    },

    image: {
        marginTop: screenHeight / 25,
        height: screenHeight / 3,
        width: screenWidth / 3,
        alignSelf: 'center',
    },

    mainText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 50 * fontScaleFactor,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
    },

    subText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
    },

    buttonContainer: {
        marginTop: screenHeight / 10,
        width: screenWidth / 3,
        height: screenHeight / 10,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(135, 127, 127, 0.75)',
        borderRadius: 50,
    },

    buttonText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
    },
});
