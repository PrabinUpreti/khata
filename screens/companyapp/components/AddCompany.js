import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {Colors} from './../../../configuration/colors/Colors';
class AddCompany extends Component {
  state = {
    companyName: '',
    companyNameWarning: '',
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
          <Button
            color={Colors.danger}
            title="Cancel"
            onPress={this.props.closeModal}
          />
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
            color={Colors.primary}
            onPress={() =>
              isNaN(this.state.companyName)
                ? this.props.createCompany(this.state.companyName)
                : this.setState({
                    companyNameWarning: 'Please enter Company Name',
                  })
            }
          />
        </View>

        <KeyboardAvoidingView
          behavior="padding"
          style={{
            // backgroundColor: Colors.lightBlue,
            justifyContent: 'center',
            flex: 1,
            marginHorizontal: 20,
          }}>
          <TextInput
            autoFocus={true}
            style={{
              height: 45,
              borderWidth: 1,
              borderColor: Colors.black,
              paddingHorizontal: 8,
              paddingVertical: 0,
              marginVertical: 0,
            }}
            placeholder="Enter Company name"
            onChangeText={text => this.setState({companyName: text})}
          />

          <Text
            style={{
              color: Colors.danger,
            }}>
            {this.state.companyNameWarning}
          </Text>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default AddCompany;
