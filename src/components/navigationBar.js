/* @flow */
import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { menu, } from './images';

type Props = {
    title: string,
    onPress: Function,
    disabled?: ?boolean,
}

class NavigationBar extends React.PureComponent<Props> {
  render() {
      const {
          disabled, title,
    } = this.props;
    return (
      /* <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity 
            onPress={this.props.onPress}
            activeOpacity={0.5}>
            <Image style={styles.image} source={menu} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}> */
          <Text style={styles.title}>hello</Text>
        /* </View>
        <View style={styles.other}>
        </View>
      </View> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row'
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30
  },
  titleView: {
    flex: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  other: {
    flex: 1,
  }
});

module.exports = NavigationBar;
