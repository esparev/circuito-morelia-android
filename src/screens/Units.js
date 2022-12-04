import React, {useEffect, useState} from 'react';
import {Pressable, Text, Image, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UnitList from '../components/UnitList';
import useAuth from '../hooks/useAuth';
import useGetUnits from '../hooks/useGetUnits';
import AddUnitModal from '../components/AddUnitModal';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import alertStyles from '../styles/alertStyles';
import buttonStyles from '../styles/buttonStyles';
import {envConfig} from '../utils/config';

const Units = () => {
  const {auth} = useAuth();
  const [activeTab, setActiveTab] = useState(true);
  const [alert, setAlert] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const units = useGetUnits(envConfig.apiUrl);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          {auth.user.role === 'hero' || auth.user.role === 'admin' ? (
            <Pressable
              style={buttonStyles.btnBgBlack}
              onPress={() => setModalVisible(true)}>
              <Image
                style={buttonStyles.btnIcon}
                source={require('../assets/icons/add.png')}
              />
              <Text style={buttonStyles.btnTxt}>Agregar</Text>
            </Pressable>
          ) : null}
        </>
      ),
    });
  }, []);

  const handleTabToggle = () => {
    setActiveTab(!activeTab);
  };

  /*const units = [
    {
      number: 101,
      location: 'Tecnológico de Morelia',
      distanceInTime: 5,
      distanceInKm: 5,
      onRoute: true,
    },
    {
      number: 115,
      location: 'Psicología',
      distanceInTime: 12,
      distanceInKm: 5,
      onRoute: true,
    },
    {
      number: 120,
      location: 'Lomas de Morelia',
      distanceInTime: 60,
      distanceInKm: 5,
      onRoute: true,
    },
    {
      number: 114,
      location: 'Las Américas',
      distanceInTime: 30,
      distanceInKm: 5,
      onRoute: true,
    },
    {
      number: 105,
      location: 'Plaza Fiesta Camelinas',
      distanceInTime: 73,
      distanceInKm: 5,
      onRoute: true,
    },
    {
      number: 90,
      location: 'Crucero Mil Cumbres',
      distanceInTime: 47,
      distanceInKm: 5,
      onRoute: true,
    },
    {
      number: 21,
      location: 'Policía y Tránsito',
      distanceInTime: 47,
      distanceInKm: 5,
      onRoute: false,
    },
  ];*/

  return (
    <SafeAreaView style={globalStyles.body}>
      {/* TabBar */}
      <View style={tabBarStyles.tabBar}>
        <Pressable
          style={
            activeTab
              ? [tabBarStyles.tabBarBtn, tabBarStyles.tabBarBtnActive]
              : tabBarStyles.tabBarBtn
          }
          onPressIn={handleTabToggle}
          disabled={activeTab}>
          <Text
            style={
              activeTab
                ? tabBarStyles.tabBarTxt
                : [tabBarStyles.tabBarTxt, tabBarStyles.tabBarTxtInactive]
            }>
            Ida
          </Text>
        </Pressable>
        <Pressable
          style={
            activeTab
              ? tabBarStyles.tabBarBtn
              : [tabBarStyles.tabBarBtn, tabBarStyles.tabBarBtnActive]
          }
          onPressIn={handleTabToggle}
          disabled={!activeTab}>
          <Text
            style={
              activeTab
                ? [tabBarStyles.tabBarTxt, tabBarStyles.tabBarTxtInactive]
                : tabBarStyles.tabBarTxt
            }>
            Regreso
          </Text>
        </Pressable>
      </View>

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
                ? '¡Unidad agregada exitosamente!'
                : '¡Ups!, Hubo un error al agregar la unidad.'}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={globalStyles.hero}>
        <UnitList units={units} />
      </View>

      <AddUnitModal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(false)}
        setAlert={setAlert}
      />
    </SafeAreaView>
  );
};

export default Units;
