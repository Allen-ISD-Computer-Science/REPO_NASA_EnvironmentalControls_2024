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
    height: 100,
    backgroundColor: 'white', 
    marginTop: 10, 
    marginLeft: 20, 
    marginRight:'auto',
    borderWidth: 2,
    borderColor: 'black',
    top: -530,
  },
  rectangleText: {
    color: 'black',
    fontSize: 20, // Adjust the font size
    fontWeight: 'bold',
    
  
  },
  rectangle2: {
    position: 'absolute',
    top: 40,
    left: 30,
    width: 700,
    height: 50,
    backgroundColor: 'lime',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
