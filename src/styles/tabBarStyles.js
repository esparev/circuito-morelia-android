import {StyleSheet} from 'react-native';

const tabBarStyles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  tabBarBtn: {
    height: 48,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
  },
  tabBarTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#222227',
  },
  tabBarBtnActive: {
    borderBottomColor: '#222227',
    borderBottomWidth: 2,
  },
  tabBarTxtInactive: {
    color: '#737373',
  },
});

export default tabBarStyles;
