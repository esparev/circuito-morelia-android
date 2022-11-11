import React, {useState} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import homeStyles from '../styles/HomeStyles';

const Home = () => {
  const [activeTab, setActiveTab] = useState(true);

  const handleToggle = () => {
    setActiveTab(!activeTab);
  };

  return (
    <View style={homeStyles.body}>
      {/* StatusBar */}
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      {/* TabBar */}
      <View style={homeStyles.tabBar}>
        <Pressable
          style={
            activeTab
              ? [homeStyles.tabBarBtn, homeStyles.tabBarBtnActive]
              : homeStyles.tabBarBtn
          }
          onPressIn={handleToggle}
          disabled={activeTab}>
          <Text
            style={
              activeTab
                ? homeStyles.tabBarTxt
                : [homeStyles.tabBarTxt, homeStyles.tabBarTxtInactive]
            }>
            Ida
          </Text>
        </Pressable>
        <Pressable
          style={
            activeTab
              ? homeStyles.tabBarBtn
              : [homeStyles.tabBarBtn, homeStyles.tabBarBtnActive]
          }
          onPressIn={handleToggle}
          disabled={!activeTab}>
          <Text
            style={
              activeTab
                ? [homeStyles.tabBarTxt, homeStyles.tabBarTxtInactive]
                : homeStyles.tabBarTxt
            }>
            Regreso
          </Text>
        </Pressable>
      </View>

      {/* Map */}

      {/* Close Stops */}
    </View>
  );
};

export default Home;
