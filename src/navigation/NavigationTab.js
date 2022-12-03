import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './StackNavigator';
import {UnitsStackNavigator} from './StackNavigator';
import {DriversStackNavigator} from './StackNavigator';
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
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'Inter-Regular',
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name="Inicio"
        component={HomeStackNavigator}
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
        component={UnitsStackNavigator}
        options={{
          ...tabBarOptions,
          headerShown: false,
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
        component={DriversStackNavigator}
        options={{
          ...tabBarOptions,
          headerShown: false,
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

export default NavigationTab;
