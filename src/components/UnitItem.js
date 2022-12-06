import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import itemStyles from '../styles/itemStyles';

const UnitItem = props => {
  const {unit, onRoute, location} = props;
  const navigation = useNavigation();

  const goToUnit = () => {
    navigation.push('Unidad', {number: unit.number});
  };

  return (
    <TouchableOpacity style={itemStyles.entityItem} onPress={goToUnit}>
      <View style={itemStyles.entityInfo}>
        {onRoute ? (
          <Image
            style={itemStyles.entityIcon}
            source={require('../assets/icons/side-bus-active-black.png')}
          />
        ) : (
          <Image
            style={itemStyles.entityIcon}
            source={require('../assets/icons/side-bus-inactive.png')}
          />
        )}
        <View style={itemStyles.entityLocationDistance}>
          <Text style={globalStyles.textRegular}>Unidad {unit.number}</Text>
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

export default UnitItem;
