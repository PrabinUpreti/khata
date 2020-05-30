import React, {Component, Fragment} from 'react';
import {View, Image, ImageBackground, Alert} from 'react-native';
import {Colors} from './../../configuration/colors/Colors';
import {Styles} from './CompanyAppStyles';
import {
  companyName,
  companyTransaction,
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
  Right,
} from 'native-base';
// import Modal from 'react-native-modal';
import AddCompany from './components/AddCompany';
// import {Icon} from 'react-native-vector-icons/Icon';

import {
  FAB,
  Modal,
  Portal,
  List,
  Text,
  Button,
  Provider,
  Card,
  Title,
  Paragraph,
  Avatar,
  DataTable,
  Subheading,
  Divider,
} from 'react-native-paper';

import {} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const CompanyList = props => {
  props = props.datas;
  // console.log(props.logo);
  return (
    <>
      <Card
        elevation={3}
        onPress={() => alert('wow')}
        style={{marginBottom: 10}}>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                // backgroundColor: Colors.danger,
              }}>
              <Image
                source={require('./../../assets/img/company.png')}
                style={{height: 100, width: 100}}
              />
            </View>
            <View style={{paddingLeft: 20}}>
              <Title numberOfLines={1}>{props.name}</Title>
              <Paragraph numberOfLines={1}>{props.companyAddress}</Paragraph>
              <Paragraph numberOfLines={1}>{props.email}</Paragraph>
            </View>
          </View>
          <Divider style={{marginVertical: 10}} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{marginRight: 10}}>
              <Title>Propiter</Title>
              <Paragraph>{props.propiterName}</Paragraph>
            </View>

            <View style={{marginRight: 10}}>
              <Title>Phone</Title>
              <Paragraph>{props.phone}</Paragraph>
            </View>

            <View style={{marginRight: 0}}>
              <Title>PAN</Title>
              <Paragraph>{props.panNumber}</Paragraph>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* <View
        style={{
          backgroundColor: Colors.primary,
          marginBottom: 10,
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: Colors.primary,
          width: 130,
          alignSelf: 'stretch',
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
            source={require('./../../assets/img/company.png')}
            style={{
              alignSelf: 'center',
              height: 100,
              width: 100,
            }}
          />
          <View
            style={{
              borderTopWidth: 5,
              borderColor: Colors.white,
              marginVertical: 5,
            }}
          />
          <Text
            numberOfLines={1}
            style={{
              color: Colors.dark,
              paddingHorizontal: 10,
              textAlign: 'center',
              fontSize: 14,
              // color: Colors.dark,
              fontWeight: 'bold',
            }}>
            {props.name}
            {props.id} 
          </Text>
          <View
            style={{
              borderTopWidth: 2,
              borderColor: Colors.white,
              marginVertical: 5,
            }}
          />

          <Text
            numberOfLines={1}
            style={{
              color: Colors.dark,
              paddingBottom: 10,
              paddingHorizontal: 10,
              textAlign: 'center',
              fontSize: 12,
            }}>
            {props.description ? props.description : 'No Description'}
          </Text>
        </TouchableOpacity>
      </View> */}
    </>
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
    companyName.push({
      name: name[0],
      description: name[1],
      id: companyName.length,
    });
    console.log(companyName);
    this.toggleModal();
  };

  render = () => {
    const {navigate} = this.props.navigation;

    return (
      <Fragment>
        <View style={{backgroundColor: Colors.lightBlue, marginBottom: 2}}>
          <ScrollView
            style={{
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flex: 1,
                paddingTop: 5,
              }}>
              {companyName.length ? (
                companyName.map(company => (
                  <CompanyList
                    navigate={navigate}
                    id={company.id}
                    key={company.id}
                    datas={company}
                  />
                ))
              ) : (
                <Text style={{color: Colors.black, alignSelf: 'center'}}>
                  No datas
                </Text>
              )}
            </View>
          </ScrollView>
        </View>
        <Provider>
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
          </Portal>
        </Provider>

        <Provider>
          <Portal>
            <Modal
              contentContainerStyle={{
                marginTop: 20,
              }}
              visible={this.state.modalStatus}
              onDismiss={() => this.toggleModal()}>
              <AddCompany
                closeModal={() => this.toggleModal()}
                createCompany={name => this.createCompany(name)}
              />

              {/* <TextInput
                label="Company Name*"
                mode="flat"
                // autoFocus={true}
                style={{
                  borderColor: Colors.danger,
                  color: Colors.white,
                  backgroundColor: Colors.white,
                  marginVertical: 5,
                }}
                placeholder="Enter Company name"
                onChangeText={text => this.setState({name: text})}
              /> */}
            </Modal>
          </Portal>
        </Provider>
      </Fragment>
    );
  };
}
