import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  mapContainer: {
    margin: 20,
  },
  mapFilter: {
    flexDirection: 'row',
  },
  filterChipInactive: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CECECE',
    borderRadius: 20,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 12,
    marginRight: 8,
  },
  filterTxtInactive: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 4,
    color: '#5A5A5A',
  },
  filterIcon: {
    width: 22,
    height: 22,
  },
  filterChipActive: {
    backgroundColor: '#222227',
  },
  filterTxtActive: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 4,
    color: '#FFFFFF',
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
    marginBottom: 12,
  },
  seeMoreTxt: {
    fontFamily: 'Inter-Medium',
    color: '#5A5A5A',
  },
  seeMoreIcon: {
    width: 20,
    height: 20,
  },
});

export default homeStyles;
