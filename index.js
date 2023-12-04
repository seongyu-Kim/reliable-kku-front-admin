/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
//

messaging().setBackgroundMessageHandler(async msg => {
  console.log(msg);
});

messaging().onMessage(async msg => {
  console.log(msg);
});

messaging().onNotificationOpenedApp(remoteMessage => {
  console.log(
    'Notification caused app to open from background state:',
    remoteMessage,
  );
});
AppRegistry.registerComponent(appName, () => App);
