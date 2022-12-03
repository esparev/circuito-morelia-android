import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import itemStyles from '../styles/itemStyles';

const DriverItem = props => {
  const {driver, onRoute, location} = props;
  const navigation = useNavigation();

  const goToDriver = () => {
    navigation.navigate('Conductor', {slug: driver.slug});
  };

  return (
    <TouchableOpacity style={itemStyles.entityItem} onPress={goToDriver}>
      <View style={itemStyles.entityInfo}>
        {onRoute ? (
          <Image
            style={itemStyles.entityIcon}
            source={require('../assets/icons/steering-wheel-active.png')}
          />
        ) : (
          <Image
            style={itemStyles.entityIcon}
            source={require('../assets/icons/steering-wheel-inactive.png')}
          />
        )}
        <View style={itemStyles.entityLocationDistance}>
          <Text style={globalStyles.textRegular}>{driver.name}</Text>
          {onRoute ? (
            <Text style={globalStyles.textSmall}>
              En ruta • Cerca de {location}
            </Text>
          ) : (
            <Text style={globalStyles.textSmall}>Fuera de servicio</Text>
          )}
        </View>
      </View>
      <Image
        style={itemStyles.seeEntity}
        source={require('../assets/icons/chevron.png')}
      />
    </TouchableOpacity>
  );
};

export default DriverItem;
