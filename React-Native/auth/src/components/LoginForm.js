import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', error: '', loading: false });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false })
  }

  renderButton() {
    if(this.state.loading){
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render(){
    return (
      <Card>

        <CardSection>
          <Input 
            placeholder="user@gmail.com"
            label="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            placeholder="password"
            label="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>


        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;