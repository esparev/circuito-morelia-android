import {StyleSheet} from 'react-native';
import vars from './vars';

const modalStyles = StyleSheet.create({
  modalView: {
    backgroundColor: vars.black.color,
  },
  modal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  assignModal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  editModal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  deleteModal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    height: 'auto',
    borderRadius: 12,
    backgroundColor: vars.white.color,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: vars.gray100.color,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: vars.black.color,
  },
  modalClose: {
    width: 32,
    height: 32,
  },
  modalForm: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  deleteModalForm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalFormField: {
    width: '90%',
    flexDirection: 'column',
  },
  modalFormFieldLbl: {
    width: '100%',
    marginBottom: 4,
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: vars.black.color,
  },
  modalFormFieldSpan: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: vars.gray300.color,
  },
  modalFormFieldInput: {
    width: '100%',
    padding: 8,
    borderColor: vars.gray100.color,
    borderWidth: 1.5,
    borderRadius: 8,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.black.color,
  },
  modalFormFieldErr: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: vars.red.color,
  },
  // modalFormFieldInput:focus: {
  //   outline: solid vars.black.color,
  // },
  modalFormFieldOption: {
    color: vars.gray300.color,
  },
  modalFormTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    color: vars.black.color,
  },
  modalFormText: {
    marginBottom: 20,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: vars.gray300.color,
  },
});

export default modalStyles;
