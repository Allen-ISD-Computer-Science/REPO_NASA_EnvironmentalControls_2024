// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// import { BleManager } from 'react-native-ble-plx';

// const manager = new BleManager();

// const App = () => {
//   const [scanning, setScanning] = useState(false);
//   const [devices, setDevices] = useState([]);
//   const [connectedDevice, setConnectedDevice] = useState(null);

//   useEffect(() => {
//     manager.start({ showAlert: false });

//     const subscription = manager.didDiscoverPeripheral().subscribe(({ peripheral }) => {
//       const newDevices = [...devices];
//       const found = newDevices.some(dev => dev.id === peripheral.id);
//       if (!found) {
//         newDevices.push({
//           id: peripheral.id,
//           name: peripheral.name || 'Unknown',
//           rssi: peripheral.rssi,
//         });
//         setDevices(newDevices);
//       }
//     });

//     return () => {
//       subscription.remove();
//     };
//   }, [devices]);

//   const handleScanToggle = async () => {
//     if (!scanning) {
//       try {
//         await manager.startDeviceScan(null, null, true);
//         setScanning(true);
//       } catch (error) {
//         console.error('Scan error:', error);
//       }
//     } else {
//       manager.stopDeviceScan();
//       setScanning(false);
//     }
//   };

//   const handleConnect = async (deviceId) => {
//     try {
//       const device = devices.find(dev => dev.id === deviceId);
//       if (device) {
//         await manager.connectToDevice(device.id);
//         setConnectedDevice(device);
//       }
//     } catch (error) {
//       console.error('Connection error:', error);
//     }
//   };

//   const handleDisconnect = async () => {
//     try {
//       await manager.disconnectFromDevice(connectedDevice.id);
//       setConnectedDevice(null);
//     } catch (error) {
//       console.error('Disconnection error:', error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Bluetooth Devices:</Text>
//       <FlatList
//         data={devices}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
//             <Text>{item.name} (RSSI: {item.rssi})</Text>
//             {!connectedDevice || connectedDevice.id !== item.id ? (
//               <Button title="Connect" onPress={() => handleConnect(item.id)} />
//             ) : (
//               <Button title="Disconnect" onPress={handleDisconnect} />
//             )}
//           </View>
//         )}
//       />
//       <Button title={scanning ? 'Stop Scan' : 'Start Scan'} onPress={handleScanToggle} />
//     </View>
//   );
// };

// export default App;