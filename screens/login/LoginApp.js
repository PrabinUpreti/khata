import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon, Item, Input, Label, Form} from 'native-base';
import {Styles} from './LoginAppStyles';
import {Colors} from '../../Colors';
import {TempData} from './tempData';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class LoginApp extends Component {
  state = {
    userName: '',
    password: '',
    loginStatus: '',
  };
  render(navigation) {
    return (
      <View style={Styles.container}>
        <Form style={Styles.loginForm}>
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
            onPress={() => navigation.navigate('Details')}
            onPress={() => {
              if (
                TempData.usr === this.state.userName &&
                TempData.psw === this.state.password
              ) {
                this.setState({loginStatus: 'SucessFully login'});
                () => {
                  LoginApp.navigate('Home');
                };
              } else {
                this.setState({loginStatus: 'Invalid'});
              }
            }}>
            <Text style={Styles.btnTxtStyle}>Log In </Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
        <Text style={{textAlign: 'center', marginTop: 5}}>
          {this.state.loginStatus}
        </Text>
      </View>
    );
  }
}
