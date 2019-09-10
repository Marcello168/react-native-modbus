/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NativeModules } from 'react-native';
import { openDevice, writeRegisters, readHoldingRegisters } from 'react-native-modbus';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    console.log('NativeModules :', NativeModules);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.openModbus}>打开串口</Text>
        <Text style={styles.instructions} onPress={this.writeData}>写数据</Text>
        <Text style={styles.instructions} onPress={this.readData}>读数据</Text>
      </View>
    );
  }

  //打开Modbus
  openModbus = () => {
    openDevice('/dev/ttyS0', 9600, (isSucess) => {
      console.log('isSucess :', isSucess);
    })
  }

  //写数据
  writeData = () => {
    writeRegisters(0x02, 0x98, [0x01, 0x0f, 0x07])
  }

  //读数据
  readData = () => {
    readHoldingRegisters(0x02, 0x89, 0x01, (receiveData) => {
      console.log('ReceiveData :', receiveData);
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
});
