import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Label,
  Text,
  Card,
  CardItem,
  Body,
  ListItem,
  Left,
  Right,
  Switch,
  Content,
} from 'native-base';
import {Styles} from './HomeAppStyles';

export default class HomeApp extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem>
            <Left>
              <Label>Total Amount</Label>
            </Left>
            <Right>
              <Text>Rs 20,00,000 /-</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Label>Total Credit</Label>
            </Left>
            <Right>
              <Text>Rs 20,309</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Label>Total </Label>
            </Left>
            <Right>
              <Text>Rs 20,309</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Label>Total </Label>
            </Left>
            <Right>
              <Text>Rs 20,309</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Label>Total </Label>
            </Left>
            <Right>
              <Text>Rs 20,309</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Label>Total </Label>
            </Left>
            <Right>
              <Text>Rs 20,309</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Label>Total Amount</Label>
            </Left>
            <Right>
              <Text>Rs 20,309</Text>
            </Right>
          </ListItem>
        </Content>

        <Footer>
          <FooterTab>
            <Button active vertical>
              <Icon name="home" />

              <Text>Home</Text>
            </Button>
            <Button>
              <Icon name="apps" />

              <Text>More</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
