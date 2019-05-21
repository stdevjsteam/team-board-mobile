import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { screens } from './constants';
import { store } from 'store';


export function registerScreens() {
  // console.log('store',store.getState());
  Object.keys(screens).forEach(name => {
    Navigation.registerComponentWithRedux(name,screens[name],Provider,store);
  })
}