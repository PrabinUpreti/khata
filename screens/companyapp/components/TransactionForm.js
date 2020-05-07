import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Picker,
  Button,
  CheckBox,
} from 'react-native';
import {Colors} from './../../../configuration/colors/Colors';
import {TextInput} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

class TransactionForm extends Component {
  state = {
    company_name_id: null,
    transactions: [
      {
        id: null,
        remarks: '',
        year: null,
        month: '',
        day: null,
        time: '',
        amount: null,
        status: '',
        transaction_to: '',
        transaction_from: '',
        documents: [],
      },
    ],
    date: new Date(1598051730000),
    mode: 'date',
    show: false,
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    // this.setState(Platform.OS === 'ios');
    this.setState({date: currentDate});
  };

  showMode = currentMode => {
    this.setState({show: true});
    this.setState({mode: currentMode});
  };

  showDatepicker = () => {
    this.setState({mode: 'date'});
    this.setState({show: true});
  };

  showTimepicker = () => {
    this.setState({mode: 'time'});
    this.setState({show: true});
  };

  render() {
    console.log('transactions', this.props);
    return (
      <Fragment>
        <TouchableOpacity
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              backgroundColor: Colors.danger,
              color: Colors.white,
              fontSize: 20,
              padding: 10,
            }}
            onPress={() => this.props.closeModal()}>
            cancel
          </Text>
          <Text
            style={{
              backgroundColor: Colors.primary,
              color: Colors.white,
              fontSize: 20,
              padding: 10,
            }}
            onPress={() => this.props.closeModal()}>
            Okay
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 8}}>
          <Text>Amount</Text>
          <TextInput
            placeholder="Enter Transaction Amount"
            autoFocus={true}
            style={{
              height: 40,
              borderColor: Colors.gray,
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          />
          <Text>Remark</Text>
          <TextInput
            placeholder="Enter Transaction Amount"
            style={{
              height: 40,
              borderColor: Colors.gray,
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          />
          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateUser}>
            <Picker.Item label="Hello" value="steve" />
            <Picker.Item label="Ellen" value="ellen" />
            <Picker.Item label="Maria" value="maria" />
          </Picker>
          <CheckBox />

          <View>
            <Button onPress={this.showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={this.showTimepicker} title="Show time picker!" />
          </View>
          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={this.state.date}
              mode={this.state.mode}
              is24Hour={true}
              display="default"
              onChange={this.onChange}
            />
          )}
        </View>
      </Fragment>
    );
  }
}

export default TransactionForm;
