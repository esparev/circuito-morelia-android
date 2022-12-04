import React, {useState} from 'react';
import {Pressable, Text, View, ScrollView} from 'react-native';
import StopItem from '../components/StopItem';
import useGetStops from '../hooks/useGetStops';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import stopsStyles from '../styles/stopsStyles';
import {envConfig} from '../utils/config';

const Stops = () => {
  const stops = useGetStops(envConfig.apiUrl);
  const outwardStops = stops.filter(stop => stop.wayDirection === 'Ida');
  const [activeTab, setActiveTab] = useState(true);
  const [filter, setFilter] = useState(false);
  const [returnStops, setReturnStops] = useState({});

  const stopsByReturn = () => {
    setFilter(!filter);
    setReturnStops(stops.filter(stop => stop.wayDirection === 'Regreso'));
  };

  const distance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == 'K') {
        dist = dist * 1.609344;
      }
      if (unit == 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };

  const time = (distance, speed = 7) => {
    return ((distance / speed) * 100).toFixed(0);
  };

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
          onPress={() => {
            setActiveTab(!activeTab);
            setFilter(false);
          }}
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
          onPress={() => {
            setActiveTab(!activeTab);
            stopsByReturn();
          }}
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
        {filter ? (
          <>
            {returnStops.map(stop => (
              <StopItem
                key={stop.id}
                location={stop.name}
                distanceInTime={time(
                  distance(
                    19.720708,
                    -101.186338,
                    stop.latitude,
                    stop.longitude,
                    'K',
                  ),
                )}
                distanceInKm={distance(
                  19.720708,
                  -101.186338,
                  stop.latitude,
                  stop.longitude,
                  'K',
                ).toFixed(0)}
              />
            ))}
          </>
        ) : (
          <>
            {outwardStops.map(stop => (
              <StopItem
                key={stop.id}
                location={stop.name}
                distanceInTime={Number(
                  time(
                    distance(
                      19.720708,
                      -101.186338,
                      stop.latitude,
                      stop.longitude,
                      'K',
                    ),
                  ),
                )}
                distanceInKm={distance(
                  19.720708,
                  -101.186338,
                  stop.latitude,
                  stop.longitude,
                  'K',
                ).toFixed(0)}
              />
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Stops;
