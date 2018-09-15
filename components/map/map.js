import React from 'react';
import Image from 'react-native-remote-svg';

export default class Map extends React.Component {

    render() {
    const { svg } = this.props;

      return (
        <Image source={{ uri: svg.url}}
        style={{  width: svg.width, height: svg.height}}/>
      );
    }
  }
  