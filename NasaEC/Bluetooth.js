import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import BleManager from 'react-native-ble-manager';

export default class Bluetooth extends Component {
  constructor() {
    super();
    this.state = {
      scanning: false,
      devices: [],
    };
  }

  componentDidMount() {
    BleManager.start({ showAlert: false });
  }

  componentWillUnmount() {
    BleManager.stopScan();
  }

  startScan = () => {
    if (!this.state.scanning) {
      BleManager.scan([], 5, true).then(() => {
        console.log('Scanning started');
        this.setState({ scanning: true });
      });
    }
  };

  stopScan = () => {
    if (this.state.scanning) {
      BleManager.stopScan().then(() => {
        console.log('Scanning stopped');
        this.setState({ scanning: false });
      });
    }
  };

  connectToDevice = (deviceId) => {
    BleManager.connect(deviceId).then(() => {
      console.log('Connected to device');
    });
  };

  disconnectDevice = (deviceId) => {
    BleManager.disconnect(deviceId).then(() => {
      console.log('Disconnected from device');
    });
  };

  render() {
    return (
      <View>
        <Button
          title={this.state.scanning ? 'Stop Scan' : 'Start Scan'}
          onPress={this.state.scanning ? this.stopScan : this.startScan}
        />
        <Text>Available Devices:</Text>
        {this.state.devices.map((device) => (
          <View key={device.id}>
            <Text>{device.name}</Text>
            <Button title="Connect" onPress={() => this.connectToDevice(device.id)} />
            <Button
              title="Disconnect"
              onPress={() => this.disconnectDevice(device.id)}
            />
          </View>
        ))}
      </View>
    );
  }
}

