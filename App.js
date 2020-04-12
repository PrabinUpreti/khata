import React, {Component} from 'react';
import LoginApp from './screens/login/LoginApp';
import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from './Colors';
import HomeApp from './screens/home/HomeApp';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Log In" component={LoginApp} />
          <Stack.Screen name="Home" component={HomeApp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
