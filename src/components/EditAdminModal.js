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

const EditAdminModal = props => {
  const {admin, slug, editModalVisible, setEditModalVisible, setEditAlert} = props;
  console.log(slug);
  const navigation = useNavigation();
  const {auth} = useAuth();

  const editAdmin = async (url, data, config) => {
    await axios
      .patch(url, data, config)
      .then(res => {
        setEditModalVisible(false);
        setEditAlert('success');

        setTimeout(() => {
          setEditAlert('');
          setTimeout(() => {
            navigation.navigate('Admins');
          }, 500);
        }, 3000);
      })
      .catch(error => {
        setEditModalVisible(false);
        setEditAlert('error');

        setTimeout(() => {
          setEditAlert('');
        }, 3000);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      console.log(data);
      editAdmin(`${envConfig.apiUrl}/users/${slug}`, data, {
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
        visible={editModalVisible}
        transparent={true}
        statusBarTranslucent={true}>
        <View style={modalStyles.editModal}>
          <View style={modalStyles.modalContainer}>
            <View style={modalStyles.modalHeader}>
              <Text style={modalStyles.modalTitle}>Editar Administrador</Text>
              <Pressable onPress={() => setEditModalVisible(false)}>
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
                  placeholder={admin.name}
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
                  placeholder={admin.email}
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
                <Text style={buttonStyles.btnTxt}>Editar Administrador</Text>
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

export default EditAdminModal;
