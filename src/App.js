import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    Firebase.initializeApp({
      apiKey: "AIzaSyCRNvKMBcev5SF-xUPTymzhwZqeJBgS1FQ",
      authDomain: "auth-a06ee.firebaseapp.com",
      databaseURL: "https://auth-a06ee.firebaseio.com",
      projectId: "auth-a06ee",
      storageBucket: "auth-a06ee.appspot.com",
      messagingSenderId: "1035003234979"
    });

    Firebase.auth().onAuthStateChanged((user) => {
      if(user) {
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
          <Button onPress={() => Firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
