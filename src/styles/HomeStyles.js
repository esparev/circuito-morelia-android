import {StyleSheet} from 'react-native';
import vars from './vars';

const homeStyles = StyleSheet.create({
  mapContainer: {
    margin: 20,
  },
  mapFilter: {
    flexDirection: 'row',
    marginTop: 12,
  },
  filterChipInactive: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: vars.gray100,
    borderRadius: 20,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 12,
    marginRight: 8,
  },
  filterTxtInactive: {
    marginLeft: 4,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.gray300,
  },
  filterIcon: {
    width: 22,
    height: 22,
  },
  filterChipActive: {
    backgroundColor: vars.black,
  },
  filterTxtActive: {
    marginLeft: 4,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.white,
  },
  closeStops: {
    margin: 20,
  },
  stopsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreTxt: {
    fontFamily: 'Inter-Medium',
    color: vars.gray300,
  },
  seeMoreIcon: {
    width: 20,
    height: 20,
  },
  stops: {
    marginTop: 12,
  },
});

export default homeStyles;
