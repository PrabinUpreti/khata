import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
// import {Button, Icon, Item, Input, Label, Form} from 'native-base';
import {Styles} from './LoginAppStyles';
import {Colors} from './../../configuration/colors/Colors';
// import {TempData} from './tempData';
import Auth from './../../configuration/fireauth/FirebaseConfig';

export default class LoginApp extends Component {
  state = {
    userNameOrEmail: '',
    password: '',
    loginStatus: '',
    signIn: false,
    user: false,
    showLoader: false,
  };
  toggleSignInModal = () => {
    this.setState({signIn: !this.state.signIn});
  };

  // signUp() {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(
  //       this.state.userNameOrEmail,
  //       this.state.password,
  //     )
  //     .catch(function(error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorMessage, errorCode);
  //     });
  // }
  signIn(email, password) {
    this.setState({showLoader: true});
    console.log(email, password);
    Auth.signInWithEmailAndPassword(email, password)
      .then(cred => {
        console.log(cred);
        this.setState({showLoader: true});
      })
      .catch(err => {
        console.log(err);
        this.setState({showLoader: true});
      });
  }
  render() {
    return (
      <>
        {this.state.showLoader ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Loading...</Text>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <ImageBackground
            resizeMode="cover"
            blurRadius={0.8}
            source={require('./../../assets/img/bg.jpg')}
            style={Styles.container}>
            <View style={{marginBottom: 20}}>
              <TextInput
                style={Styles.textArea}
                placeholder="Username or email"
                autoCapitalize="none"
                onChangeText={text => this.setState({userNameOrEmail: text})}
              />
            </View>
            <View>
              <TextInput
                style={Styles.textArea}
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={text => this.setState({password: text})}
              />
            </View>
            <TouchableNativeFeedback
              onPress={() => {
                this.signIn(this.state.userNameOrEmail, this.state.password);
              }}>
              <View style={Styles.signinBtn}>
                <Text
                  style={{
                    padding: 10,
                    color: Colors.white,
                    fontWeight: 'bold',
                    fontSize: 18,
                    alignSelf: 'center',
                  }}>
                  Sign In
                </Text>
              </View>
            </TouchableNativeFeedback>
            {/* <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{borderBottomWidth: 1, borderColor: Colors.black}} />
          <View style={{}}>
            <Text>OR</Text>
          </View>
          <View style={{borderBottomWidth: 1, borderColor: Colors.black}} />
        </View>

        <TouchableNativeFeedback
          onPress={() => {
            this.signIn(this.state.userNameOrEmail, this.state.password);
            this.props.navigation.navigate('Home');
          }}>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              borderRadius: 0,
            }}>
            <Text
              style={{
                color: Colors.danger,
                fontWeight: 'bold',
                fontSize: 18,
                alignSelf: 'center',
                padding: 10,
              }}>
              Register new account..
            </Text>
          </View>
        </TouchableNativeFeedback> */}
          </ImageBackground>
        )}
      </>
    );
  }
}
