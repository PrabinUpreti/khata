// import FireBase from './FireBase';

import React, {Component} from 'react';
import {Button, Text, ActivityIndicator, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {Colors} from './../colors/Colors';

///import Components

import LoginApp from './../../screens/loginapp/LoginApp';
import CompanyApp from './../../screens/companyapp/CompanyApp';
import HomeApp from '../../screens/homeapp/HomeApp';
import DrawerContent from './../../screens/DrawerContent';
import SendInvoiceApp from './../../screens/sendinvoiceapp/SendInvoiceApp';
// import AddTransaction from './../../screens/companyapp/components/AddTransaction';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'native-base';
import Auth from './../../configuration/fireauth/FirebaseConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MarkInvoicePaidApp from '../../screens/markinvoicepaidapp/MarkInvoicePaidApp';
import PersonalExpencesOrIncomeApp from '../../screens/personalexpencesorincomeapp/PersonalExpencesOrIncomeApp';
import CustomersApp from '../../screens/customersapp/CustomersApp';
import ShellerOrCompanyApp from '../../screens/shellerorcompanyapp/ShellerOrCompanyApp';
import AboutUsApp from '../../screens/aboutusapp/AboutUsApp';
import PrivacyAndpolicyApp from '../../screens/privacyandpolicyapp/PrivacyAndPolicyApp';
import SettingApp from '../../screens/settingapp/SettingApp';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {TapGestureHandler} from 'react-native-gesture-handler';
// import FireAuth from './../fireauth/FireAuth';

//DECLERATION

const BusinessStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SendInvoiceStack = createStackNavigator();

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

//ONPRESS LOGOUT

LogOut = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: Colors.bgColor,
        }}>
        <View
          style={{alignSelf: 'stretch', marginBottom: 1, marginHorizontal: 0}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => Auth.signOut()}
            style={{backgroundColor: Colors.subBgColor, borderRadius: 0}}>
            <Text
              style={{
                color: Colors.white,
                paddingVertical: 20,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              LogOut
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

//Home Tap Navigation

function TapNav() {
  return (
    <Tab.Navigator
      initialRouteName="Business"
      barStyle={{backgroundColor: Colors.white}}>
      <Tab.Screen
        name="Dashboard"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={CompanyStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="city" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Bank"
        component={LogoutStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bank" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

//Stack Navigation

function CompanyStack({navigation}) {
  return (
    <BusinessStack.Navigator
      screenOptions={{
        headerTintColor: Colors.black,
        headerStyle: {
          backgroundColor: Colors.white,
        },
      }}>
      <BusinessStack.Screen
        name="Reckon Book"
        component={CompanyApp}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor={Colors.white}
              color={Colors.black}
              style={{
                paddingLeft: 10,
                paddingRight: 0,
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </BusinessStack.Navigator>
  );
}

function HomeStack({navigation}) {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.subBgColor,
        },
      }}>
      <DashboardStack.Screen
        name="Dashboard"
        component={HomeApp}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor={Colors.subBgColor}
              style={{
                paddingLeft: 10,
                paddingRight: 0,
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </DashboardStack.Navigator>
  );
}

function LogoutStack({navigation}) {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTintColor: Colors.black,
        headerStyle: {
          backgroundColor: Colors.white,
        },
      }}>
      <ProfileStack.Screen
        name="Bank"
        component={LogOut}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor={Colors.white}
              color={Colors.black}
              style={{
                paddingLeft: 10,
                paddingRight: 0,
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

function SendInvoice({navigation}) {
  return (
    <SendInvoiceStack.Navigator>
      <SendInvoiceStack.Screen
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor={Colors.white}
              color={Colors.black}
              style={{
                paddingLeft: 10,
                paddingRight: 0,
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
        name="Send Invoice"
        component={SendInvoiceApp}
      />
    </SendInvoiceStack.Navigator>
  );
}

export default class Routes extends Component {
  componentDidMount() {
    Auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({isAuth: true, splashScreen: false});
      } else {
        console.log('No User', user);
        this.setState({isAuth: false, splashScreen: false});
      }
    });
  }
  state = {
    isAuth: false,
    splashScreen: true,
  };

  render() {
    return (
      <>
        {this.state.splashScreen ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Loading...</Text>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <>
            <NavigationContainer>
              {this.state.isAuth ? (
                <>
                  {
                    <>
                      <Drawer.Navigator
                        initialRouteName="Home"
                        drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="Profile" component={HomeApp} />

                        <Drawer.Screen name="Home" component={TapNav} />
                        <Drawer.Screen
                          name="Send invoice"
                          component={SendInvoice}
                        />
                        <Drawer.Screen
                          name="Mark invoice paid"
                          component={MarkInvoicePaidApp}
                        />
                        <Drawer.Screen
                          name="Personal Expences/income"
                          component={PersonalExpencesOrIncomeApp}
                        />
                        <Drawer.Screen
                          name="Customers"
                          component={CustomersApp}
                        />
                        <Drawer.Screen
                          name="Sheller/Company"
                          component={ShellerOrCompanyApp}
                        />

                        <Drawer.Screen name="About Us" component={AboutUsApp} />
                        <Drawer.Screen
                          name="Privacy and Policy"
                          component={PrivacyAndpolicyApp}
                        />
                        <Drawer.Screen name="Setting" component={SettingApp} />

                        <Drawer.Screen name="Sign out" component={HomeApp} />
                      </Drawer.Navigator>
                    </>
                  }
                </>
              ) : (
                <ProfileStack.Navigator>
                  <ProfileStack.Screen
                    name="Login"
                    component={LoginApp}
                    options={{
                      headerShown: false,
                      headerTransparent: false,
                    }}
                  />
                </ProfileStack.Navigator>
              )}
            </NavigationContainer>
          </>
        )}
      </>
    );
  }
}
