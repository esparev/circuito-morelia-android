import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Stops from '../screens/Stops';
import Profile from '../screens/Profile';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  const tabBarOptions = {
    headerTitleAlign: 'center',
    headerTitleStyle: {fontFamily: 'Inter-Medium', fontSize: 16},
    headerStyle: {height: 40},
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    tabBarActiveTintColor: '#222227',
    tabBarInactiveTintColor: '#5A5A5A',
    tabBarStyle: {height: 72},
  };

  const tabIconStyles = {width: 32, height: 32};

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Inter-Regular',
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          ...tabBarOptions,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={tabIconStyles}
              source={
                focused
                  ? require('../assets/icons/Home_Fill.png')
                  : require('../assets/icons/Home_Line.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Paradas"
        component={Stops}
        options={{
          ...tabBarOptions,
          tabBarIcon: ({focused}) => (
            <Image
              style={tabIconStyles}
              source={
                focused
                  ? require('../assets/icons/Bus_Fill.png')
                  : require('../assets/icons/Bus_Line.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          ...tabBarOptions,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={tabIconStyles}
              source={
                focused
                  ? require('../assets/icons/User_Fill.png')
                  : require('../assets/icons/User_Line.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
