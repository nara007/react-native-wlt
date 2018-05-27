import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { QRscanner } from 'react-native-qr-scanner';

export default class Scanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        const { navigate } = this.props.navigation;
        this.navigate = navigate;
        this.getParameterByName = this.getParameterByName.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <QRscanner onRead={this.onRead} finderY={-20} />
            </View>
        );
    }

    getParameterByName(name, url) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    onRead = (res) => {

        // console.log(res);
        const x = this.getParameterByName('x', res.data);
        const y = this.getParameterByName('y', res.data);
        this.navigate('home', { x, y });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
});