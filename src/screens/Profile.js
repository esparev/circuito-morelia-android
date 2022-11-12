import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import profileStyles from '../styles/profileStyles';

const Profile = () => {
  return (
    <View style={[globalStyles.body, profileStyles.screen]}>
      {/* Profile */}
      <View style={profileStyles.profile}>
        <Pressable style={profileStyles.image}>
          <Image
            style={profileStyles.profileImg}
            source={require('../assets/icons/oscar.png')}
          />
          <Image
            style={profileStyles.editIcon}
            source={require('../assets/icons/edit.png')}
          />
        </Pressable>
        <View>
          <Text style={globalStyles.h1}>Oscar Isaac Hernández Estrada</Text>
        </View>
      </View>
      {/* Info */}
      <View style={profileStyles.infoContainer}>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Nombre</Text>
          <Text style={globalStyles.textRegular}>
            Oscar Isaac Hernández Estrada
          </Text>
        </View>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Nombre de usuario</Text>
          <Text style={globalStyles.textRegular}>oscar.isaac</Text>
        </View>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Correo electrónico</Text>
          <Text style={globalStyles.textRegular}>oscar.isaac@gmail.com</Text>
        </View>
        <View style={profileStyles.info}>
          <Text style={globalStyles.textSmall}>Contraseña</Text>
          <Text style={globalStyles.textRegular}>••••</Text>
        </View>
      </View>

      <Pressable style={profileStyles.logoutBtn}>
        <Text style={profileStyles.logoutTxt}>Cerrar Sesión</Text>
        <Image
          style={profileStyles.logoutIcon}
          source={require('../assets/icons/logout.png')}
        />
      </Pressable>
    </View>
  );
};

export default Profile;
