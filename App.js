/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'
import Navigation from './src/navigation'

import configureStore from './src/store/configureStore'

const store = configureStore()

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
