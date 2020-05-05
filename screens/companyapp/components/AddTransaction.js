import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';
import {Colors} from './../../../configuration/colors/Colors';
import {ComContent} from './../../../configuration/firestore/tempData';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'native-base';

LoadTransaction = props => {
  return (
    <Fragment>
      {console.log('transactions', props)}
      {props.value.length ? (
        props.value.map((a, b) => <DesignLoadTransactions key={b} value={a} />)
      ) : (
        <Text>No Datas</Text>
      )}
    </Fragment>
  );
};
DesignLoadTransactions = props => {
  console.log(props);
  return (
    // <ScrollView>
    <TouchableOpacity
      style={{
        marginBottom: 10,
        marginHorizontal: 10,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor:
          props.value.account === 'dr' ? Colors.danger : Colors.sucess,
      }}>
      <Text
        style={{
          alignSelf: 'flex-start',
          fontSize: 18,
          fontWeight: '900',
          paddingHorizontal: 10,
          paddingVertical: 5,
          color: Colors.white,
        }}>
        {props.value.description}
      </Text>
      <View
        style={{
          alignSelf: 'stretch',
          borderTopWidth: 1,
          borderColor: Colors.white,
          marginHorizontal: 5,
        }}
      />
      <View
        style={{
          // alignSelf: 'flex-end',
          fontSize: 15,

          paddingHorizontal: 10,
          paddingBottom: 20,
          color: Colors.black,
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: Colors.white,
          }}>
          {''} {props.value.day} {props.value.month} {props.value.year}
        </Text>
        <Text
          style={{
            color: Colors.white,
          }}>
          {props.value.time}
        </Text>
        <Text
          style={{
            color: Colors.white,
          }}>
          Rs. {props.value.amount}
        </Text>
        <Text
          style={{
            color: Colors.white,
          }}>
          {props.value.account == 'dr' ? 'Debited' : 'Credited'}
        </Text>
      </View>
    </TouchableOpacity>
    // </ScrollView>
  );
};

class AddTransaction extends Component {
  newArray = [];

  state = {};
  render() {
    ComContent.length
      ? (this.newArray = ComContent.filter(a => {
          return a.comId === this.props.route.params.id;
        }))
      : null;
    // console.log(ComContent);
    // console.log(this.props.route.params.name, this.props.route.params.id);
    return (
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ScrollView style={{alignSelf: 'stretch', marginTop: 10}}>
          {this.newArray.length ? (
            this.newArray.map(d => (
              <LoadTransaction key={d.comId} value={d.transactions} />
            ))
          ) : (
            <Text>No Datas</Text>
          )}
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.info,
            alignSelf: 'stretch',
            marginTop: 5,
          }}
          onPress={this.toggleModal}>
          <Text
            style={{
              margin: 10,
              color: Colors.white,
              fontSize: 20,
              alignSelf: 'center',
            }}>
            Add Transaction
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTransaction;
