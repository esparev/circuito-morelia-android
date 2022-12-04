import React from 'react';
import {Image, Modal, Pressable, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import buttonStyles from '../styles/buttonStyles';
import modalStyles from '../styles/modalStyles';
import {envConfig} from '../utils/config';

const AddUnitModal = props => {
  const {modalVisible, setModalVisible, setAlert} = props;
  const navigation = useNavigation();
  const {auth} = useAuth();

  const addUnit = async (url, data, config) => {
    await axios
      .post(url, data, config)
      .then(res => {
        setModalVisible(false);
        setAlert('success');

        setTimeout(() => {
          setAlert('');
          setTimeout(() => {
            navigation.navigate('Unidades');
          }, 500);
        }, 3000);
      })
      .catch(error => {
        setModalVisible(false);
        setAlert('error');

        setTimeout(() => {
          setAlert('');
        }, 3000);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      addUnit(`${envConfig.apiUrl}/units`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
    },
  });

  return (
    <View style={modalStyles.modalView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        statusBarTranslucent={true}>
        <View style={modalStyles.editModal}>
          <View style={modalStyles.modalContainer}>
            <View style={modalStyles.modalHeader}>
              <Text style={modalStyles.modalTitle}>Agregar Unidad</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Image
                  style={modalStyles.modalClose}
                  source={require('../assets/icons/close.png')}
                />
              </Pressable>
            </View>
            <View style={modalStyles.modalForm}>
              <View style={modalStyles.modalFormField}>
                <Text style={modalStyles.modalFormFieldLbl}>
                  Número de Unidad{' '}
                  <Text style={modalStyles.modalFormFieldSpan}>
                    (Del 1 al 1000)
                  </Text>
                </Text>
                <TextInput
                  style={modalStyles.modalFormFieldInput}
                  placeholder="Ingresa el número de la unidad"
                  placeholderTextColor={'#737373'}
                  selectionColor={'#222227'}
                  value={formik.values.number}
                  onChangeText={input => formik.setFieldValue('number', input)}
                />
                <Text style={modalStyles.modalFormFieldErr}>
                  {formik.errors.number}
                </Text>
              </View>
              <Pressable
                style={buttonStyles.btnBgBlack}
                onPress={formik.handleSubmit}>
                <Text style={buttonStyles.btnTxt}>Agregar Unidad</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const initialValues = () => {
  return {number: 0};
};

const validationSchema = () => {
  return {
    number: Yup.number('Por favor ingrese un número válido').required(
      'Por favor ingrese un número',
    ),
  };
};

export default AddUnitModal;
