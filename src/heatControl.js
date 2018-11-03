
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import {
    line_menu,
    diet_suggestion,
    focus,
    diagram,
    calorie
} from './components/images';
import Orientation from 'react-native-orientation';

const strings = require('@strings');
type Props = {};

const {
  width: deviceWidth,
    height: deviceHeight,
} = Dimensions.get('window');

type State = {
    record: Array<{
        type: number,
        name: string,
        meal: number,
        calories: number,
    }>,
}
export default class heatControl extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            record: [0,0,0,0,0,0,0,0,0],
        };
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }

    componentDidAppear() {
        console.log('~~~~~~~~~~~page3 appear~~~~~~~~~~~~');
    }

    componentDidMount() {
        console.log('page3 component did mount');
    }

    componentWillMount() {
        console.log('page3 component will mount');
        Orientation.lockToPortrait();
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
                  text: strings.calorie_control,
                  alignment: 'center',
                  fontSize: 18,
                  color: 'white'
                },
            }
          };
        }
      }

    navigationButtonPressed({ buttonId }) {
        // will be called when "buttonOne" is clicked
        console.log(buttonId);
    }

    nextPage=(page) => {
        switch(page)
        {
            case 'detection':
            console.log('~~~~~~~~~~~~~~~~~~~~~~~');
                console.log(page);
                Navigation.push(this.props.componentId, {
                    component: {
                      name: 'detection',
                    }
                  });
                break;
            case 'report':
            console.log('~~~~~~~~~~~~~~~~~~~~~~~');
            console.log(page);
            Navigation.push(this.props.componentId, {
                    component: {
                      name: 'report',
                    }
                  });
                break;
            case 'calculate':
            console.log('~~~~~~~~~~~~~~~~~~~~~~~');
            console.log(page);
            Navigation.push(this.props.componentId, {
                    component: {
                      name: 'calculate',
                    }
                  });
                break;
            case 'suggestion':
            console.log('~~~~~~~~~~~~~~~~~~~~~~~');
            console.log(page);
            Navigation.push(this.props.componentId, {
                    component: {
                      name: 'suggestion',
                    }
                  });
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.topContent}>
                        <TouchableOpacity onPress={ () => { this.nextPage('detection'); }}>
                            <Image
                                style={styles.topContentImage}
                                source={focus}
                            />
                        </TouchableOpacity>
                        <Text style={styles.topContentTitle}>{strings.calorie_detection}</Text>
                    </View>
                    <View style={styles.topContent}>
                        <TouchableOpacity onPress={() => { this.nextPage('report'); }}>
                            <Image
                                style={styles.topContentImage}
                                source={diagram}
                            />
                        </TouchableOpacity>
                        <Text style={styles.topContentTitle}>{strings.report_search}</Text>
                    </View>
                    <View style={styles.topContent}>
                        <TouchableOpacity onPress={() => { this.nextPage('calculate'); }}>
                            <Image
                                style={styles.topContentImage}
                                source={calorie}
                            />
                        </TouchableOpacity>
                        <Text style={styles.topContentTitle}>{strings.calorie_calculate}</Text>
                    </View>
                    <View style={styles.topContent}>
                        <TouchableOpacity onPress={() => { this.nextPage('suggestion'); }}>
                            <Image
                                style={styles.topContentImage}
                                source={diet_suggestion}
                            />
                        </TouchableOpacity>
                        <Text style={styles.topContentTitle}>{strings.diet_suggestion}</Text>
                    </View>
                </View>
                <View style={styles.midView}>
                    <Text style={styles.midTitle}>{strings.today_calorie}</Text>
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.bott}>{strings.diet_record}</Text>
                    <ScrollView style={styles.contentArea}>
                        {this.state.record.map((data, index) => {
                                console.log(`++++++${index}`);
                                return (
                                    <View style={styles.item}>
                                        <Text style={styles.welcome}>{index}</Text>
                                    </View>
                                );
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'lightgray',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        // margin: 10,
    },
    topView: {
        height: deviceHeight * 0.15,
        width: deviceWidth,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topContent: {
        width: 70,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    topContentImage: {
        width: 50,
        height: 50,
        marginTop:10,
    },
    topContentTitle: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    midView: {
        height: deviceHeight * 0.2,
        width: deviceWidth,
        backgroundColor: 'white',
        marginTop: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    midTitle: {
        fontSize: 22,
        textAlign: 'center',
        color: 'black',
    },
    bottomView: {
        backgroundColor: 'white',
        marginTop: 5,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    contentArea: {
        flex: 1,
    },
    bottomTitle: {
        fontSize: 18,
        textAlign: 'center',
    },
    item: {
        height: 60,
        width: deviceWidth * 0.9,
        backgroundColor: 'gray',
        marginTop: 3,
        marginLeft: deviceWidth * 0.05
    },
});
