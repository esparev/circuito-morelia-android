import React, {useState} from 'react';
import {Image, Modal, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import buttonStyles from '../styles/buttonStyles';
import modalStyles from '../styles/modalStyles';
import {envConfig} from '../utils/config';

const DeleteAdminModal = props => {
  const {slug, deleteModalVisible, setDeleteModalVisible, setDeleteAlert} = props;
  const [confirmed, setConfirm] = useState(false);
  const navigation = useNavigation();
  const {auth} = useAuth();

  const deleteAdmin = async (url, config) => {
    await axios
      .delete(url, config)
      .then(res => {
        setDeleteModalVisible(false);
        setDeleteAlert('success');

        setTimeout(() => {
          setDeleteAlert('');
          setTimeout(() => {
            navigation.navigate('Admins');
          }, 500);
        }, 3000);
      })
      .catch(error => {
        setDeleteModalVisible(false);
        setDeleteAlert('error');

        setTimeout(() => {
          setDeleteAlert('');
        }, 3000);
      });
  };

  const handleSubmit = () => {
    deleteAdmin(`${envConfig.apiUrl}/users/${slug}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
  };

  return (
    <View style={modalStyles.modalView}>
      <Modal
        animationType="slide"
        visible={deleteModalVisible}
        transparent={true}
        statusBarTranslucent={true}>
        <View style={modalStyles.editModal}>
          <View style={modalStyles.modalContainer}>
            <View style={modalStyles.modalHeader}>
              <Text style={modalStyles.modalTitle}>Eliminar administrador</Text>
              <Pressable onPress={() => setDeleteModalVisible(false)}>
                <Image
                  style={modalStyles.modalClose}
                  source={require('../assets/icons/close.png')}
                />
              </Pressable>
            </View>
            {confirmed ? (
              <View style={modalStyles.modalForm}>
                <Text style={modalStyles.modalFormTitle}>
                  ¿Está seguro que desea eliminar al administrador?
                </Text>
                <Text style={modalStyles.modalFormText}>
                  Esta acción es irreversible
                </Text>
                <View style={buttonStyles.btnsContainer}>
                  <Pressable
                    style={buttonStyles.btnBgRed}
                    onPress={handleSubmit}>
                    <Text style={buttonStyles.btnTxt}>Eliminar</Text>
                  </Pressable>
                  <Pressable
                    style={buttonStyles.btnBgGray}
                    onPress={() => {
                      setDeleteModalVisible(false);
                      setConfirm(false);
                    }}>
                    <Text style={buttonStyles.btnTxtBlack}>Cancelar</Text>
                  </Pressable>
                </View>
              </View>
            ) : (
              <View style={modalStyles.modalForm}>
                <Pressable
                  style={buttonStyles.btnBgRed}
                  onPress={() => setConfirm(true)}>
                  <Text style={buttonStyles.btnTxt}>Eliminar administrador</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteAdminModal;
