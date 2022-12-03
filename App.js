import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import SplashScreen from 'react-native-splash-screen';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* StatusBar */}
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <AuthProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
};

export default App;
