// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import Login from './screens/login/Login';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/main-screen/MainScreen';
import {useEffect} from 'react';
import Immersive from 'react-native-immersive';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      Immersive.on();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
