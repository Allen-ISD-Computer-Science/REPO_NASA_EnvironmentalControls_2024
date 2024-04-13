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

export const UserMenuStyles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
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
        marginLeft: screenWidth * 0.015,
        marginTop: -screenHeight * 0.4695
    },

    userText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    logoStyle: {
        height: screenHeight / 10,
        width: screenWidth / 15,
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