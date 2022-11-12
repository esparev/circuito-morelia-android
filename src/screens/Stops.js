import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import StopItem from '../components/StopItem';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import stopsStyles from '../styles/stopsStyles';

const Stops = () => {
  const [activeTab, setActiveTab] = useState(true);

  const handleTabToggle = () => {
    setActiveTab(!activeTab);
  };

  const stops = [
    {
      name: 'Tecnológico de Morelia',
      distanceInTime: 5,
      distanceInKm: 5,
    },
    {
      name: 'Psicología',
      distanceInTime: 12,
      distanceInKm: 5,
    },
    {
      name: 'Lomas de Morelia',
      distanceInTime: 60,
      distanceInKm: 5,
    },
    {
      name: 'Las Américas',
      distanceInTime: 30,
      distanceInKm: 5,
    },
    {
      name: 'Plaza Fiesta Camelinas',
      distanceInTime: 73,
      distanceInKm: 5,
    },
    {
      name: 'Crucero Mil Cumbres',
      distanceInTime: 47,
      distanceInKm: 5,
    },
  ];

  return (
    <View style={globalStyles.body}>
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
        {stops.map(stop => (
          <StopItem
            key={stop.name}
            name={stop.name}
            distanceInTime={stop.distanceInTime}
            distanceInKm={stop.distanceInKm}
          />
        ))}
      </View>
    </View>
  );
};

export default Stops;
