import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
// import {Button, Icon, Item, Input, Label, Form} from 'native-base';
import {Styles} from './LoginAppStyles';
import {Colors} from './../../configuration/colors/Colors';
// import {TempData} from './tempData';
import firebase from 'firebase';
import fbConf from './../../configuration/fireauth/FirebaseConfig';
import {NavigationNativeContainer} from '@react-navigation/native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

export default class LoginApp extends Component {
  // constructor() {
  //   super();
  //   new Promise((resolve, reject) => {
  //     const b = firebase.auth().currentUser;
  //     if (b) {
  //       resolve(b);
  //       if (b.email) {
  //         const Email = b.email;
  //         console.log(b.email);
  //         this.setState({userNameOrEmail: b.email});
  //       }
  //     } else reject(b);
  //   })
  //     .then(m => {
  //       console.log(m);
  //     })
  //     .catch(m => {
  //       console.log(m);
  //     });
  // }
  // componentDidMount() {
  //   // console.log(Email);
  //   this.setState({userNameOrEmail: this.Email});
  // }
  state = {
    userNameOrEmail: '',
    password: '',
    loginStatus: '',
    signIn: false,
    user: false,
  };
  toggleSignInModal = () => {
    this.setState({signIn: !this.state.signIn});
  };

  signUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.userNameOrEmail,
        this.state.password,
      )
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  }
  signIn(email, password) {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  }

  loginpan() {}

  render() {
    console.log('I am inside render');
    return (
      <View style={Styles.container}>
        {/* <ScrollView style={{alignSelf: 'stretch'}}> */}
        <Modal
          animationType="slide"
          visible={this.state.signIn}
          onRequestClose={() => this.toggleSignInModal()}>
          {/* <AddListModal closeModal={() => this.toggleSignInModal()} /> */}
        </Modal>

        <Image
          style={Styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />

        <View style={{alignSelf: 'stretch'}}>
          <TextInput
            style={Styles.userName}
            placeholder="Username or email"
            autoCapitalize="none"
            onChangeText={text => this.setState({userNameOrEmail: text})}
          />

          <TextInput
            style={Styles.userName}
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            // alignItems: 'center',
            // alignContent: 'space-between',
            marginVertical: 10,
            marginBottom: 30,
            flexDirection: 'row',
          }}>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity
              style={Styles.signinBtn}
              onPress={() => {
                this.signIn(this.state.userNameOrEmail, this.state.password);
              }}>
              <Text
                style={{padding: 10, color: Colors.white, alignSelf: 'center'}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity style={Styles.signUpBtn} onPress={this.signUp}>
              <Text
                style={{padding: 10, color: Colors.white, alignSelf: 'center'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>{this.state.userNameOrEmail}</Text>
          <Text>{this.state.password}</Text>
        </View>
        {/* <View>
            <TouchableOpacity style={Styles.loginFacebook}>
              <Text style={Styles.loginFacebookText}>Sign in with facebook</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: 'center'}}>-OR-</Text>
            <TouchableOpacity style={Styles.loginGoogle}>
              <Text style={Styles.loginGoogleText}>Sign in with Google</Text>
            </TouchableOpacity>
          </View> */}
        {/* </ScrollView> */}
        {/* <Form style={Styles.loginForm}>
            <Item floatingLabel>
              <Label style={Styles.loginTitle}>Username</Label>
              <Input
                autoCapitalize="none"
                autoCompleteType="username"
                style={Styles.loginInput}
                onChangeText={text => this.setState({userName: text})}
              />
            </Item>
  
            <Item floatingLabel>
              <Label style={Styles.loginTitle}>Password</Label>
              <Input
                secureTextEntry
                style={Styles.loginInput}
                onChangeText={text => this.setState({password: text})}
              />
            </Item>
          </Form>
  
          <View style={Styles.loginButtonView}>
            <Button
              block
              info
              iconRight
              onPress={() => {
                if (
                  TempData.usr === this.state.userName &&
                  TempData.psw === this.state.password
                ) {
                  this.setState({loginStatus: 'SucessFully login'});
                  this.props.navigation.navigate('Home');
                } else {
                  this.setState({loginStatus: 'Invalid'});
                }
              }}>
              <Text style={Styles.btnTxtStyle}>Log In </Text>
              <Icon name="arrow-forward" />
            </Button>
          </View> */}
        <Text style={{textAlign: 'center', marginTop: 5}}>
          {this.state.loginStatus}
        </Text>
      </View>
    );
  }
}
