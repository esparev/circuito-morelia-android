import {StyleSheet} from 'react-native';

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
    backgroundColor: '#222227',
  },
  btnBgRed: {
    flexDirection: 'row',
    padding: 8,
    paddingRight: 12,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 12,
    borderRadius: 50,
    backgroundColor: '#EE0000',
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  btnTxt: {
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF'
  },
});

export default buttonStyles;
