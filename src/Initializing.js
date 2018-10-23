import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native'

import { goToAuth, goHome } from './navigation'

// import { USER_KEY } from './config'
const user = 1;

export default class Initialising extends React.Component {
    async componentDidMount() {
        if (user === 2) {
            goHome()
        } else {
            goToAuth()
        }
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