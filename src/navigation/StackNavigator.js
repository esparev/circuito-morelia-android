import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Stops from '../screens/Stops';
import Units from '../screens/Units';
import Unit from '../screens/Unit';
import Drivers from '../screens/Drivers';
import Driver from '../screens/Driver';

const Stack = createStackNavigator();

const headerTitleOptions = {
  headerTitleStyle: {fontFamily: 'Inter-Bold'},
};

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Paradas"
        component={Stops}
        options={headerTitleOptions}
      />
    </Stack.Navigator>
  );
};

export const UnitsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Unidades"
        component={Units}
        options={headerTitleOptions}
      />
      <Stack.Screen
        name="Unidad"
        component={Unit}
        options={headerTitleOptions}
      />
    </Stack.Navigator>
  );
};

export const DriversStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Conductores"
        component={Drivers}
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
