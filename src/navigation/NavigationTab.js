import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Units from '../screens/Units';
import Drivers from '../screens/Drivers';
import Profile from '../screens/Profile';
import vars from '../styles/vars';

const Tab = createBottomTabNavigator();

export const NavigationTab = () => {
  const tabBarOptions = {
    headerTitleAlign: 'left',
    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 20},
    headerStyle: {height: 40},
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    tabBarActiveTintColor: vars.black.color,
    tabBarInactiveTintColor: vars.gray300.color,
    tabBarStyle: {height: 72},
  };

  const tabIconStyles = {width: 32, height: 32};

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
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
        name="Unidades"
        component={Units}
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
        name="Conductores"
        component={Drivers}
        options={{
          ...tabBarOptions,
          tabBarIcon: ({focused}) => (
            <Image
              style={tabIconStyles}
              source={
                focused
                  ? require('../assets/icons/steering-wheel-active.png')
                  : require('../assets/icons/steering-wheel-inactive.png')
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

// export default NavigationTab;
