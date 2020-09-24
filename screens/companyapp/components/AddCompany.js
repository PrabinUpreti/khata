import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from './../../../configuration/colors/Colors';
import ImagePicker from 'react-native-image-picker';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, Appbar, Divider} from 'react-native-paper';

// const options = {
//   title: 'Select Avatar',
//   // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */

class AddCompany extends Component {
  state = {
    // name: 'Radha krishna Kutani Pisani Mill ',
    // companyAddress: 'This Mill is the one and only a fevroit mill',
    name: '',
    companyAddress: '',
    propiterName: '',
    panNumber: '',
    phone: '',
    website: '',
    email: '',
    zip: '',
    logo: '',

    companyNameWarning: false,
    avatarSource: null,
    backimg: require('./../../../assets/img/company.png'),
  };

  selectImage = async () => {
    ImagePicker.showImagePicker(
      {noData: true, mediaType: 'photo'},
      response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.uri};
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
            avatarSource: source,
          });
        }
      },
    );
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.white,
          justifyContent: 'center',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
            paddingRight: 20,
            marginVertical: 10,
            // backgroundColor: Colors.info,
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity onPress={this.props.closeModal}>
            <Icon name="md-arrow-back" size={30} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <Divider />
        <ScrollView
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity
              style={
                {
                  // borderColor: Colors.white,
                  // borderRadius: 10,
                }
              }
              activeOpacity={0.8}
              onPress={this.selectImage}>
              {this.state.avatarSource ? (
                <Image
                  onPress={this.selectImage}
                  source={this.state.avatarSource}
                  resizeMode="contain"
                  style={{
                    alignSelf: 'flex-start',
                    height: 100,
                    width: 100,
                  }}
                />
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    height: 100,
                    width: 100,
                    borderColor: Colors.black,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderStyle: 'dashed',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ImageBackground
                    style={{
                      height: 50,
                      width: 50,
                      color: Colors.black,
                    }}
                    source={this.state.backimg}
                  />
                  <Text style={{color: Colors.black}}>Photo</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView behavior="padding">
            <TextInput
              returnKeyType="next"
              label="Company Name*"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              blurOnSubmit={false}
              mode="flat"
              autoFocus={true}
              style={{
                borderColor: Colors.danger,
                color: Colors.white,
                backgroundColor: Colors.white,
                marginVertical: 5,
              }}
              placeholder="Enter Company name"
              onChangeText={text => this.setState({name: text})}
            />

            <TextInput
              returnKeyType="next"
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => {
                this.thirdTextInput.focus();
              }}
              blurOnSubmit={false}
              label="Company Address*"
              mode="flat"
              style={{
                borderRadius: 10,
                // borderColor: Colors.white,
                // height: 45,
                // borderWidth: 1,
                marginBottom: 5,
                backgroundColor: Colors.white,
                marginVertical: 5,
              }}
              placeholder="Enter Address"
              onChangeText={text => this.setState({companyAddress: text})}
            />

            <TextInput
              returnKeyType="next"
              ref={input => {
                this.thirdTextInput = input;
              }}
              onSubmitEditing={() => {
                this.fourthTextInput.focus();
              }}
              blurOnSubmit={false}
              label="Propiter"
              mode="flat"
              style={{
                borderRadius: 10,
                // borderColor: Colors.white,
                // height: 45,
                // borderWidth: 1,
                marginBottom: 5,
                backgroundColor: Colors.white,
                marginVertical: 5,
              }}
              placeholder="Enter propiter name"
              onChangeText={text => this.setState({propiterName: text})}
            />

            <TextInput
              autoCapitalize="none"
              returnKeyType="next"
              ref={input => {
                this.fourthTextInput = input;
              }}
              onSubmitEditing={() => {
                this.fifthTextInput.focus();
              }}
              blurOnSubmit={false}
              label="Website"
              mode="flat"
              style={{
                borderRadius: 10,
                // borderColor: Colors.white,
                // height: 45,
                // borderWidth: 1,
                marginBottom: 5,
                backgroundColor: Colors.white,
              }}
              placeholder="Website"
              onChangeText={text => this.setState({website: text})}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '49%'}}>
                <TextInput
                  returnKeyType="next"
                  ref={input => {
                    this.fifthTextInput = input;
                  }}
                  onSubmitEditing={() => {
                    this.sixthTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  label="PAN Number"
                  mode="flat"
                  style={{
                    borderRadius: 10,
                    // borderColor: Colors.white,
                    // height: 45,
                    // borderWidth: 1,
                    marginBottom: 5,
                    backgroundColor: Colors.white,
                  }}
                  placeholder="PAN Number"
                  onChangeText={text => this.setState({panNumber: text})}
                />
              </View>
              <View style={{width: '49%'}}>
                <TextInput
                  returnKeyType="next"
                  ref={input => {
                    this.sixthTextInput = input;
                  }}
                  onSubmitEditing={() => {
                    this.seventhTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  keyboardType="phone-pad"
                  label="Phone*"
                  mode="flat"
                  style={{
                    borderRadius: 10,
                    // borderColor: Colors.white,
                    // height: 45,
                    // borderWidth: 1,
                    marginBottom: 5,
                    backgroundColor: Colors.white,
                  }}
                  placeholder="Phone"
                  onChangeText={text => this.setState({phone: text})}
                />
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '69%'}}>
                <TextInput
                  autoCapitalize="none"
                  returnKeyType="next"
                  autoCompleteType="email"
                  ref={input => {
                    this.seventhTextInput = input;
                  }}
                  onSubmitEditing={() => {
                    this.eightTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  keyboardType="email-address"
                  label="E-mail"
                  mode="flat"
                  style={{
                    borderRadius: 10,
                    // borderColor: Colors.white,
                    // height: 45,
                    // borderWidth: 1,
                    marginBottom: 5,
                    backgroundColor: Colors.white,
                  }}
                  placeholder="E-mail"
                  onChangeText={text => this.setState({email: text})}
                />
              </View>
              <View style={{width: '29%'}}>
                <TextInput
                  ref={input => {
                    this.eightTextInput = input;
                  }}
                  // blurOnSubmit={false}
                  keyboardType="number-pad"
                  label="Zip Code"
                  mode="flat"
                  style={{
                    borderRadius: 10,
                    // borderColor: Colors.white,
                    // height: 45,
                    // borderWidth: 1,
                    marginBottom: 5,
                    backgroundColor: Colors.white,
                  }}
                  placeholder="Zip Code"
                  onChangeText={text => this.setState({zip: text})}
                />
              </View>
            </View>

            <View style={{marginBottom: 60, marginTop: 5}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  alignItems: 'center',
                  backgroundColor:
                    this.state.name.length >= 4 &&
                    this.state.companyAddress.length >= 4 &&
                    this.state.phone
                      ? Colors.primary
                      : Colors.secondary,
                  borderRadius: 10,
                }}
                disabled={
                  this.state.name.length >= 4 &&
                  this.state.companyAddress.length >= 4 &&
                  this.state.phone
                    ? false
                    : true
                }
                color={Colors.primary}
                onPress={() =>
                  isNaN(
                    this.state.name &&
                      this.state.companyAddress &&
                      this.state.phone,
                  )
                    ? this.props.createCompany([
                        this.state.name,
                        this.state.companyAddress,

                        this.state.propiterName,
                        this.state.panNumber,
                        this.state.phone,
                        this.state.website,
                        this.state.email,
                        this.state.zip,
                        this.state.logo,
                      ])
                    : this.setState({
                        companyNameWarning: true,
                      })
                }>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: 'bold',
                    paddingVertical: 10,
                  }}>
                  Create
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

export default AddCompany;
