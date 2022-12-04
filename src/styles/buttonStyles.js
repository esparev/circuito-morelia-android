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
    marginRight: 12,
    borderRadius: 50,
    backgroundColor: vars.black.color,
  },
  btnBgGray: {
    flexDirection: 'row',
    padding: 8,
    paddingRight: 12,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 12,
    borderRadius: 50,
    backgroundColor: '#e9e9e9',
  },
  btnBgRed: {
    flexDirection: 'row',
    padding: 8,
    paddingRight: 12,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 50,
    backgroundColor: vars.red.color,
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  btnTxt: {
    fontFamily: 'Inter-SemiBold',
    color: vars.white.color,
    marginLeft: 4,
  },
  btnTxtBlack: {
    fontFamily: 'Inter-SemiBold',
    color: vars.black.color,
    marginLeft: 4,
  },
});

export default buttonStyles;
