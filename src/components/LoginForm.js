import React, { Component } from 'react';
import Firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;

    Firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    const { email, password } = this.state;
    
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@gmail.com"
            label="Email"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry // define -> true!
            value={password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
