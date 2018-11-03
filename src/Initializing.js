import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import Orientation from 'react-native-orientation';

import { goToAuth, goHome } from './navigation'

// import { USER_KEY } from './config'
const user = 2;

export default class Initialising extends React.Component {
    componentWillMount() {
        Orientation.lockToPortrait();
    }
    async componentDidMount() {
        goHome();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})