import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import Map from './components/map/map';
import Position from './components/position/position';
import CommandPanel from './components/command_panel/commandPanel';
import { StackNavigator, } from 'react-navigation';
import Scanner from './components/scanner/positionScanner';
import InfoScanner from './components/scanner/infoScanner';
import { Button, Icon } from 'react-native-elements';


const svgSet = [
//    {url:'https://sites.google.com/site/team45songye/0.svg?attredirects=0&d=1', width: 1000, height: 600 },
    {url:'https://sites.google.com/site/team45songye/0.svg?attredirects=0&d=1', width: 350, height: 400 },
    {url:'https://sites.google.com/site/team45songye/1geschloss.svg?attredirects=0&d=1', width: 350, height: 400 },
    {url:'https://sites.google.com/site/team45songye/2.svg?attredirects=0&d=1', width: 350, height: 400 }

];


class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };

        this.getPrevSVG = this.getPrevSVG.bind(this);
        this.getNextSVG = this.getNextSVG.bind(this);
    }

    getPrevSVG() {

       let newIndex = this.state.index - 1;

        if(newIndex < 0) {
            newIndex=2;
        }

    this.setState({

        index: newIndex
    });

};


    getNextSVG() {

       let newIndex = this.state.index + 1;

        if(newIndex > 2) {
            newIndex=0;
        }

    this.setState({

        index: newIndex
    });

    };

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
        <Map svg={svgSet[this.state.index]} />
        <Position x={x} y={y} />
        <View style={styles.buttons}>
            <Button icon={{name: 'chevron-left'}} backgroundColor="green" onPress={this.getPrevSVG} />
            <Button title="position" icon={{name: 'camera'}} backgroundColor="green" onPress={() => { navigate('position'); }} />
            <Button title="info" icon={{name: 'info'}} backgroundColor="green"  onPress={() => { navigate('info'); }} />
            <Button icon={{name: 'chevron-right'}} backgroundColor="green" onPress={this.getNextSVG} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
//    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const AppNav = StackNavigator({
  home: { screen: App },
  position: { screen: Scanner },
  info: {screen: InfoScanner}
});

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default AppNav;
