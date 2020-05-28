import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {Colors} from './../../configuration/colors/Colors';
class HomeApp extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.bgColor,
        }}>
        <Text style={{color: Colors.gray}}>Dashboard !</Text>
      </View>
    );
  }
}

export default HomeApp;
