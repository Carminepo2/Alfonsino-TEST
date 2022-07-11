/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from './src/redux/hooks';
import PartnersStackNavigator from './src/navigation/PartnersStackNavigator';

const App = () => {
  const isLoggedIn = useAppSelector(state => !!state.auth.token);

  if (!isLoggedIn) {
    return <LoginScreen />;
  }
  return <PartnersStackNavigator />;
};

const Root = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Root;
