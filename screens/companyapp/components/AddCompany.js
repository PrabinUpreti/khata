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
    companyName: '',
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
          backgroundColor: '#FFFFFFf0',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            // flex: 0.1,
            marginBottom: 20,
            // backgroundColor: Colors.info,
          }}>
          <TouchableOpacity onPress={this.props.closeModal}>
            <Icon name="md-arrow-back" size={40} color={Colors.black} />
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
              style={{
                // backgroundColor: Colors.gray,
                borderRadius: 10,
              }}
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
                    }}
                    source={this.state.backimg}
                  />
                  <Text>Photo</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView behavior="padding">
            <Text
              style={{
                color: this.state.companyNameWarning
                  ? Colors.danger
                  : Colors.dark,
                fontSize: 24,
                marginBottom: 5,
              }}>
              Company Name:
            </Text>
            <TextInput
              autoFocus={true}
              style={{
                borderRadius: 10,
                height: 45,
                borderWidth: 1,
                borderColor: this.state.companyNameWarning
                  ? Colors.danger
                  : Colors.black,
                paddingHorizontal: 8,
                marginBottom: 5,
              }}
              placeholder="Enter Company name"
              onChangeText={text => this.setState({companyName: text})}
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
                      ? Colors.primary
                      : Colors.gray,
                  borderRadius: 10,
                }}
                disabled={this.state.companyName.length >= 4 ? false : true}
                color={Colors.primary}
                onPress={() =>
                  isNaN(this.state.companyName)
                    ? this.props.createCompany(this.state.companyName)
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
