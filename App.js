import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* StatusBar */}
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </>
  );
};

export default App;
