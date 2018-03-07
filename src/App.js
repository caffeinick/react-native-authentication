import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from 'firebase';

import { Header } from './components/common';

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
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
