import React, {Component, Fragment} from 'react';
import {View, Text, Button} from 'react-native';
import {Colors} from './../../configuration/colors/Colors';
import {Styles} from './CompanyAppStyles';
import {
  company_name,
  company_transaction,
} from './../../configuration/firestore/tempData';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {} from 'native-base';
import Modal from 'react-native-modal';
import AddCompany from './components/AddCompany';

const CompanyList = props => {
  // console.log(props);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        elevation: 3,
        backgroundColor: Colors.info,
        marginBottom: 5,
        alignSelf: 'stretch',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
      key={props.id}
      onPress={() =>
        props.navigate('AddTransaction', {
          name: props.value,
          id: props.id,
          // key: props.key,
        })
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
    coverScreen: false,
  };
  toggleModal = () => {
    this.setState({modalStatus: !this.state.modalStatus});

    setTimeout(() => {
      this.setState({coverScreen: false});
    }, 500);
  };
  createCompany = name => {
    this.setState({coverScreen: true});
    company_name.push({companyName: name, id: company_name.length});
    this.toggleModal();
  };

  render = () => {
    const {navigate} = this.props.navigation;

    return (
      <View style={Styles.container}>
        <ScrollView
          style={{
            alignSelf: 'stretch',
            backgroundColor: Colors.blue,
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <View>
            {company_name.length ? (
              company_name.map(company => (
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
          <View style={Styles.addCompanyBtn}>
            <TouchableNativeFeedback
              style={{elevation: 3}}
              onPress={this.toggleModal}>
              <View style={{backgroundColor: Colors.info}}>
                <Text style={Styles.addCompanyBtnText}>+</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>

        <Modal
          animationIn="slideInLeft"
          animationInTiming={500}
          avoidKeyboard={true}
          animationOut="slideOutRight"
          animationOutTiming={500}
          coverScreen={this.state.coverScreen}
          style={{
            // alignItems: 'stretch',
            marginTop: -50,
            // paddingVertical: 0,
            // backgroundColor: Colors.primary,
            // marginHorizontal: 0,
          }}
          isVisible={this.state.modalStatus}>
          <AddCompany
            closeModal={() => this.toggleModal()}
            createCompany={name => this.createCompany(name)}
          />
        </Modal>
      </View>
    );
  };
}
