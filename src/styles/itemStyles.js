import {StyleSheet} from 'react-native';

const itemStyles = StyleSheet.create({
  entitys: {},
  entityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 4,
    borderBottomColor: '#737373',
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
  entityLocationDistance: {},
  seeEntity: {
    width: 32,
    height: 32,
  },
});

export default itemStyles;
