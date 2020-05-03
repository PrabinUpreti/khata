import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';
import {Colors} from './../../../configuration/colors/Colors';
import {ComContent} from './../../../configuration/firestore/tempData';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

LoadTransaction = props => {
  return (
    <Fragment>
      {console.log('transactions', props.value)}
      {props.value.length ? (
        props.value.map(a => <DesignLoadTransactions key={a.id} value={a} />)
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
        borderRadius: 8,
        backgroundColor: props.value.account === 'dr' ? '#f55' : '#5f5',
      }}>
      <Text
        style={{
          alignSelf: 'flex-start',
          fontSize: 18,
          paddingHorizontal: 10,
          paddingVertical: 20,
          color: Colors.black,
        }}>
        {props.value.description}
      </Text>

      <Text
        style={{
          alignSelf: 'flex-end',
          fontSize: 18,
          paddingHorizontal: 10,
          paddingBottom: 20,
          color: Colors.black,
        }}>
        {props.value.month}/{props.value.day}
      </Text>
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
      <View style={{}}>
        <ScrollView style={{alignContent: 'center', marginTop: 10}}>
          {this.newArray.length ? (
            this.newArray.map(d => (
              <LoadTransaction key={d.comId} value={d.transactions} />
            ))
          ) : (
            <Text>No Datas</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default AddTransaction;
