import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  View,
  Button,
  Icon,
} from 'native-base';
import {Text} from 'react-native';
const loginStatus = param => {
  console.log(param);
};
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Content>
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <Text style={{fontSize: 30}}>Welcome To khata</Text>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>pin</Label>
              <Input passwordRules />
            </Item>
          </Form>
          <Button
            style={{margin: 20, height: 100}}
            iconLeft
            primary
            block
            rounded>
            <Text style={{color: '#fff'}}>Log In</Text>
            <Icon name="arrow-forward" />
          </Button>
        </Content>
      </Container>
    );
  }
}
