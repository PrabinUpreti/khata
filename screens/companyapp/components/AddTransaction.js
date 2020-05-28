import React, {Component, Fragment} from 'react';
import {View, Text, Modal, KeyboardAvoidingView} from 'react-native';
import {Colors} from './../../../configuration/colors/Colors';
import {company_transaction} from './../../../configuration/firestore/tempData';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import TransactionForm from './TransactionForm';
import {
  FAB,
  Avatar,
  Button,
  IconButton,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

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
    <>
      <Card
        style={{
          backgroundColor: Colors.subBgColor,
          margin: 3,
          elevation: 3,
        }}>
        <Card.Content>
          <Title
            style={{
              color:
                props.value.status === 'dr' ? Colors.danger : Colors.sucess,
            }}>
            {props.value.remarks}
          </Title>
          <Paragraph style={{color: Colors.white}}>
            {props.value.day} {props.value.month} {props.value.year}
          </Paragraph>

          <Paragraph style={{color: Colors.white}}>
            Rs. {props.value.amount}
          </Paragraph>
          <Paragraph style={{color: Colors.white}}>
            {props.value.time}
          </Paragraph>
          <Paragraph style={{color: Colors.white}}>
            {props.value.status == 'dr' ? 'Debit' : 'Credit'}
          </Paragraph>
        </Card.Content>
      </Card>

      {/* <TouchableOpacity
        activeOpacity={0.9}
        style={{
          marginBottom: 10,
          marginHorizontal: 10,
          // borderTopLeftRadius: 20,
          // borderBottomRightRadius: 20,
          backgroundColor: Colors.subBgColor,
        }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: '900',
            paddingHorizontal: 10,
            paddingVertical: 5,
            color: props.value.status === 'dr' ? Colors.danger : Colors.sucess,
          }}>
          {props.value.remarks}
        </Text>
        <View
          style={{
            alignSelf: 'stretch',
            borderTopWidth: 2,
            borderColor: Colors.bgColor,
            marginHorizontal: 0,
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
            {props.value.status == 'dr' ? 'Debit' : 'Credit'}
          </Text>
        </View>
      </TouchableOpacity> */}
    </>
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
          backgroundColor: Colors.bgColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScrollView style={{alignSelf: 'stretch', marginTop: 10}}>
          {this.newArray.length ? (
            this.newArray.map(d => (
              <LoadTransaction key={d.company_name_id} value={d.transactions} />
            ))
          ) : (
            <Text style={{alignSelf: 'center', color: Colors.gray}}>
              No Datas
            </Text>
          )}
        </ScrollView>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}

        <Modal
          animationType="slide"
          visible={this.state.modalStatus}
          onRequestClose={() => this.toggleModal()}>
          <TransactionForm
            closeModal={() => this.toggleModal()}
            createTransaction={value => this.createTransaction(value)}
          />
        </Modal>
        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: Colors.bigBgColorsWithTransparency,
          }}
          // label="Add transaction"
          icon="plus"
          theme={{dark: false}}
          color={Colors.white}
          onPress={this.toggleModal}
        />
      </View>
    );
  }
}

export default AddTransaction;
