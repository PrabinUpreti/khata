import React, {Component} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import {} from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign';
export default class SignUpAdd extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{position: 'absolute', top: 32, right: 32}}
          onPress={this.props.closeModal}>
          <Text>xcbkjxcbj</Text>
          <Icon name="close" size={24} color={colors.black} />
        </TouchableOpacity>
      </View>
    );
  }
}
