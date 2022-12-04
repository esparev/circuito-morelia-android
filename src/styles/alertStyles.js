import {StyleSheet} from 'react-native';
import vars from './vars';

const alertStyles = StyleSheet.create({
  alert: {
    height: 'auto',
    overflow: 'hidden',
  },
  alertContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  alertMsg: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: vars.white.color,
  },
  alertGreen: {
    backgroundColor: vars.green.color,
  },
  alertRed: {
    backgroundColor: vars.red.color,
  },
});

export default alertStyles;
