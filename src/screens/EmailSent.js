import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import loginStyles from '../styles/loginStyles';
import CircuitoMorelia from '../assets/imgs/Circuito_Morelia.png';

const EmailSent = () => {
  const navigation = useNavigation();

  return (
    <View style={[loginStyles.login, globalStyles.body]}>
      <View style={loginStyles.loginHeader}>
        <View style={loginStyles.loginFigure}>
          <Image style={loginStyles.loginFigureImg} source={CircuitoMorelia} />
        </View>
        <View>
          <Text style={loginStyles.loginTitle}>Correo envíado</Text>
        </View>
        <View>
          <Text style={loginStyles.loginTxt}>
            Revisa la bandeja de tu correo para cambiar tu contraseña
          </Text>
        </View>
      </View>

      <View style={loginStyles.loginForm}>
        <TouchableOpacity
          style={loginStyles.loginFormBtn}
          onPress={() => navigation.navigate('Iniciar Sesión')}>
          <Text style={loginStyles.loginFormBtnTxt}>
            Regresar a inicio de sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailSent;
