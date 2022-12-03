import {StyleSheet} from 'react-native';

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
    color: '#222227',
  },
  loginTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#737373',
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
    color: '#222227',
  },
  loginFormFieldInput: {
    width: '100%',
    padding: 8,
    borderColor: '#CECECE',
    borderWidth: 1.5,
    borderRadius: 8,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#222227',
  },
  // loginFormField--input:focus: {
  //   outline: solid var(--black),
  // },
  loginFormFieldErr: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#EA0000',
  },
  loginFormFieldSuccess: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#222227',
  },
  loginFormForgot: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#EA0000',
  },
  loginFormBtn: {
    width: '100%',
    padding: 8,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#222227',
  },
  loginFormBtnTxt: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  loginCreateAccount: {
    flexDirection: 'row',
  },
  loginFormQuestion: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'right',
    color: '#5A5A5A',
  },
  loginFormQuestionBtn: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#222227',
  },
});

export default loginStyles;
