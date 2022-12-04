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

const EditDriverModal = props => {
  const {driver, slug, modalVisible, setModalVisible, setAlert} = props;
  const navigation = useNavigation();
  const {auth} = useAuth();

  const editDriver = async (url, data, config) => {
    await axios
      .patch(url, data, config)
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
      editDriver(`${envConfig.apiUrl}/users/${slug}`, data, {
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
              <Text style={modalStyles.modalTitle}>Editar Conductor</Text>
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
                  placeholder={driver.name}
                  placeholderTextColor={'#737373'}
                  selectionColor={'#222227'}
                  value={formik.values.name}
                  onChangeText={input => formik.setFieldValue('name', input)}
                />
              </View>
              <View style={modalStyles.modalFormField}>
                <Text style={modalStyles.modalFormFieldLbl}>
                  Correo electrónico
                </Text>
                <TextInput
                  style={modalStyles.modalFormFieldInput}
                  placeholder={driver.email}
                  placeholderTextColor={'#737373'}
                  selectionColor={'#222227'}
                  value={formik.values.email}
                  onChangeText={input => formik.setFieldValue('email', input)}
                />
              </View>
              <View style={modalStyles.modalFormField}>
                <Text style={modalStyles.modalFormFieldLbl}>Contraseña</Text>
                <TextInput
                  style={modalStyles.modalFormFieldInput}
                  placeholder="••••••"
                  placeholderTextColor={'#737373'}
                  selectionColor={'#222227'}
                  value={formik.values.password}
                  onChangeText={input =>
                    formik.setFieldValue('password', input)
                  }
                />
              </View>
              <Pressable
                style={buttonStyles.btnBgBlack}
                onPress={formik.handleSubmit}>
                <Text style={buttonStyles.btnTxt}>Editar Conductor</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const initialValues = () => {
  return {};
};

const validationSchema = () => {
  return {
    name: Yup.string(),
    email: Yup.string().email(),
    password: Yup.string(),
  };
};

export default EditDriverModal;
