import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import itemStyles from '../styles/itemStyles';

const AdminItem = props => {
  const {admin} = props;
  const navigation = useNavigation();

  const goToAdmin = () => {
    navigation.push('Administrador', {slug: admin.slug});
  };

  return (
    <TouchableOpacity style={itemStyles.entityItem} onPress={goToAdmin}>
      <View style={itemStyles.entityInfo}>
        <Image
          style={itemStyles.entityIcon}
          source={require('../assets/icons/user-active.png')}
        />
        <View style={itemStyles.entityLocationDistance}>
          <Text style={globalStyles.textRegular}>{admin.name}</Text>
          <Text style={globalStyles.textSmall}>{admin.email}</Text>
        </View>
      </View>
      <Image
        style={itemStyles.seeEntity}
        source={require('../assets/icons/chevron.png')}
      />
    </TouchableOpacity>
  );
};

export default AdminItem;
