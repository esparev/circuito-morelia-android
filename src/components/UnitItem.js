import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import itemStyles from '../styles/itemStyles';

const UnitItem = props => {
  const {number, onRoute, location} = props;

  return (
    <TouchableOpacity style={itemStyles.entityItem}>
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
          <Text style={globalStyles.textRegular}>Unidad {number}</Text>
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
