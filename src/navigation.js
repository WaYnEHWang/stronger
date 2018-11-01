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
                text: strings.voice_asistant,
                icon: one_1x,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: strings.voice_asistant,
                  alignment: 'center',
                  fontSize: 18,
                  color: 'white',
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
                text: strings.live,
                icon: two_1x,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: strings.live,
                  fontSize: 18,
                  alignment: 'center',
                  color: 'white',
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
                name: 'heatControl',
              }
            }],
            options: {
              bottomTab: {
                text: strings.calorie_control,
                icon: three_1x,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: strings.calorie_control,
                  fontSize: 18,
                  alignment: 'center',
                  color: 'white',
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
                text: strings.fitness_mode,
                icon: four_1x,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: strings.fitness_mode,
                  fontSize: 18,
                  alignment: 'center',
                  color: 'white',
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
                text: strings.schedule_info,
                icon: five_1x,
              },
              topBar: {
                background: {
                  color: 'orange'
                },
                title: {
                  text: strings.schedule_info,
                  fontSize: 18,
                  alignment: 'center',
                  color: 'white',
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