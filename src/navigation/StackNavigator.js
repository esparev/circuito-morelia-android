import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationTab} from './NavigationTab';
import Login from '../screens/Login';
import Stops from '../screens/Stops';
import Unit from '../screens/Unit';
import Driver from '../screens/Driver';

const Stack = createStackNavigator();

const headerTitleOptions = {
  headerTitleStyle: {fontFamily: 'Inter-Bold'},
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Iniciar Sesión"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={NavigationTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Paradas"
        component={Stops}
        options={headerTitleOptions}
      />
      <Stack.Screen
        name="Units"
        component={NavigationTab}
        options={headerTitleOptions}
      />
      <Stack.Screen
        name="Unidad"
        component={Unit}
        options={headerTitleOptions}
      />
      <Stack.Screen
        name="Drivers"
        component={NavigationTab}
        options={headerTitleOptions}
      />
      <Stack.Screen
        name="Conductor"
        component={Driver}
        options={headerTitleOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
