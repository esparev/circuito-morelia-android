import {StyleSheet} from 'react-native';

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
    backgroundColor: '#00FF00',
  },
  alertRed: {
    backgroundColor: '#FF0000',
  }
});

export default alertStyles;
