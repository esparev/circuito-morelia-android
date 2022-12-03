import {StyleSheet} from 'react-native';
import vars from './vars';

const profileStyles = StyleSheet.create({
  screen: {
    position: 'relative',
    padding: 20,
  },
  profile: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomColor: vars.gray200.color,
    borderBottomWidth: 0.5,
  },
  image: {
    width: '20%',
    marginRight: 12,
    marginBottom: 12,
  },
  name: {
    width: '80%',
  },
  profileImg: {
    position: 'relative',
    width: 64,
    height: 64,
    margin: 2,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    width: 24,
    height: 24,
  },
  infoContainer: {
    paddingTop: 20,
  },
  info: {
    marginBottom: 20,
  },
  logoutBtn: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 8,
    backgroundColor: vars.black.color,
  },
  logoutTxt: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    padding: 8,
    color: vars.white.color,
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
});

export default profileStyles;
