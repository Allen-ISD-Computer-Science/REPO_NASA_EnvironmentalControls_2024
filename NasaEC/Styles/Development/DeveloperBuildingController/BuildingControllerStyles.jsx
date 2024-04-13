import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

export const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: screenWidth,
        height: screenHeight,
    },

    mainTitleContainer: {
        width: screenWidth / 12.5,
        height: screenHeight / 15,
        marginLeft: -screenWidth / 1.15,
        marginTop: -screenHeight / 15,
        borderWidth: 5,
    },

    mainTitleText: {
        fontSize: 12.5 * fontScaleFactor,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    },

    buttonBack: {
        width: screenWidth / 3,
        height: screenHeight / 12.5,
        marginTop: screenHeight / 50,
        marginRight: -screenWidth / 1.75,
        borderRadius: 50,
        backgroundColor: "#28BEFF",
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },

    buttonBackText: {
        alignSelf: 'center',
        fontSize: 10 * fontScaleFactor,
    },

    overallRoomContainer: {
        width: screenWidth / 2,
        height: screenHeight / 1.25,
        alignSelf: 'flex-start',
        marginTop: screenHeight / 15,
        marginLeft: screenWidth / 50,
        borderWidth: 2,
        borderColor: 'black',
    },
});

export const restroomStyles = StyleSheet.create({
    restroomRectangle: {
        width: screenWidth / 7.5,
        height: screenHeight / 2.5,
        borderWidth: screenWidth / 125,
        borderColor: 'black',
        justifyContent: 'center'
    },

    restroomText: {
        alignSelf: 'center',
        fontSize: 12.5 * fontScaleFactor,
    },
    
    connectorRectangleOne: {
        width: screenWidth / 25,
        height: screenHeight / 25,
    },
});

export const sleepingQuartersStyles = StyleSheet.create({
    sleepingQuarterRectangle: {
        width: screenWidth / 3,
        height: screenHeight / 4,
        borderWidth: screenWidth / 125,
        borderColor: 'black',
        justifyContent: 'center',
        marginLeft: screenWidth / 6.5,
        marginTop: -screenHeight / 2.5,
    },

    sleepingQuarterText: {
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
    },
});

export const sleepingQuarterTwoStyles = StyleSheet.create({
    sleepingQuarterTwoRectangle: {
        width: screenWidth / 5,
        height: screenHeight / 10,
    },

    sleepingQuarterTwoText: {
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
    },
});