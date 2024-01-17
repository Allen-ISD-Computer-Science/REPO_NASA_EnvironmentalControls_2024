import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.rectangle}>
      <Text style={styles.rectangleText}>Temperature Sensor</Text>
      <View style={styles.rectangle2}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    width: 770,
    height: 1080,
    backgroundColor: 'white', 
    marginTop: -10, 
    marginLeft: 20, 
    marginRight:'auto',
    borderWidth: 2,
    borderColor: 'black',
  },
  rectangleText: {
    color: 'black',
    fontSize: 40, // Adjust the font size
    fontWeight: 'bold',
  },
  rectangle2: {
    position: 'absolute',
    top: 60,
    left: 40,
    width: 200,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
