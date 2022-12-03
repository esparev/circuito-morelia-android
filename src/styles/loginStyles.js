import {StyleSheet} from 'react-native';
import vars from './vars';

const loginStyles = StyleSheet.create({
  login: {
    height: '100%',
    padding: 20,
  },
  loginHeader: {
    alignItems: 'flex-start',
  },
  loginFigure: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  loginFigureImg: {
    width: 60,
    height: 60,
  },
  loginTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: vars.black.color,
  },
  loginTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: vars.gray200.color,
  },
  loginForm: {
    width: '100%',
    marginTop: 48,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  loginFormField: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 8,
  },
  loginFormFieldLbl: {
    width: '100%',
    marginBottom: 4,
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: vars.black.color,
  },
  loginFormFieldInput: {
    width: '100%',
    padding: 8,
    borderColor: vars.gray100.color,
    borderWidth: 1.5,
    borderRadius: 8,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.black.color,
  },
  // loginFormField--input:focus: {
  //   outline: solid var(--black),
  // },
  loginFormFieldErr: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.red.color,
  },
  loginFormFieldSuccess: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.black.color,
  },
  loginFormForgot: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.red.color,
  },
  loginFormBtn: {
    width: '100%',
    padding: 8,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: vars.black.color,
  },
  loginFormBtnTxt: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: vars.white.color,
  },
  loginCreateAccount: {
    flexDirection: 'row',
  },
  loginFormQuestion: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'right',
    color: vars.gray300.color,
  },
  loginFormQuestionBtn: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: vars.black.color,
  },
});

export default loginStyles;
