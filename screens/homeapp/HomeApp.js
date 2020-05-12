import React, {Component} from 'react';
import {View, Text} from 'native-base';
class HomeApp extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Dashboard !</Text>
      </View>
    );
  }
}

export default HomeApp;
