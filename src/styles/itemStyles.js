import {StyleSheet} from 'react-native';
import vars from './vars';

const itemStyles = StyleSheet.create({
  entitys: {},
  entityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 4,
    borderBottomColor: vars.gray200,
    borderBottomWidth: 0.5,
  },
  entityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entityIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  entityLocationDistance: {
    width: '80%',
  },
  seeEntity: {
    width: 32,
    height: 32,
  },
});

export default itemStyles;
