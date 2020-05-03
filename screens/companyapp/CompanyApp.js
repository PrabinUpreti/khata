import React, {Component, Fragment} from 'react';
import {View, Text, Modal, Button} from 'react-native';
import {Colors} from './../../configuration/colors/Colors';
import {Styles} from './CompanyAppStyles';
import {Com, ComContent} from './../../configuration/firestore/tempData';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';
import {} from 'native-base';
import AddCompany from './components/AddCompany';

const CompanyList = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.green,
        marginBottom: 5,
        alignSelf: 'stretch',
        borderRadius: 10,
      }}
      onPress={() =>
        props.navigate('AddTransaction', {name: props.value, id: props.id})
      }>
      <Text
        style={{
          color: Colors.white,
          padding: 10,
          textAlign: 'center',
          fontSize: 20,
        }}>
        {props.value}
        {/* {props.id} */}
      </Text>
    </TouchableOpacity>
  );
};

export default class CompanyApp extends Component {
  state = {
    active: false,
    modalStatus: false,
  };
  toggleModal = () => {
    this.setState({modalStatus: !this.state.modalStatus});
  };
  createCompany = name => {
    Com.push({companyName: name, id: Com.length});
    this.toggleModal();
  };

  render = () => {
    const {navigate} = this.props.navigation;

    return (
      <View style={Styles.container}>
        <ScrollView
          style={{alignSelf: 'stretch', paddingHorizontal: 20, marginTop: 10}}>
          <View>
            {Com.length ? (
              Com.map(company => (
                <CompanyList
                  navigate={navigate}
                  id={company.id}
                  key={company.id}
                  value={company.companyName}
                />
              ))
            ) : (
              <Text>No datas</Text>
            )}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={Styles.addCompanyBtn}
          onPress={this.toggleModal}>
          <Text style={Styles.addCompanyBtnText}>Add Company</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          visible={this.state.modalStatus}
          onRequestClose={() => this.toggleModal()}>
          <AddCompany
            closeModal={() => this.toggleModal()}
            createCompany={name => this.createCompany(name)}
          />
        </Modal>
      </View>
    );
  };
}
