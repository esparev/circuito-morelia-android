import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
};

export default App;
