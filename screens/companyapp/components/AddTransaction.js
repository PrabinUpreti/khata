import React, {Component, Fragment} from 'react';
import {View, Text, Modal, KeyboardAvoidingView} from 'react-native';
import {Colors} from './../../../configuration/colors/Colors';
import {company_transaction} from './../../../configuration/firestore/tempData';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'native-base';
import TransactionForm from './TransactionForm';

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
      activeOpacity={0.9}
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
  toggleModal = () => this.setState({modalStatus: !this.state.modalStatus});
  createTransaction = value => {};

  newArray = [];

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
    modalStatus: false,
  };
  render() {
    company_transaction.length
      ? (this.newArray = company_transaction.filter(a => {
          return a.company_name_id === this.props.route.params.id;
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
              <LoadTransaction key={d.company_name_id} value={d.transactions} />
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

        <Modal
          animationType="slide"
          visible={this.state.modalStatus}
          onRequestClose={() => this.toggleModal()}>
          <TransactionForm
            closeModal={() => this.toggleModal()}
            createTransaction={value => this.createTransaction(value)}
          />
        </Modal>
      </View>
    );
  }
}

export default AddTransaction;
