import { Navigation } from 'react-native-navigation';

import Home from '../screens/home';
import Detail from '../screens/detail';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Detail', () => Detail);
}