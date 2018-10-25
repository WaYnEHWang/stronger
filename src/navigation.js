import { Navigation } from 'react-native-navigation'
import { 
  one,
  two,
  three,
  four,
  five,
  menu,
} from './components/images';

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: {
            children: [{
              component: {
                name: 'page1',
              }
            }],
            options: {
              bottomTab: {
                text: 'page1',
                icon: one,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: 'page1',
                  alignment: 'center',
                  fontSize: 18,
                },
                leftButtons: [
                  {
                    id: 'menu',
                    icon: menu,
                  }
                ],
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'page2',
              }
            }],
            options: {
              bottomTab: {
                text: 'page2',
                icon: two,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: 'page2',
                  fontSize: 18,
                  alignment: 'center',
                },
                leftButtons: [
                  {
                    id: 'menu',
                    icon: menu,
                  }
                ],
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'page3',
              }
            }],
            options: {
              bottomTab: {
                text: 'page3',
                icon: three,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: 'page3',
                  fontSize: 18,
                  alignment: 'center',
                },
                leftButtons: [
                  {
                    id: 'menu',
                    icon: menu,
                  }
                ],
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'page4',
              }
            }],
            options: {
              bottomTab: {
                text: 'page4',
                icon: four,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: 'page4',
                  fontSize: 18,
                  alignment: 'center',
                },
                leftButtons: [
                  {
                    id: 'menu',
                    icon: menu,
                  }
                ],
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'page5',
              }
            }],
            options: {
              bottomTab: {
                text: 'page5',
                icon: five,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: 'page5',
                  fontSize: 18,
                  alignment: 'center',
                },
                leftButtons: [
                  {
                    id: 'menu',
                    icon: menu,
                  }
                ],
              }
            }
          }
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
                  name: 'signin',
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      
                    }
                  }
                },
                }
            ],
        }
    }
})