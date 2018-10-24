import { Navigation } from 'react-native-navigation'
import { 
  one,
  two,
  three,
  four,
  five,
} from './components/images';

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
                icon: one
              },
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
                icon: two
              },
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
                icon: three
              },
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
                icon: four
              },
            }
          },
        },
        {
          component: {
            name: 'page5',
            options: {
              bottomTab: {
                text: 'page5',
                fontSize: 12,
                icon: five
              },
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
                  options: {
                    topbar: {
                      visible: true,
                      title: {
                        text: "Page3"
                      },
                    }
                  }
                },
                }
            ],
        }
    }
})