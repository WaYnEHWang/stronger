import { Navigation } from 'react-native-navigation'
import { 
  one,
  two,
  three,
  four,
  five,
  menu,
  one_1x,
  two_1x,
  three_1x,
  four_1x,
  five_1x,
} from './components/images';
const strings = require('@strings');

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
                text: strings.page1,
                icon: one_1x,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: strings.page1,
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
                icon: two_1x,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: strings.page1,
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
                icon: three_1x,
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
                icon: four_1x,
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
                icon: five_1x,
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