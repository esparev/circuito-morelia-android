import {StyleSheet} from 'react-native';
import vars from './vars';

const tabBarStyles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    backgroundColor: vars.white,
  },
  tabBarBtn: {
    height: 48,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: vars.white,
    borderBottomWidth: 2,
  },
  tabBarTxt: {
    textTransform: 'uppercase',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: vars.black,
  },
  tabBarBtnActive: {
    borderBottomColor: vars.black,
    borderBottomWidth: 2,
  },
  tabBarTxtInactive: {
    color: vars.gray200,
  },
});

export default tabBarStyles;
