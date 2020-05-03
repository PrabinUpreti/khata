// import FireBase from './FireBase';

import React, {Component} from 'react';

import CompanyApp from './../../screens/companyapp/CompanyApp';
import LoginApp from './../../screens/loginapp/LoginApp';
import FireAuth from './../fireauth/FireAuth';
import AddTransaction from './../../screens/companyapp/components/AddTransaction';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              title: 'Companies',
              headerStyle: {
                backgroundColor: '#f55',
              },
              headerTintColor: '#fff',
            }}
            component={CompanyApp}
          />
          <Stack.Screen
            name="AddTransaction"
            options={({route}) => ({title: route.params.name})}
            component={AddTransaction}
          />

          <Stack.Screen
            name="CheckUser"
            options={{title: 'Check User'}}
            component={FireAuth}
          />
          <Stack.Screen
            name="Login"
            component={LoginApp}
            options={{
              title: 'Sign In',
              headerTransparent: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
