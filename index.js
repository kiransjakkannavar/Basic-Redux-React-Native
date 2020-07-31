/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'



AppRegistry.registerComponent(appName, () => App);
