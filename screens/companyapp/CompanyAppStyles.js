import {StyleSheet} from 'react-native';
import {Colors} from '../../configuration/colors/Colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // card: {
  // alignSelf: 'stretch',
  // marginHorizontal: 20,
  // alignContent: 'flex-start',
  // },
  addCompanyBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 70,
    height: 70,
    width: 70,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -35,
    // right: 15,
    zIndex: 100,
  },
  addCompanyBtnText: {
    // margin: 10,
    color: Colors.white,
    fontSize: 34,
    paddingBottom: 4,
    alignSelf: 'center',
  },
});
