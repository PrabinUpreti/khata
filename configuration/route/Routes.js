// import FireBase from './FireBase';

import React, {Component} from 'react';
import {Button, Text, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import {Colors} from './../colors/Colors';

import FireAuth from './../fireauth/FireAuth';
import LoginApp from './../../screens/loginapp/LoginApp';
import CompanyApp from './../../screens/companyapp/CompanyApp';
import HomeApp from '../../screens/homeapp/HomeApp';
import AddTransaction from './../../screens/companyapp/components/AddTransaction';
import {
  TouchableOpacity,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {Icon} from 'react-native-vector-icons/AntDesign';
import {View} from 'native-base';
import Auth from './../../configuration/fireauth/FirebaseConfig';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
LogOut = () => {
  Auth.signOut();
  return <></>;
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeApp} />
      <Tab.Screen name="More" component={CompanyApp} />
      <Tab.Screen name="Profile" component={LogOut} />
    </Tab.Navigator>
  );
}
export default class Routes extends Component {
  componentDidMount() {
    Auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({isAuth: true, splashScreen: false});
      } else {
        console.log('No User');
        this.setState({isAuth: false, splashScreen: false});
      }
    });
  }
  state = {
    isAuth: false,
    splashScreen: true,
  };

  render() {
    return (
      <>
        {this.state.splashScreen ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Loading...</Text>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <>
            <NavigationContainer>
              <Stack.Navigator>
                {this.state.isAuth ? (
                  <>
                    <Stack.Screen
                      options={{
                        headerShown: false,
                      }}
                      name="Home"
                      component={MyTabs}
                    />
                  </>
                ) : (
                  <Stack.Screen
                    name="Login"
                    component={LoginApp}
                    options={{
                      headerShown: false,
                      headerTransparent: false,
                    }}
                  />
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </>
        )}
      </>
    );
  }
}
