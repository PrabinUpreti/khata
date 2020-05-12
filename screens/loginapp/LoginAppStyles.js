import {StyleSheet} from 'react-native';
import {Colors} from './../../configuration/colors/Colors';
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  textArea: {
    backgroundColor: Colors.grayWithTransparency,
    borderRadius: 100,
    paddingHorizontal: 30,
  },
  signinBtn: {
    borderRadius: 100,
    marginTop: 30,
    backgroundColor: Colors.primaryWithTransparency,
  },
});
