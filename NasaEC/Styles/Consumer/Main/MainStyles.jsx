import { StyleSheet, Dimensions } from "react-native";

export const GeneralStyleElements = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'linear-gradient(to bottom right, #FFC107, #FF5722, #FF4081)',
    },

    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});

export const rectangleLeftElements = StyleSheet.create({
    rectangleLeft: {
        position: 'absolute',
        marginBottom: 10,
        marginTop: 5,
        marginHorizontal: 10,
        width: '60%',
        height: Dimensions.get('window').height - 30,
        left: 0,
        borderWidth: 5,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export const humidityElements = StyleSheet.create({
    humiditySection: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },

    humidityText: {
        fontSize: 25,
        marginTop: 10,
        color: 'white',
    },

    humidityButtons: {
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        marginTop: 10,
    },

    humidityOptions: {
        fontSize: 20,
        color: 'white',
    },
});

export const temperatureElements = StyleSheet.create({
    temperatureSection: {
        position: 'absolute',
        left: 10,
        marginTop: 20,
        marginBottom: 10,
        top: 65,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.42,
        borderWidth: 5,
        borderColor: 'black',
        display: "flex",
        flexDirection: "row",
    },

    temperatureSensorText: {
        fontSize: 25,
        marginTop: 15,
        color: 'white',
    },

    temperatureButtons: {
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        marginTop: 10,
        flexDirection: "row",
        height: 40,
    },

    temperatureOptions: {
        fontSize: 20,
        color: 'white',
    },

    // Have a discussion about removing this part of the GUI.
    temperatureControllerSection: {
        position: 'absolute',
        marginTop: 60,
        left: 5,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.32,
        borderColor: 'black',
        borderWidth: 5,
    },

    temperatureStatusCelsius: {
        fontSize: 25,
        marginTop: 15,
        color: 'white',
    },

    temperatureStatusFarenheit: {
        fontSize: 25,
        marginTop: 15,
        color: 'white',
    },

    temperatureMinimum: {
        fontSize: 20,
        marginTop: 5,
        color: 'white',
    },

    temperatureMaximum: {
        fontSize: 20,
        marginTop: 5,
        color: 'white',
    },

    temperatureSetterText: {
        fontSize: 25,
        marginTop: 15,
        color: 'white',
    },

    tempertaureSetterSection: {
        position: 'absolute',
        marginTop: 200,
        left: 15,
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').height * 0.07,
        borderColor: 'black',
        borderWidth: 3,
    },

    temperatureMinimumSection: {
        position: 'absolute',
        marginTop: 70,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height * 0.05,
        borderColor: 'black',
        borderWidth: 3,
    },

    temperatureMaximumSection: {
        position: 'absolute',
        marginTop: 70,
        left: 280,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height * 0.05,
        borderColor: 'black',
        borderWidth: 3,
    },

    
});

export const luminosityElements = StyleSheet.create({

});

export const pressureElements = StyleSheet.create({
    pressureSection: {
        position: 'absolute',
        left: 10,
        marginTop: 630,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.195,
        borderColor: 'black',
        borderWidth: 5,
        display: "flex",
        flexDirection: "row",
    },

    pressureText: {
        fontSize: 25,
        marginTop: 15,
        color: 'white',
    },

    pressureButtons: {
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        marginTop: 10,
        height: 40,
    },

    pressureOptions: {
        fontSize: 20,
        color: 'white', 
    },
});

export const rectangleRightElements = StyleSheet.create({
    rectangleRight: {
        position: 'absolute',
        marginTop: -5,
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get('window').height - 30,
        right: 10,
        left: Dimensions.get('window').width * 0.6 + 20,
        borderColor: 'black',
        borderWidth: 5,
    },
    
    criticalParametersSection: {
        position: 'absolute',
        left: -5,
        top: -5,
        width: Dimensions.get('window').width * 0.36,
        height: 50,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },

    criticalParametersText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
    },
});

export const alarmStyles = StyleSheet.create({
    classOneSection: {
        position: 'absolute',
        left: -5,
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get('window').height * 0.2,
        borderColor: 'black',
        borderWidth: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'red',
        marginTop: 75,
        alignContent: 'center',
        justifyContent: 'center',       
    },

    classOneText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        top: 60,
    },

    classTwoSection: {
        position: 'absolute',
        left: -5,
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get('window').height * 0.2,
        borderColor: 'black',
        borderWidth: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'orange',
        marginTop: 235,
        alignContent: 'center',
        justifyContent: 'center',
    },

    classTwoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        top: 60,
    },

    classThreeSection: {
        position: 'absolute',
        left: -5,
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get('window').height * 0.2,
        borderColor: 'black',
        borderWidth: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'yellow',
        marginTop: 395,
        alignContent: 'center',
        justifyContent: 'center',
    },

    classThreeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        top: 60,
    },
});

export const navigationButtons = StyleSheet.create({
    returnButton: {
        marginTop: 40,
        width: 150, 
        borderRadius: 25,
        backgroundColor: "#28BEFF",
        marginBottom: 25,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
        top: 15,
        right: -175,
        elevation: 3,
    },

    returnButtonText: {
        alignItems: "center",
    },
});