import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  tabBarBtn: {
    height: 48,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
  },
  tabBarTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#222227',
  },
  tabBarBtnActive: {
    borderBottomColor: '#222227',
    borderBottomWidth: 2,
  },
  tabBarTxtInactive: {
    color: '#737373',
  },
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
  stops: {},
  stopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: 0.5,
  },
  stopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  stopLocationDistance: {},
  seeStop: {
    width: 32,
    height: 32,
  },
});

export default homeStyles;
