import React, {Component} from 'react';
import {View, Text, Picker, Alert} from 'react-native';
import Dropdown from './Dropdown';
import {TextInput, Appbar, Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '../../configuration/colors/Colors';
// import {Picker} from 'native-base';
import {
  companyName,
  companyTransaction,
} from '../../configuration/firestore/tempData';
export default class SendInvoiceApp extends Component {
  constructor() {
    super();
    alert('hello');
  }
  componentWillMount() {
    alert('hello componentwillmount');
  }
  componentDidMount() {
    // companyName.map(val, index => {});
    alert('hello1');
  }
  state = {
    company: {},
    customer: {},
  };
  render() {
    alert('hello2');

    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Picker
            prompt="Select Company"
            mode="dialog"
            style={{width: '49%'}}
            selectedValue={this.state.company}
            // onValueChange={this.updateUser}
          >
            {companyName.map(val => (
              <Picker.Item label={val.name} value="ellen" />
            ))}
          </Picker>

          <Picker
            style={{width: '49%'}}
            selectedValue={this.state.company}
            // onValueChange={this.updateUser}
          >
            <Picker.Item label="Select Customer" value="steve" />
            <Picker.Item label="Ellen" value="ellen" />
            <Picker.Item label="Maria" value="maria" />
          </Picker>
        </View>
        <View />
        <Divider />
        <View style={{alignItems: 'flex-end'}}>
          <Text>Add More Product or services</Text>
        </View>
        {/* <Dropdown placeholder="Select Company" /> */}
      </View>
    );
  }
}
