import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

export default class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDEeMD2UWJ5EKD8MthyVstU-uxiMyObgHY',
      authDomain: 'manager-15aad.firebaseapp.com',
      databaseURL: 'https://manager-15aad.firebaseio.com',
      projectId: 'manager-15aad',
      storageBucket: 'manager-15aad.appspot.com',
      messagingSenderId: '725435752378'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}