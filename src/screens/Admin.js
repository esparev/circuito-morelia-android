import React, {useState} from 'react';
import {Pressable, Image, Text, View, SafeAreaView} from 'react-native';
import EditAdminModal from '../components/EditAdminModal';
import DeleteAdminModal from '../components/DeleteAdminModal';
import AdminList from '../components/AdminList';
import useGetUser from '../hooks/useGetUser';
import useGetUsers from '../hooks/useGetUsers';
import useAuth from '../hooks/useAuth';
import globalStyles from '../styles/globalStyles';
import buttonStyles from '../styles/buttonStyles';
import alertStyles from '../styles/alertStyles';
import entityStyles from '../styles/entityStyles';
import {envConfig} from '../utils/config';

const Admin = props => {
  const {route} = props;
  const {auth} = useAuth();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editAlert, setEditAlert] = useState('');
  const [deleteAlert, setDeleteAlert] = useState('');
  const admin = useGetUser(envConfig.apiUrl, route.params.slug);
  const users = useGetUsers(envConfig.apiUrl);
  const admins = users.filter(
    otherAdmin =>
      otherAdmin.role !== 'driver' &&
      otherAdmin.role !== 'client' &&
      otherAdmin.slug !== admin.slug,
  );

  return (
    <SafeAreaView style={globalStyles.body}>
      <View styles={alertStyles.alert}>
        {editAlert ? (
          <View
            style={
              editAlert === 'success'
                ? [alertStyles.alertContainer, alertStyles.alertGreen]
                : [alertStyles.alertContainer, alertStyles.alertRed]
            }>
            <Text style={alertStyles.alertMsg}>
              {editAlert === 'success'
                ? '¡Administrador editado exitosamente!'
                : '¡Ups!, Hubo un error al editar al administrador.'}
            </Text>
          </View>
        ) : null}
        {deleteAlert ? (
          <View
            style={
              deleteAlert === 'success'
                ? [alertStyles.alertContainer, alertStyles.alertGreen]
                : [alertStyles.alertContainer, alertStyles.alertRed]
            }>
            <Text style={alertStyles.alertMsg}>
              {deleteAlert === 'success'
                ? '¡Administrador eliminado exitosamente!'
                : '¡Ups!, Hubo un error al eliminar al administrador.'}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={globalStyles.hero}>
        <View style={entityStyles.entityHeader}>
          <View>
            <Text style={globalStyles.h2}>{admin.name}</Text>
            <Text style={globalStyles.textSmall}>{admin.email}</Text>
          </View>
          {auth.user.role === 'hero' || auth.user.role === 'admin' ? (
            <View style={buttonStyles.btnsContainer}>
              <Pressable
                style={buttonStyles.btnBgBlack}
                onPress={() => setEditModalVisible(true)}>
                <Image
                  style={buttonStyles.btnIcon}
                  source={require('../assets/icons/pencil.png')}
                />
                <Text style={buttonStyles.btnTxt}>Editar</Text>
              </Pressable>
              <Pressable
                style={buttonStyles.btnBgRed}
                onPress={() => setDeleteModalVisible(true)}>
                <Image
                  style={buttonStyles.btnIcon}
                  source={require('../assets/icons/trash-bin.png')}
                />
                <Text style={buttonStyles.btnTxt}>Eliminar</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
        <View style={entityStyles.moreEntities}>
          <Text style={globalStyles.h3}>Más Administradores</Text>
          <AdminList admins={admins} />
        </View>
      </View>

      <EditAdminModal
        admin={admin}
        slug={route.params.slug}
        editModalVisible={editModalVisible}
        setEditModalVisible={() => setEditModalVisible(false)}
        setEditAlert={setEditAlert}
      />
      <DeleteAdminModal
        slug={route.params.slug}
        deleteModalVisible={deleteModalVisible}
        setDeleteModalVisible={() => setDeleteModalVisible(false)}
        setDeleteAlert={setDeleteAlert}
      />
    </SafeAreaView>
  );
};

export default Admin;
