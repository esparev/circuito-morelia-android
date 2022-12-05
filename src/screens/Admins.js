import React, {useEffect, useState} from 'react';
import {Pressable, Text, Image, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AdminList from '../components/AdminList';
import useGetUsers from '../hooks/useGetUsers';
import AddAdminModal from '../components/AddAdminModal';
import globalStyles from '../styles/globalStyles';
import alertStyles from '../styles/alertStyles';
import buttonStyles from '../styles/buttonStyles';
import {envConfig} from '../utils/config';

const Admins = () => {
  const [alert, setAlert] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const users = useGetUsers(envConfig.apiUrl);
  const admins = users.filter(
    admin => admin.role !== 'driver' && admin.role !== 'client',
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={buttonStyles.btnBgBlack}
          onPress={() => setModalVisible(true)}>
          <Image
            style={buttonStyles.btnIcon}
            source={require('../assets/icons/add.png')}
          />
          <Text style={buttonStyles.btnTxt}>Agregar</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={globalStyles.body}>
      <View style={alertStyles.alert}>
        {alert ? (
          <View
            style={
              alert === 'success'
                ? [alertStyles.alertContainer, alertStyles.alertGreen]
                : [alertStyles.alertContainer, alertStyles.alertRed]
            }>
            <Text style={alertStyles.alertMsg}>
              {alert === 'success'
                ? '¡Administrador agregado exitosamente!'
                : '¡Ups!, Hubo un error al agregar al administrador.'}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={globalStyles.hero}>
        <AdminList admins={admins} />
      </View>

      <AddAdminModal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(false)}
        setAlert={setAlert}
      />
    </SafeAreaView>
  );
};

export default Admins;
