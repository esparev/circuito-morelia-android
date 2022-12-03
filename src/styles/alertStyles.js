import {StyleSheet} from 'react-native';
import vars from './vars';

const alertStyles = StyleSheet.create({
  alert: {
    height: 40,
    overflow: 'hidden',
  },
  alertContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  // alertContainer, p: {
  //   fontSize: 14,
  //   fontWeight: 500,
  //   color: white,
  // },
  alertGreen: {
    backgroundColor: vars.green,
  },
  alertRed: {
    backgroundColor: vars.red,
  },
});

export default alertStyles;
