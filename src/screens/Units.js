import React, {useState} from 'react';
import {Pressable, Text, View, ScrollView} from 'react-native';
import UnitItem from '../components/UnitItem';
import useGetUnits from '../hooks/useGetUnits';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import stopsStyles from '../styles/stopsStyles';
import {envConfig} from '../utils/config';

const Units = () => {
  const [activeTab, setActiveTab] = useState(true);
  const units = useGetUnits(envConfig.apiUrl);

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
    <ScrollView style={globalStyles.body}>
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

      <View style={stopsStyles.stops}>
        {units.map(unit => (
          <UnitItem
            key={unit.number}
            number={unit.number}
            // onRoute={unit.onRoute}
            // location={unit.location}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Units;
