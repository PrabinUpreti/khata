import firebase, {firestore, auth} from 'firebase';
import Auth from './FirebaseConfig';
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
    loginStatus: null,
  };
  componentDidMount() {
    Auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({loginStatus: true});
      } else {
        console.log('No User');
      }
    });
  }

  render() {
    console.log(this.state.loginStatus);
    this.state.loginStatus
      ? this.props.navigation.navigate('Home')
      : this.props.navigation.navigate('Login');

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...</Text>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}
