import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

Font.loadAsync({
    'K2D-SemiBold': require("../../assets/Fonts/K2D-SemiBold.ttf"),
});

export const BuildingControllerStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth
    },

    dataDisplayContainer: {
        alignContent: 'flex-start',
        alignSelf: 'center',
        width: screenWidth * 0.7,
        height: screenHeight * 0.915,
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
})