
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  NavigationBar,
} from './components';

type Props = {};
export default class Page5 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Page5'
                    onPress={() => { console.log('5'); }}
                />
                <View style={{ flex: 8, backgroundColor: 'white' }}>
                    <Text style={styles.welcome}>Welcome to Page5!</Text>
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
