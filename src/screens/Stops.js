import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, ScrollView} from 'react-native';
import StopItem from '../components/StopItem';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import stopsStyles from '../styles/stopsStyles';
import {getStopsApi} from '../api/stops';

const Stops = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [stops, setStops] = useState([]);

  const handleTabToggle = () => {
    setActiveTab(!activeTab);
  };

  useEffect(() => {
    (async () => {
      await loadStops();
    })();
  }, []);

  const loadStops = async () => {
    try {
      const response = await getStopsApi();
      setStops([...response]);
    } catch (error) {
      console.log(error);
    }
  };

  /*const stops = [
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
        {stops.map(stop => (
          <StopItem
            key={stop.id}
            name={stop.name}
            // distanceInTime={stop.distanceInTime}
            // distanceInKm={stop.distanceInKm}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Stops;
