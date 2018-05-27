import React from 'react';
import { StyleSheet, Text, View, Button, YellowBox } from 'react-native';
import Map from './components/map/map';
import Position from './components/position/position';
import CommandPanel from './components/command_panel/commandPanel';
import { StackNavigator, } from 'react-navigation';
import Scanner from './components/scanner/positionScanner';
import InfoScanner from './components/scanner/infoScanner';


class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    let x = this.props.navigation.getParam('x');
    x = x ? Number.parseInt(x) : 250;
    let y = this.props.navigation.getParam('y');
    y= y ? Number.parseInt(y) : 250;

    console.log(x, y);
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        <Map />
        <Position x={x} y={y} />
        <Button title="position" onPress={() => { navigate('position'); }} />
        <Button title="info" onPress={() => { navigate('info'); }} />
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

const AppNav = StackNavigator({
  home: { screen: App },
  position: { screen: Scanner },
  info: {screen: InfoScanner}
});

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default AppNav;
