/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import firebase from 'firebase';

import {Header, Button, Spinner} from './src/component/common';
import LoginForm from './src/component/LoginForm';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      user: {}
    };
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        {this.renderView()}
      </View>
    );
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBTAxOvh3of8uBnHkcpGShM8DaLSNmuqnI",
      authDomain: "authentication-8fcb4.firebaseapp.com",
      databaseURL: "https://authentication-8fcb4.firebaseio.com",
      projectId: "authentication-8fcb4",
      storageBucket: "authentication-8fcb4.appspot.com",
      messagingSenderId: "997578259087"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true, user});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderView() {
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonContainer}>
            <Button onPress={() => {firebase.auth().signOut()}}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm/>
      default:
        return <Spinner/>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
}
});
