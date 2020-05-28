import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from './../../../configuration/colors/Colors';
import ImagePicker from 'react-native-image-picker';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

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
    companyName: 'Radha krishna Kutani Pisani Mill ',
    companyDescription: 'This Mill is the one and only a fevroit mill',
    // companyName: '',
    // companyDescription: '',
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
          // flex: 1,
          backgroundColor: Colors.subBgColor,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 20,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            // flex: 0.1,
            alignSelf: 'flex-start',
            paddingRight: 20,
            marginBottom: 20,
            // backgroundColor: Colors.info,
          }}>
          <TouchableOpacity onPress={this.props.closeModal}>
            <Icon name="md-arrow-back" size={40} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // flex: 0.9,
            justifyContent: 'center',
            // backgroundColor: Colors.primary,
          }}>
          <View style={{alignSelf: 'flex-start'}}>
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
                    borderColor: Colors.white,
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
                      color: Colors.white,
                    }}
                    source={this.state.backimg}
                  />
                  <Text style={{color: Colors.white}}>Photo</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView behavior="height">
            <Text
              style={{
                color: this.state.companyNameWarning
                  ? Colors.danger
                  : Colors.white,
                fontSize: 20,
                marginBottom: 5,
              }}>
              Company Name*:
            </Text>
            <TextInput
              autoFocus={true}
              placeholderTextColor={Colors.gray}
              style={{
                borderRadius: 10,
                height: 45,
                borderWidth: 1,
                borderColor: this.state.companyNameWarning
                  ? Colors.danger
                  : Colors.white,
                paddingHorizontal: 8,
                marginBottom: 5,
                color: Colors.white,
              }}
              placeholder="Enter Company name"
              onChangeText={text => this.setState({companyName: text})}
            />

            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
                color: Colors.white,
              }}>
              Company Description:
            </Text>

            <TextInput
              placeholderTextColor={Colors.gray}
              style={{
                borderRadius: 10,
                borderColor: Colors.white,
                height: 45,
                borderWidth: 1,
                paddingHorizontal: 8,
                marginBottom: 5,
                color: Colors.white,
              }}
              placeholder="Enter Company Description"
              onChangeText={text => this.setState({companyDescription: text})}
            />
          </KeyboardAvoidingView>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                // flex: 1,
                marginRight: 2,
                fontSize: 24,
                height: 45,
              }}>
              {/* <Button
              disabled
              color={Colors.danger}
              title="Cancel"
              onPress={this.props.closeModal}
            /> */}
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 2,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  alignItems: 'center',
                  backgroundColor:
                    this.state.companyName.length >= 4
                      ? Colors.bigBgColors
                      : Colors.bgColor,
                  borderRadius: 10,
                }}
                disabled={this.state.companyName.length >= 4 ? false : true}
                color={Colors.primary}
                onPress={() =>
                  isNaN(this.state.companyName)
                    ? this.props.createCompany([
                        this.state.companyName,
                        this.state.companyDescription,
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
          </View>
        </View>
      </View>
    );
  }
}

export default AddCompany;
