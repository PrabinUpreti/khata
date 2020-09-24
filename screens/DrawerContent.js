import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';

import {Drawer, Avatar} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Colors} from './../configuration/colors/Colors';

export default function DrawerContent(props) {
  console.log(props);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section
          style={{
            paddingLeft: 20,
          }}>
          <TouchableNativeFeedback
            active={props.state.index == 0 ? true : false}
            onPress={() => props.navigation.navigate('Profile')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View>
              <Avatar.Image
                size={60}
                source={require('./../assets/img/com.jpeg')}
              />
            </View>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: props.state.index == 0 ? Colors.info : null,
                }}>
                Prabin raj Upreti
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: props.state.index == 0 ? Colors.info : null,
                }}>
                upretirajprabin@gmail.com
              </Text>
            </View>
          </TouchableNativeFeedback>
        </Drawer.Section>
        <View>
          <Drawer.Section>
            {/* <DrawerItemList {...props} /> */}
            <Drawer.Item
              active={props.state.index == 1 ? true : false}
              icon="home"
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <Drawer.Item
              active={props.state.index == 2 ? true : false}
              icon="send"
              label="Send Invoice"
              onPress={() => props.navigation.navigate('Send invoice')}
            />
            <Drawer.Item
              active={props.state.index == 3 ? true : false}
              icon="clipboard-check"
              label="Mark invoice paid"
              onPress={() => props.navigation.navigate('Mark invoice paid')}
            />
            <Drawer.Item
              active={props.state.index == 4 ? true : false}
              icon="bag-personal"
              label="Personal Expences/income"
              onPress={() =>
                props.navigation.navigate('Personal Expences/income')
              }
            />
            <Drawer.Item
              active={props.state.index == 5 ? true : false}
              icon="account-group"
              label="Customers"
              onPress={() => props.navigation.navigate('Customers')}
            />
            <Drawer.Item
              active={props.state.index == 6 ? true : false}
              icon="factory"
              label="Sheller/Company"
              onPress={() => props.navigation.navigate('Sheller/Company')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <Drawer.Item
              active={props.state.index == 7 ? true : false}
              icon="account-badge-horizontal"
              label="About Us"
              onPress={() => props.navigation.navigate('About Us')}
            />

            <Drawer.Item
              active={props.state.index == 8 ? true : false}
              icon="shield-lock"
              label="Privacy and Policy"
              onPress={() => props.navigation.navigate('Privacy and Policy')}
            />

            <Drawer.Item
              active={props.state.index == 9 ? true : false}
              icon="settings"
              label="Setting"
              onPress={() => props.navigation.navigate('Setting')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section />
      <Drawer.Section style={{borderTopWidth: 0, marginBottom: 15}}>
        <Drawer.Item
          active={props.state.index == 10 ? true : false}
          icon="exit-to-app"
          label="Sign out"
          onPress={() => props.navigation.navigate('Sign out')}
          // {() => {
          //   return <Icon name="menu" color="#000" size={24} />;
          // }}
        />
      </Drawer.Section>
    </View>
  );
  // }
}
