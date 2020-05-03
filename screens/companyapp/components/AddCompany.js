import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Colors} from './../../../configuration/colors/Colors';
class AddCompany extends Component {
  state = {
    companyName: '',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            top: 0,
            left: 0,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Button title="Cancel" onPress={this.props.closeModal} />
        </View>
        <View
          style={{
            top: 0,
            left: 0,
            alignItems: 'flex-end',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
          }}>
          <Button
            title="Okay"
            onPress={() => this.props.createCompany(this.state.companyName)}
          />
        </View>
        <View
          style={{
            // backgroundColor: Colors.lightBlue,
            justifyContent: 'center',
            flex: 1,
            marginHorizontal: 20,
          }}>
          <TextInput
            autoFocus
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: Colors.black,
              paddingHorizontal: 20,
            }}
            placeholder="Enter Company name"
            onChangeText={text => this.setState({companyName: text})}
          />
        </View>
        <Text>{this.state.companyName}</Text>
      </View>
    );
  }
}

export default AddCompany;
