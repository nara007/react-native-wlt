import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default class CommandPanel extends React.Component {
    render() {
        // const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Button onPress={()=>{}} title='Scan Position' />
                {/* <Button onPress={()=>navigate('info')} title='Info' /> */}
                <Button onPress={()=>{}} title='Close Position' />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
