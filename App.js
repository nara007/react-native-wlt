import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/map/map';
import Position from './components/position/position';
import CommandPanel from './components/command_panel/commandPanel';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        <Map />
        <Position x={100} y={100} />
        <CommandPanel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
