import React, {useState} from 'react';
import {Pressable, Text, View, ScrollView, SafeAreaView} from 'react-native';
import DriverList from '../components/DriverList';
import useGetUsers from '../hooks/useGetUsers';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import {envConfig} from '../utils/config';

const Drivers = () => {
  const [activeTab, setActiveTab] = useState(true);
  const users = useGetUsers(envConfig.apiUrl);
  const drivers = users.filter(driver => driver.role === 'driver');

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

      <View style={globalStyles.hero}>
        <DriverList drivers={drivers} />
      </View>
    </SafeAreaView>
  );
};

export default Drivers;
