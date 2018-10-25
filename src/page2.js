
import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  NavigationBar,
} from './components';

type Props = {};
export default class Page2 extends Component<Props> {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  navigationButtonPressed({ buttonId }) {
    // will be called when "buttonOne" is clicked
    console.log(buttonId);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Page2!</Text>
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
