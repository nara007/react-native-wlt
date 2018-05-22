import React from 'react';
import Image from 'react-native-remote-svg';

export default class Map extends React.Component {
    render() {
      return (
        <Image source={{ uri: 'https://sites.google.com/site/freehostingyesong/untitled.svg?attredirects=0&d=1' }} style={{ width: 380, height: 380}}/>
      );
    }
  }
  