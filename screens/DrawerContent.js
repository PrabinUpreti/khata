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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Avatar.Image
                size={70}
                source={require('./../assets/img/com.jpeg')}
              />
            </View>
            <View style={{padding: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Prabin raj Upreti
              </Text>
              <Text style={{fontSize: 12}}>upretirajprabin@gmail.com</Text>
            </View>
          </View>
        </Drawer.Section>
        <View>
          <Drawer.Section>
            <Drawer.Item
              icon="home"
              label="Home"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              icon="send"
              label="Send Invoice"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              icon="clipboard-check"
              label="Mark invoice paid"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              icon="bag-personal"
              label="Personal Expences/income"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              icon="account-group"
              label="Customers"
              onPress={() => alert('clicked')}
            />
            <Drawer.Item
              icon="factory"
              label="Sheller/Company"
              onPress={() => alert('clicked')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <Drawer.Item
              icon="account-group"
              label="About Us"
              onPress={() => alert('clicked')}
            />

            <Drawer.Item
              icon="shield-lock"
              label="Privacy and Policy"
              onPress={() => alert('clicked')}
            />

            <Drawer.Item
              icon="settings"
              label="Setting"
              onPress={() => alert('clicked')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
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
