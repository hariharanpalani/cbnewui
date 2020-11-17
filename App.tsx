/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/containers/navigation/mainnavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
};

export default App;
