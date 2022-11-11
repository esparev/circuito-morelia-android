import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import homeStyles from '../styles/homeStyles';

const Home = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [activeChip1, setActiveChip1] = useState(false);
  const [activeChip2, setActiveChip2] = useState(false);

  const handleTabToggle = () => {
    setActiveTab(!activeTab);
  };

  const handleChip1Toggle = () => {
    setActiveChip1(!activeChip1);
  };

  const handleChip2Toggle = () => {
    setActiveChip2(!activeChip2);
  };

  const stops = [
    {
      name: 'Tecnológico de Morelia',
      distance: 5,
    },
    {
      name: 'Psicología',
      distance: 12,
    },
  ];

  return (
    <View style={globalStyles.body}>
      {/* StatusBar */}
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      {/* TabBar */}
      <View style={homeStyles.tabBar}>
        <Pressable
          style={
            activeTab
              ? [homeStyles.tabBarBtn, homeStyles.tabBarBtnActive]
              : homeStyles.tabBarBtn
          }
          onPressIn={handleTabToggle}
          disabled={activeTab}>
          <Text
            style={
              activeTab
                ? homeStyles.tabBarTxt
                : [homeStyles.tabBarTxt, homeStyles.tabBarTxtInactive]
            }>
            Ida
          </Text>
        </Pressable>
        <Pressable
          style={
            activeTab
              ? homeStyles.tabBarBtn
              : [homeStyles.tabBarBtn, homeStyles.tabBarBtnActive]
          }
          onPressIn={handleTabToggle}
          disabled={!activeTab}>
          <Text
            style={
              activeTab
                ? [homeStyles.tabBarTxt, homeStyles.tabBarTxtInactive]
                : homeStyles.tabBarTxt
            }>
            Regreso
          </Text>
        </Pressable>
      </View>

      {/* Map */}
      <View style={homeStyles.mapContainer}>
        <Text style={globalStyles.h2}>Cerca de ti</Text>
        <View style={homeStyles.mapFilter}>
          <Pressable
            style={
              activeChip1
                ? [homeStyles.filterChipActive, homeStyles.filterChipInactive]
                : homeStyles.filterChipInactive
            }
            onPressIn={handleChip1Toggle}>
            <Image
              style={homeStyles.filterIcon}
              source={
                activeChip1
                  ? require('../assets/icons/side-bus-active.png')
                  : require('../assets/icons/side-bus-inactive.png')
              }
            />
            <Text
              style={
                activeChip1
                  ? homeStyles.filterTxtActive
                  : homeStyles.filterTxtInactive
              }>
              Paradas
            </Text>
          </Pressable>
          <Pressable
            style={
              activeChip2
                ? [homeStyles.filterChipActive, homeStyles.filterChipInactive]
                : homeStyles.filterChipInactive
            }
            onPressIn={handleChip2Toggle}>
            <Image
              style={homeStyles.filterIcon}
              source={
                activeChip2
                  ? require('../assets/icons/map-pin-active.png')
                  : require('../assets/icons/map-pin-inactive.png')
              }
            />
            <Text
              style={
                activeChip2
                  ? homeStyles.filterTxtActive
                  : homeStyles.filterTxtInactive
              }>
              Unidades
            </Text>
          </Pressable>
        </View>

        <Pressable>
          <Image />
        </Pressable>
      </View>

      {/* Close Stops */}
      <View style={homeStyles.closeStops}>
        <View style={homeStyles.stopsHeader}>
          <Text style={globalStyles.h2}>Paradas cercanas a ti</Text>
          <Pressable style={homeStyles.seeMoreBtn}>
            <Text style={homeStyles.seeMoreTxt}>Ver más</Text>
            <Image
              style={homeStyles.seeMoreIcon}
              source={require('../assets/icons/chevron.png')}
            />
          </Pressable>
        </View>

        <View style={homeStyles.stops}>
          {stops.map(stop => (
            <TouchableOpacity style={homeStyles.stopItem}>
              <View style={homeStyles.stopInfo}>
                <Image
                  style={homeStyles.stopIcon}
                  source={require('../assets/icons/map-area.png')}
                />
                <View style={homeStyles.stopLocationDistance}>
                  <Text style={globalStyles.textRegular}>{stop.name}</Text>
                  <Text style={globalStyles.textSmall}>
                    Más cerca • {stop.distance} min de distancia
                  </Text>
                </View>
              </View>
              <Image
                style={homeStyles.seeStop}
                source={require('../assets/icons/chevron.png')}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Home;
