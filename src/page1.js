
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { line_menu } from './components/images';

const strings = require('@strings');
type Props = {};
export default class Page1 extends Component<Props> {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }

    static options(passProps) {
        if (Platform.OS === 'ios') {
          return {
            topBar: {
              leftButtons: [
                {
                  id: 'menu',
                  icon: line_menu,
                  color: 'white'
                }
              ],
              title: {
                  text: strings.page1,
                  alignment: 'center',
                  fontSize: 18,
                },
            }
          };
        }
      }

    navigationButtonPressed({ buttonId }) {
        // will be called when "buttonOne" is clicked
        console.log(buttonId);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Page1!</Text>
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
