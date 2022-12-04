import React, {useEffect, useState} from 'react';
import {Pressable, Text, Image, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DriverList from '../components/DriverList';
import useAuth from '../hooks/useAuth';
import useGetUsers from '../hooks/useGetUsers';
import AddDriverModal from '../components/AddDriverModal';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import alertStyles from '../styles/alertStyles';
import buttonStyles from '../styles/buttonStyles';
import {envConfig} from '../utils/config';

const Drivers = () => {
  const {auth} = useAuth();
  const [activeTab, setActiveTab] = useState(true);
  const [alert, setAlert] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const users = useGetUsers(envConfig.apiUrl);
  const drivers = users.filter(driver => driver.role === 'driver');
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
                ? '¡Conductor agregado exitosamente!'
                : '¡Ups!, Hubo un error al agregar al conductor.'}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={globalStyles.hero}>
        <DriverList drivers={drivers} />
      </View>

      <AddDriverModal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(false)}
        setAlert={setAlert}
      />
    </SafeAreaView>
  );
};

export default Drivers;
