import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  state = { loggedIn: null }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAE_4qRcAEQobLrqwynPXI8J-RjGG0pIOI',
      authDomain: 'auth-d39e0.firebaseapp.com',
      databaseURL: 'https://auth-d39e0.firebaseio.com',
      projectId: 'auth-d39e0',
      storageBucket: 'auth-d39e0.appspot.com',
      messagingSenderId: '376099818488'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return (
          <LoginForm />
        )
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}