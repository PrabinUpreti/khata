import {StyleSheet} from 'react-native';
import {Colors} from './../../Colors';
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
  },
  loginTitle: {
    // fontSize: 12,
    alignSelf: 'flex-start',
    marginVertical: 0,
    borderColor: Colors.blue,
    color: Colors.blue,
  },
  loginForm: {
    alignSelf: 'stretch',
    marginBottom: 20,
    borderColor: Colors.lightBlue,
    paddingHorizontal: 10,
    color: Colors.black,
  },
  loginInput: {
    borderColor: Colors.white,
    color: Colors.black,
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
