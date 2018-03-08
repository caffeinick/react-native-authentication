import React, { Component } from 'react';
import { Text } from 'react-native';
import Firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password, loading } = this.state;

    this.setState({ error: '', loading: true });

    Firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  };

  render() {
    const { email, password, error } = this.state;
    
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

        <Text style={styles.errorTextStyle}>
          {error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

export default LoginForm;
