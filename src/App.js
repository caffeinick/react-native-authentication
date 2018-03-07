import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: "AIzaSyCRNvKMBcev5SF-xUPTymzhwZqeJBgS1FQ",
      authDomain: "auth-a06ee.firebaseapp.com",
      databaseURL: "https://auth-a06ee.firebaseio.com",
      projectId: "auth-a06ee",
      storageBucket: "auth-a06ee.appspot.com",
      messagingSenderId: "1035003234979"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
