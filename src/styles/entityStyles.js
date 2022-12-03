import {StyleSheet} from 'react-native';
import vars from './vars';

const entityStyles = StyleSheet.create({
  entityHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entityInfoTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: vars.black,
  },
  entityTitleH2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: vars.black,
  },
  moreEntities: {
    marginTop: 12,
  },
});

export default entityStyles;
