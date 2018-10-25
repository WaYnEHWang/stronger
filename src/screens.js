import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    // Navigation.registerComponent('Home', () => require('./Home').default);
    Navigation.registerComponent('Initializing', () => require('./Initializing').default);
    Navigation.registerComponent('page1', () => require('./page1').default);
    Navigation.registerComponent('page2', () => require('./page2').default);
    Navigation.registerComponent('page3', () => require('./page3').default);
    Navigation.registerComponent('page4', () => require('./page4').default);
    Navigation.registerComponent('page5', () => require('./page5').default);
    Navigation.registerComponent('signin', () => require('./signin').default);
}