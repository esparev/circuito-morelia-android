import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
  tabBar: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tabBarBtn: {
    height: 48,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
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

export default HomeStyles;
