import React, {Component} from 'react';
import Routes from './configuration/route/Routes';
import {View, Text} from 'react-native';

export default class App extends Component {
  state = {
    user: '',
    userId: '',
  };
  render() {
    return <Routes />;
  }
}
