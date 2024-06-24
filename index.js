/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App';
import { PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
