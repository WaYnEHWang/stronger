
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  NavigationBar,
} from './components';

type Props = {};
export default class Page4 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Page4'
                    onPress={() => { console.log('4'); }}
                />
                <View style={{ flex: 8, backgroundColor: 'white' }}>
                    <Text style={styles.welcome}>Welcome to Page4!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
