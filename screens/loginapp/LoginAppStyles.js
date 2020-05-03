import {StyleSheet} from 'react-native';
import {Colors} from './../../configuration/colors/Colors';
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  tinyLogo: {
    marginBottom: 50,
    alignSelf: 'center',
    width: 80,
    height: 80,
    backfaceVisibility: 'hidden',
    opacity: 0.3,
  },
  loginFacebook: {
    color: Colors.white,
    backgroundColor: '#3a5796',
    alignSelf: 'stretch',
    borderRadius: 5,
    marginVertical: 5,
    borderColor: Colors.blue,
    color: Colors.blue,
  },
  loginGoogle: {
    backgroundColor: '#d3514d',
    alignSelf: 'stretch',
    borderRadius: 5,
    marginVertical: 5,
    borderColor: Colors.blue,
    color: Colors.blue,
  },
  loginFacebookText: {
    alignSelf: 'center',
    // fontSize: 20,
    padding: 10,
    color: Colors.white,
  },

  loginGoogleText: {
    // fontSize: 20,
    padding: 10,
    alignSelf: 'center',
    color: Colors.white,
  },
  userName: {
    borderBottomWidth: 1,
    borderColor: Colors.lightBlue,
  },
  signinBtn: {
    borderRadius: 5,
    marginTop: 0,
    marginHorizontal: 30,
    paddingHorizontal: 30,
    alignSelf: 'stretch',
    backgroundColor: Colors.blue,
  },
  signUpBtn: {
    borderRadius: 5,

    paddingHorizontal: 30,
    marginHorizontal: 30,
    marginTop: 0,
    alignSelf: 'flex-end',
    backgroundColor: Colors.green,
  },

  loginButtonView: {
    marginHorizontal: 30,
    alignSelf: 'stretch',
    // marginTop: 0,
    color: Colors.white,
  },
  btnTxtStyle: {
    paddingHorizontal: 20,
    fontSize: 24,
    color: Colors.white,
  },
});
