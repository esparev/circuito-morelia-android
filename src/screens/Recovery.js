import React, {useState} from 'react';
import {
  Image,
  Pressable,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import loginStyles from '../styles/loginStyles';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {envConfig} from '../utils/config';
import CircuitoMorelia from '../assets/imgs/Circuito_Morelia.png';

const Recovery = () => {
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const recover = async (url, data) => {
    await axios
      .post(url, data)
      .then(res => {
        navigation.navigate('Correo Envíado');
      })
      .catch(error => {
        setError(true);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      recover(`${envConfig.apiUrl}/auth/recover`, data);
    },
  });

  return (
    <View style={[loginStyles.login, globalStyles.body]}>
      <View style={loginStyles.loginHeader}>
        <View style={loginStyles.loginFigure}>
          <Image style={loginStyles.loginFigureImg} source={CircuitoMorelia} />
        </View>
        <View>
          <Text style={loginStyles.loginTitle}>Recuperar contraseña</Text>
        </View>
        <View>
          <Text style={loginStyles.loginTxt}>
            Ingresa tu correo electrónico para recuperar tu contraseña
          </Text>
        </View>
      </View>

      <View style={loginStyles.loginForm}>
        <View style={loginStyles.loginFormField}>
          <Text style={loginStyles.loginFormFieldLbl}>Correo electrónico</Text>
          <TextInput
            style={loginStyles.loginFormFieldInput}
            placeholder="Ingresa tu correo electrónico"
            placeholderTextColor={'#737373'}
            selectionColor={'#222227'}
            autoCapitalize="none"
            value={formik.values.email}
            onChangeText={input => formik.setFieldValue('email', input)}
          />
          <Text style={loginStyles.loginFormFieldErr}>
            {formik.errors.email}
          </Text>
          <Text style={loginStyles.loginFormFieldErr}>
            {error
              ? 'Hubo un error al recuperar tu contraseña, inténtalo más tarde'
              : null}
          </Text>
        </View>
        <TouchableOpacity
          style={loginStyles.loginFormBtn}
          onPress={formik.handleSubmit}>
          <Text style={loginStyles.loginFormBtnTxt}>Recuperar contraseña</Text>
        </TouchableOpacity>
        <View style={loginStyles.loginCreateAccount}>
          <Text style={loginStyles.loginFormQuestion}>Regresar a </Text>
          <Pressable onPress={() => navigation.navigate('Iniciar Sesión')}>
            <Text style={loginStyles.loginFormQuestionBtn}>
              inicio de sesión
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const initialValues = () => {
  return {email: ''};
};

const validationSchema = () => {
  return {
    email: Yup.string()
      .email('Ingrese un correo válido')
      .required('Por favor ingrese su correo'),
  };
};

export default Recovery;
