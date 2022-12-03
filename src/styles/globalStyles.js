import {StyleSheet} from 'react-native';
import vars from './vars';

const globalStyles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: vars.white.color,
  },
  hero: {
    margin: 20,
  },
  h1: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: vars.black.color,
  },
  h2: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: vars.black.color,
  },
  h3: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: vars.black.color,
  },
  textRegular: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.black.color,
  },
  textSmall: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: vars.gray200.color,
  },
});

export default globalStyles;
