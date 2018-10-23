import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'page1',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'page1',
                icon: require('./images/one.png')
              }
            }
          },
        },
        {
          component: {
            name: 'page2',
            options: {
              bottomTab: {
                text: 'page2',
                fontSize: 12,
                icon: require('./images/two.png')
              }
            }
          },
        },
        {
          component: {
            name: 'page3',
            options: {
              bottomTab: {
                text: 'page3',
                fontSize: 12,
                icon: require('./images/three.png')
              }
            }
          },
        },
        {
          component: {
            name: 'page4',
            options: {
              bottomTab: {
                text: 'page4',
                fontSize: 12,
                icon: require('./images/four.png')
              }
            }
          },
        },
        {
          component: {
            name: 'page5',
            options: {
              topBar: {
                visible: true,
                drawBehind: true,
                height: 20,
                title: {
                  text: 'The Title',
                  color: 'red',
                  fontSize: 13.5,
                },
                leftButtons: [
                  {
                    id: 'page5leftbutton',
                    icon: require('./images/one.png')
                  }
                ]
              },
              bottomTab: {
                text: 'page5',
                fontSize: 12,
                icon: require('./images/five.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'page3',
                    }
                }
            ],
        }
    }
})