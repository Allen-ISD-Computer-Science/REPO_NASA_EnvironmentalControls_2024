import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

const textVerticalMargin = 60;

Font.loadAsync({
    'K2D-Regular': require('../../assets/Fonts/K2D-Regular.ttf'),
    'K2D-SemiBold': require('../../assets/Fonts/K2D-SemiBold.ttf'),
    'K2D-Bold': require('../../assets/Fonts/K2D-Bold.ttf'),
});

export const DeveloperMenuStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: screenHeight,
        width: screenWidth,
    },

    sideMenu: {
        alignContent: 'center',
        width: screenWidth * 0.225,
        height: screenHeight / 2.25,
        backgroundColor: 'rgba(210, 183, 183, 0.4)',
        borderRadius: 30,
        marginTop: screenHeight * 0.1175,
    },

    developerText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    logoStyle: {
        height: screenHeight / 12.5,
        width: screenWidth / 5,
        aspectRatio: 1,
        alignSelf: 'center',
        marginVertical: screenHeight / 75,
    },

    menuText: {
        fontFamily: 'K2D-SemiBold',
        marginVertical: screenHeight / textVerticalMargin,
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },
})