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
    backgroundColor: Colors.primary,
    marginTop: 5,
    alignItems: 'flex-start',
  },
  addCompanyBtnText: {
    margin: 10,
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'center',
  },
});
