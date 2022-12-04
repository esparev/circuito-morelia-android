import React, {useState} from 'react';
import {Pressable, Image, Text, View, SafeAreaView} from 'react-native';
// import SinglePageHeader from '@components/SinglePageHeader';
// import AssignDriverModal from '@components/AssignDriverModal';
import EditDriverModal from '../components/EditDriverModal';
// import DeleteUnitModal from '@components/DeleteUnitModal';
import DriverList from '../components/DriverList';
import useGetUser from '../hooks/useGetUser';
import useGetUsers from '../hooks/useGetUsers';
import useAuth from '../hooks/useAuth';
import globalStyles from '../styles/globalStyles';
import buttonStyles from '../styles/buttonStyles';
import alertStyles from '../styles/alertStyles';
import entityStyles from '../styles/entityStyles';
import {envConfig} from '../utils/config';

const Driver = props => {
  const {route} = props;
  const {auth} = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [alert, setAlert] = useState('');
  const driver = useGetUser(envConfig.apiUrl, route.params.slug);
  const users = useGetUsers(envConfig.apiUrl);
  const drivers = users.filter(
    otherDriver =>
      otherDriver.role !== 'hero' &&
      otherDriver.role !== 'admin' &&
      otherDriver.role !== 'client' &&
      otherDriver.slug !== driver.slug,
  );

  return (
    <SafeAreaView style={globalStyles.body}>
      <View styles={alertStyles.alert}>
        {alert ? (
          <View
            style={
              alert === 'success'
                ? [alertStyles.alertContainer, alertStyles.alertGreen]
                : [alertStyles.alertContainer, alertStyles.alertRed]
            }>
            <Text style={alertStyles.alertMsg}>
              {alert === 'success'
                ? '¡Conductor editado exitosamente!'
                : '¡Ups!, Hubo un error al editar al conductor.'}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={globalStyles.hero}>
        <View style={entityStyles.entityHeader}>
          <View>
            <Text style={globalStyles.h2}>{driver.name}</Text>
            <Text style={globalStyles.textSmall}>{driver.email}</Text>
          </View>
          {auth.user.role === 'hero' || auth.user.role === 'admin' ? (
            <View style={buttonStyles.btnsContainer}>
              <Pressable
                style={buttonStyles.btnBgBlack}
                onPress={() => setModalVisible(true)}>
                <Image
                  style={buttonStyles.btnIcon}
                  source={require('../assets/icons/pencil.png')}
                />
                <Text style={buttonStyles.btnTxt}>Editar</Text>
              </Pressable>
              <Pressable style={buttonStyles.btnBgRed}>
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
          <Text style={globalStyles.h3}>Más Conductores</Text>
          <DriverList drivers={drivers} />
        </View>
      </View>

      <EditDriverModal
        driver={driver}
        slug={route.params.slug}
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(false)}
        setAlert={setAlert}
      />
      {/* <AssignDriverModal number={unit.number} />
      <DeleteUnitModal number={unit.number} /> */}
    </SafeAreaView>
  );
};

export default Driver;
