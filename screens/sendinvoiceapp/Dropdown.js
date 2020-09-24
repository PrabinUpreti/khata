import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Modal, Provider, Portal} from 'react-native-paper';
export default class Dropdown extends Component {
  state = {
    modalActive: false,
  };
  openModal = () => {
    console.log('hello');
    return <View />;
  };
  render() {
    console.log(this.props);

    return (
      <>
        {/* <Provider>
          <Portal> */}
        <View style={{height: 45, paddingVertical: 10, alignSelf: 'stretch'}}>
          <TouchableNativeFeedback
            onPress={() =>
              this.setState({modalActive: !this.state.modalActive})
            }>
            <Text style={{fontSize: 16}}>{this.props.placeholder}</Text>
          </TouchableNativeFeedback>
        </View>
        {/* </Portal>
        </Provider> */}

        <Provider>
          <Portal>
            <Modal visible={this.state.modalActive}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>hello</Text>
              </View>
            </Modal>
          </Portal>
        </Provider>
      </>
    );
  }
}
