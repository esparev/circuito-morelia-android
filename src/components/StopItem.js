import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import itemStyles from '../styles/itemStyles';

const StopItem = props => {
  const {name, distanceInTime, distanceInKm} = props;

  return (
    <TouchableOpacity style={itemStyles.entityItem}>
      <View style={itemStyles.entityInfo}>
        <Image
          style={itemStyles.entityIcon}
          source={require('../assets/icons/map-area.png')}
        />
        <View style={itemStyles.entityLocationDistance}>
          <Text style={globalStyles.textRegular}>{name}</Text>
          {distanceInTime < 15 ? (
            <Text style={globalStyles.textSmall}>
              Más cerca • {distanceInTime} min de distancia
            </Text>
          ) : (
            <Text style={globalStyles.textSmall}>
              A {distanceInKm}km
            </Text>
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

export default StopItem;
