/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
//  StyleSheet,
//  Text,
//  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
//import LoginForm from './src/components/LoginForm';
//import AuthRouter from './src/AuthRouter';
import AppState from './src/components/AppState';

export default class App extends Component<{}> {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDTfQCAf6qUfUzUwbFZqhIV8qIqlGoXiLc',
      authDomain: 'manager-a09c6.firebaseapp.com',
      databaseURL: 'https://manager-a09c6.firebaseio.com',
      projectId: 'manager-a09c6',
      storageBucket: 'manager-a09c6.appspot.com',
      messagingSenderId: '879346779950'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppState />
      </Provider>
    );
  }
}

/**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
**/
