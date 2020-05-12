import {StyleSheet} from 'react-native';
import {Colors} from '../../configuration/colors/Colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  // card: {
  // alignSelf: 'stretch',
  // marginHorizontal: 20,
  // alignContent: 'flex-start',
  // },
  addCompanyBtn: {
    backgroundColor: Colors.lightBlue,
    height: 100,
    width: 100,
  },
  addCompanyBtnText: {
    // margin: 10,
    color: Colors.white,
    fontSize: 24,
    alignSelf: 'center',
  },
});
