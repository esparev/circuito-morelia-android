import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import globalStyles from '../styles/globalStyles';
import profileStyles from '../styles/profileStyles';

const Profile = () => {
  const {auth, logout} = useAuth();
  const navigation = useNavigation();

  const logoutUser = () => {
    logout();
    navigation.navigate('Iniciar Sesión');
  };

  return (
    <View style={[globalStyles.body, profileStyles.screen]}>
      {/* Profile */}
      <View style={profileStyles.profile}>
        <Pressable style={profileStyles.image}>
          <Image
            style={profileStyles.profileImg}
            source={require('../assets/icons/default-profile.png')}
          />
          <Image
            style={profileStyles.editIcon}
            source={require('../assets/icons/edit.png')}
          />
        </Pressable>
        <View style={profileStyles.name}>
          <Text style={globalStyles.h1}>{auth.user.name}</Text>
        </View>
      </View>
      {/* Info */}
      <View style={profileStyles.infoContainer}>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Nombre</Text>
          <Text style={globalStyles.textRegular}>{auth.user.name}</Text>
        </View>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Nombre de usuario</Text>
          <Text style={globalStyles.textRegular}>{auth.user.slug}</Text>
        </View>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Correo electrónico</Text>
          <Text style={globalStyles.textRegular}>{auth.user.email}</Text>
        </View>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Contraseña</Text>
          <Text style={globalStyles.textRegular}>••••</Text>
        </View>
      </View>

      <Pressable style={profileStyles.logoutBtn} onPress={logoutUser}>
        <Text style={profileStyles.logoutTxt}>Cerrar sesión</Text>
        <Image
          style={profileStyles.logoutIcon}
          source={require('../assets/icons/logout.png')}
        />
      </Pressable>
    </View>
  );
};

export default Profile;
