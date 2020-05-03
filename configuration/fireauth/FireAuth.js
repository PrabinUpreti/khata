import firebase, {firestore, auth} from 'firebase';
import {fbConf} from './FirebaseConfig';
import '@firebase/firestore';
import '@firebase/auth';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {View, Text} from 'native-base';
// import Routes from './Routes';

// import HomeApp from './screens/home/HomeApp';
// import LoginApp from './screens/login/LoginApp';

export default class FireAuth extends Component {
  state = {
    loginStatus: false,
  };
  componentDidMount = () => {
    this.init();
  };
  init = () => {
    let user = new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(user.email);
        } else {
          reject('No user logged in..');
        }
      });
    });

    console.log(user);
  };

  render() {
    console.log(this.state.loginStatus);
    if (this.state.loginStatus) {
      this.props.navigation.navigate('Home');
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
        <ActivityIndicator size={'large'} />
      </View>
    );
    // } while (!this.state.loginStatus);

    // return (
    //   <View>
    //     <Text>Hello World How Are You Man</Text>
    //   </View>
    // );
  }
}
