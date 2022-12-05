import React from 'react';
import {Image, Modal, Pressable, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import slugify from 'slugify';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import buttonStyles from '../styles/buttonStyles';
import modalStyles from '../styles/modalStyles';
import {envConfig} from '../utils/config';

const AddDriverModal = props => {
  const {modalVisible, setModalVisible, setAlert} = props;
  const navigation = useNavigation();
  const {auth} = useAuth();

  const addDriver = async (url, data, config) => {
    await axios
      .post(url, data, config)
      .then(res => {
        setModalVisible(false);
        setAlert('success');

        setTimeout(() => {
          setAlert('');
          setTimeout(() => {
            navigation.navigate('Conductores');
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
      const regex = /\s+/g;
      data.slug = slugify(data.name.replace(regex, '-'), {lower: true});
      addDriver(`${envConfig.apiUrl}/users`, data, {
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
                <Text style={modalStyles.modalFormFieldLbl}>Nombre</Text>
                <TextInput
                  style={modalStyles.modalFormFieldInput}
                  placeholder="Ingrese el nombre del conductor"
                  placeholderTextColor={'#737373'}
                  selectionColor={'#222227'}
                  value={formik.values.name}
                  onChangeText={input => formik.setFieldValue('name', input)}
                />
                <Text style={modalStyles.modalFormFieldErr}>
                  {formik.errors.name}
                </Text>
              </View>
              <View style={modalStyles.modalFormField}>
                <Text style={modalStyles.modalFormFieldLbl}>
                  Correo electrónico
                </Text>
                <TextInput
                  style={modalStyles.modalFormFieldInput}
                  placeholder="Ingrese el correo del conductor"
                  autoCapitalize="none"
                  placeholderTextColor={'#737373'}
                  selectionColor={'#222227'}
                  value={formik.values.email}
                  onChangeText={input => formik.setFieldValue('email', input)}
                />
                <Text style={modalStyles.modalFormFieldErr}>
                  {formik.errors.email}
                </Text>
              </View>
              <View style={modalStyles.modalFormField}>
                <Text style={modalStyles.modalFormFieldLbl}>Contraseña</Text>
                <TextInput
                  style={modalStyles.modalFormFieldInput}
                  placeholder="Ingrese la contraseña del conductor"
                  placeholderTextColor={'#737373'}
                  selectionColor={'#222227'}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  value={formik.values.password}
                  onChangeText={input =>
                    formik.setFieldValue('password', input)
                  }
                />
                <Text style={modalStyles.modalFormFieldErr}>
                  {formik.errors.password}
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
  return {slug: '', name: '', email: '', password: '', role: 'driver'};
};

const validationSchema = () => {
  return {
    name: Yup.string().required('Por favor ingrese un nombre'),
    email: Yup.string()
      .email('Ingrese un correo válido')
      .required('Por favor ingrese un correo'),
    password: Yup.string().required('Por favor ingrese una contraseña'),
  };
};

export default AddDriverModal;
