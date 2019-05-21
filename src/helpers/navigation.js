import { Navigation } from "react-native-navigation";
import * as constants from '../screens/constants';

export const goToProfileCreation = () => Navigation.setRoot({
  root: {
    id: 'CreateProfile',
    component: {
      name: constants.ProfileCreation,
    }
  }
});

export const showFullNews = (item, id) => Navigation.push(id, {
  component: {
    name: constants.SingleNews,
    passProps: {
      item: item,
    },
    options: {
      bottomTabs: {
        visible: false,
        animate: false,
      }
    }
  }
});

export const showFullEvent = (item, id) => Navigation.push(id, {
  component: {
    name: constants.SingleEvent,
    passProps: {
      item: item,
    },
    options: {
      bottomTabs: {
        visible: false,
        animate: false,
      }
    }
  }
});

export const showFullBenefits = (route, id) => Navigation.push(id, {
  component: {
    name: route,
    options: {
      bottomTabs: {
        visible: false
      }
    }
  }
});

export const showEmployeeDirectory = (id) => Navigation.push(id, {
  component: {
    name: constants.EmployeeDirectory,
    options: {
      animations: {
        push: {
          waitForRender: true,
          content: {
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              startDelay: 0,
              interpolation: 'accelerate'
            }
          }
        },
      },
    },
  },
});

export const hideEmployeeDirectory = (id) => Navigation.pop(id,{
  animations: {
    pop: {
      content: {
        alpha: {
          from: 1,
          to: 0,
          duration: 500,
          startDelay: 0,
          interpolation: 'decelerate'
        }
      }
    }
  }
});

export const goToNEB = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: {
            children: [{
              component: {
                name: constants.News,
              },
            }],
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'News',
                icon: require('images/NewsIcon.png'),
                selectedIcon: require('images/NewsIconSelected.png'),
                selectedTextColor: '#0C77F2'
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: constants.Events,
              },
            }],
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Events',
                icon: require('images/EventsIcon.png'),
                selectedIcon: require('images/EventsIconSelected.png'),
                selectedTextColor: '#0C77F2'
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: constants.Benefits,
              },
            }],
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Benefits',
                icon: require('images/BenefitsIcon.png'),
                selectedIcon: require('images/BenefitsIconSelected.png'),
                selectedTextColor: '#0C77F2'
              }
            }
          }
        },
      ],
    },
  }
});