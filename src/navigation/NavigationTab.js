import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useAuth from '../hooks/useAuth';
import Home from '../screens/Home';
import Units from '../screens/Units';
import Drivers from '../screens/Drivers';
import Admins from '../screens/Admins';
import Profile from '../screens/Profile';
import vars from '../styles/vars';

const Tab = createBottomTabNavigator();

export const NavigationTab = () => {
  const {auth} = useAuth();
  const screenOptions = {
    headerTitleAlign: 'left',
    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 20},
    headerStyle: {height: 40},
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    tabBarActiveTintColor: vars.black.color,
    tabBarInactiveTintColor: vars.gray300.color,
    tabBarStyle: {height: 72, paddingBottom: 12, paddingTop: 12},
    tabBarLabelStyle: {fontFamily: 'Inter-Medium', fontSize: 13},
  };

  const tabIconStyles = {width: 32, height: 32};

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          ...screenOptions,
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
          ...screenOptions,
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
          ...screenOptions,
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
      {auth.user.role === 'hero' || auth.user.role === 'admin' ? (
        <Tab.Screen
          name="Admins"
          component={Admins}
          options={{
            ...screenOptions,
            headerTitle: 'Administradores',
            tabBarIcon: ({focused}) => (
              <Image
                style={tabIconStyles}
                source={
                  focused
                    ? require('../assets/icons/admin-active.png')
                    : require('../assets/icons/admin-inactive.png')
                }
              />
            ),
          }}
        />
      ) : null}
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          ...screenOptions,
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
