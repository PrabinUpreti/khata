import React, {Component, Fragment} from 'react';
import {View, Image, ImageBackground, Alert} from 'react-native';
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
import {
  Container,
  Header,
  // Button,
  Left,
  Body,
  Icon,
  Title,
  Right,
} from 'native-base';
// import Modal from 'react-native-modal';
import AddCompany from './components/AddCompany';
// import {Icon} from 'react-native-vector-icons/Icon';

import {FAB, Modal, Portal, Text, Button, Provider} from 'react-native-paper';

import {} from 'react-native-paper';

const CompanyList = props => {
  // console.log(props);
  return (
    <View
      style={{
        // elevation: 1,
        backgroundColor: Colors.subBgColor,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Colors.subBgColor,
        width: 130,
        alignSelf: 'stretch',
        // justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        key={props.id}
        onLongPress={() => Alert.alert('Details..', props.name)}
        onPress={() =>
          props.navigate('AddTransaction', {
            name: props.name,
            id: props.id,
            description: props.description,
            // key: props.key,
          })
        }>
        <Image
          source={props.image}
          style={{
            alignSelf: 'center',
            height: 100,
            width: 100,
          }}
        />
        <View
          style={{
            borderTopWidth: 5,
            borderColor: Colors.bgColor,
            marginVertical: 5,
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            color: Colors.white,
            paddingHorizontal: 10,
            textAlign: 'center',
            fontSize: 14,
            // color: Colors.dark,
            fontWeight: 'bold',
          }}>
          {props.name}
          {/* {props.id} */}
        </Text>
        <View
          style={{
            borderTopWidth: 2,
            borderColor: Colors.bgColor,
            marginVertical: 5,
          }}
        />

        <Text
          numberOfLines={1}
          style={{
            color: Colors.white,
            paddingBottom: 10,
            paddingHorizontal: 10,
            textAlign: 'center',
            fontSize: 12,
            // color: Colors.white,
            // fontWeight: 'bold',
          }}>
          {props.description ? props.description : 'No Description'}
          {/* {props.id} */}
        </Text>
      </TouchableOpacity>
    </View>
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
    console.log(name);
    this.setState({coverScreen: true});
    company_name.push({
      companyName: name[0],
      companyDescription: name[1],
      id: company_name.length,
    });
    console.log(company_name);
    this.toggleModal();
  };

  render = () => {
    const {navigate} = this.props.navigation;

    return (
      <>
        {/* <Container style={Styles.container}> */}
        {/* <Header style={{backgroundColor: Colors.subBgColor}}>
            <Body>
              <Title>My Company</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.toggleModal}>
                <Title>ADD</Title>
              </Button>
            </Right>
          </Header> */}
        <Provider>
          <ScrollView
            style={{
              backgroundColor: Colors.bgColor,
            }}>
            <View
              style={{
                flex: 1,
                paddingTop: 5,
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}>
              {company_name.length ? (
                company_name.map(company => (
                  <CompanyList
                    image={require('./../../assets/img/company.png')}
                    navigate={navigate}
                    id={company.id}
                    key={company.id}
                    name={company.companyName}
                    description={company.companyDescription}
                  />
                ))
              ) : (
                <Text style={{color: Colors.gray}}>No datas</Text>
              )}
            </View>
          </ScrollView>
          {/* <View style={Styles.addCompanyBtn}>
          <TouchableNativeFeedback
            style={{elevation: 30}}
            onPress={this.toggleModal}>
            <View
              style={{
                backgroundColor: Colors.primary,
                height: 70,
                borderRadius: 70,
                justifyContent: 'center',
              }}>
              <Text style={Styles.addCompanyBtnText}>+</Text>
            </View>
          </TouchableNativeFeedback>
        </View> */}
          {/* </Container> */}
          <Portal>
            <FAB
              style={{
                position: 'absolute',
                margin: 16,
                right: 0,
                bottom: 0,
              }}
              icon="plus"
              onPress={this.toggleModal}
            />
            <Modal
              visible={this.state.modalStatus}
              onDismiss={() => this.toggleModal()}>
              <AddCompany
                closeModal={() => this.toggleModal()}
                createCompany={name => this.createCompany(name)}
              />
            </Modal>
          </Portal>
        </Provider>
      </>
    );
  };
}
