import {StyleSheet, Dimensions} from 'react-native';

export const AlarmStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        borderWidth: 20,
        borderColor: 'black',
    },

    outsideBox: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'lightgray',
        borderWidth: 20,
        borderColor: 'black',
        justifyContent: 'flex-start', // Align items from the start (top)
        alignItems: 'center',
      },
    
      alarmOneContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },

      alarmTwoContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },

      alarmThreeContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    
      alarmTitleBox: {
        width: 100,
        height: 150,
        marginTop: 20,
      },
    
      classAlarmBox: {
        backgroundColor: 'red',
        marginTop: 10,
        marginLeft: 5,
        alignSelf: 'flex-start', // Align to the start (left)
      },
    
      rectangleBox: {
        width: 1100,
        height: 105,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 5, // Adjust the marginTop as needed
        marginLeft: 5,
      },
    
      rectangleBoxText: {
        fontSize: 16, // Adjust the font size as needed
        fontFamily: 'Courier New', 
      },
    
      textContainer: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
      },
    
      underlinedText: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
    
      buttonBack: {
        marginTop: 0,
        width: 250, 
        borderRadius: 25,
        backgroundColor: "#28BEFF",
        marginBottom: 25,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
        top: 15,
        right: -425,
        elevation: 3,
        padding: 20,
    },
    
      buttonBackText: {
        alignItems: "center",
        fontSize: "1em",
      },
});