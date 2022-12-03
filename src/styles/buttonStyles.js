import {StyleSheet} from 'react-native';
import vars from './vars';

const buttonStyles = StyleSheet.create({
  btnsContainer: {
    flexDirection: 'row',
  },
  btnBgBlack: {
    flexDirection: 'row',
    padding: 8,
    paddingRight: 12,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 50,
    backgroundColor: vars.black,
  },
  btnBgRed: {
    flexDirection: 'row',
    padding: 8,
    paddingRight: 12,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 12,
    borderRadius: 50,
    backgroundColor: vars.red,
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  btnTxt: {
    fontFamily: 'Inter-Medium',
    color: vars.white,
  },
});

export default buttonStyles;
