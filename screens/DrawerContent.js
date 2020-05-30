import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';

import {Drawer, Avatar} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  console.log(props);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={{marginLeft: 20}}>
          <View
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
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Prabin raj Upreti
              </Text>
              <Text style={{fontSize: 10}}>upretirajprabin@gmail.com</Text>
            </View>
          </View>
        </Drawer.Section>
        <View>
          <Drawer.Section>
            {/* <DrawerItemList {...props} /> */}
            <Drawer.Item
              active={props.state.index == 0 ? true : false}
              icon="home"
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <Drawer.Item
              active={props.state.index == 1 ? true : false}
              icon="send"
              label="Send Invoice"
              onPress={() => props.navigation.navigate('Customers')}
            />
            <Drawer.Item
              active={props.state.index == 2 ? true : false}
              icon="clipboard-check"
              label="Mark invoice paid"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              active={props.state.index == 3 ? true : false}
              icon="bag-personal"
              label="Personal Expences/income"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              active={props.state.index == 4 ? true : false}
              icon="account-group"
              label="Customers"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              active={props.state.index == 5 ? true : false}
              icon="factory"
              label="Sheller/Company"
              onPress={() => alert('clicked')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <Drawer.Item
              active={props.state.index == 1 ? true : false}
              icon="account-badge-horizontal"
              label="About Us"
              onPress={() => alert('clicked')}
            />

            <Drawer.Item
              active={props.state.index == 1 ? true : false}
              icon="shield-lock"
              label="Privacy and Policy"
              onPress={() => alert('clicked')}
            />

            <Drawer.Item
              active={props.state.index == 1 ? true : false}
              icon="settings"
              label="Setting"
              onPress={() => alert('clicked')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section />
      <Drawer.Section style={{borderTopWidth: 0, marginBottom: 15}}>
        <Drawer.Item
          icon="exit-to-app"
          label="SignOut"
          onPress={() => alert('clicked')}
          // {() => {
          //   return <Icon name="menu" color="#000" size={24} />;
          // }}
        />
      </Drawer.Section>
    </View>
  );
  // }
}
