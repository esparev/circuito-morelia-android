import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import StopItem from '../components/StopItem';
import globalStyles from '../styles/globalStyles';
import tabBarStyles from '../styles/tabBarStyles';
import homeStyles from '../styles/homeStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [activeChip1, setActiveChip1] = useState(false);
  const [activeChip2, setActiveChip2] = useState(false);

  const navigation = useNavigation();

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
      distanceInTime: 5,
      distanceInKm: 5,
    },
    {
      name: 'Psicología',
      distanceInTime: 12,
      distanceInKm: 12,
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

        <Pressable style={homeStyles.map}>
          <WebView
            style={{width: '100%', height: 410}}
            source={{
              html: `<iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              style="filter: grayscale(1) contrast(1.2) opacity(0.7); border-radius: 20px;"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=morelia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`,
            }}
          />
        </Pressable>
      </View>

      {/* Close Stops */}
      <View style={homeStyles.closeStops}>
        <View style={homeStyles.stopsHeader}>
          <Text style={globalStyles.h2}>Paradas cercanas a ti</Text>
          <TouchableOpacity
            style={homeStyles.seeMoreBtn}
            onPress={() => {
              navigation.navigate('Paradas');
            }}>
            <Text style={homeStyles.seeMoreTxt}>Ver más</Text>
            <Image
              style={homeStyles.seeMoreIcon}
              source={require('../assets/icons/chevron.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={homeStyles.stops}>
          {stops.map(stop => (
            <StopItem
              key={stop.name}
              location={stop.name}
              distanceInTime={stop.distanceInTime}
              distanceInKm={stop.distanceInKm}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Home;
