/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { registerScreens } from './src/screens';

import * as constants from 'screens/constants';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: constants.Registration
      }
    }
  });
});