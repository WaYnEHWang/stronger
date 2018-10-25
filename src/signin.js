
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { goToAuth, goHome } from './navigation'

type Props = {};
export default class SignIn extends Component<Props> {

  logout = async () => {
    try {
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.logout}
                    activeOpacity={0.5}>
                    <Text style={styles.welcome}>Sign in!</Text>
                </TouchableOpacity>

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
