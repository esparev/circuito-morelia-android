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
                  ? require('../assets/icons/home-active.png')
                  : require('../assets/icons/home-inactive.png')
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
                  ? require('../assets/icons/front-bus-active.png')
                  : require('../assets/icons/front-bus-inactive.png')
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
                  ? require('../assets/icons/user-active.png')
                  : require('../assets/icons/user-inactive.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
