import React, {useState} from 'react';
import {
  Image,
  Pressable,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import globalStyles from '../styles/globalStyles';
import loginStyles from '../styles/loginStyles';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {envConfig} from '../utils/config';
import CircuitoMorelia from '../assets/imgs/Circuito_Morelia.png';

const Login = () => {
  const [error, setError] = useState(false);
  const [logging, setLogging] = useState(false);
  const {login} = useAuth();
  const navigation = useNavigation();

  const loginUser = async (url, data) => {
    await axios
      .post(url, data)
      .then(res => {
        const user = res.data;
        login(user);
        navigation.navigate('Home');
        setLogging(false);
      })
      .catch(error => {
        setError(true);
        setLogging(false);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      setLogging(true);
      loginUser(`${envConfig.apiUrl}/auth/login`, data);
    },
  });

  return (
    <View style={[loginStyles.login, globalStyles.body]}>
      <View style={loginStyles.loginHeader}>
        <View style={loginStyles.loginFigure}>
          <Image style={loginStyles.loginFigureImg} source={CircuitoMorelia} />
        </View>
        <View>
          <Text style={loginStyles.loginTitle}>
            Hola, ¡bienvenido de vuelta!
          </Text>
        </View>
        <View>
          <Text style={loginStyles.loginTxt}>
            Inicia sesión para explorar el circuito
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
        </View>
        <View style={loginStyles.loginFormField}>
          <Text style={loginStyles.loginFormFieldLbl}>Contraseña</Text>
          <TextInput
            style={loginStyles.loginFormFieldInput}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={'#737373'}
            selectionColor={'#222227'}
            autoCapitalize="none"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={input => formik.setFieldValue('password', input)}
          />
          <Text style={loginStyles.loginFormFieldErr}>
            {formik.errors.password}
          </Text>
          {error ? (
            <Text style={loginStyles.loginFormFieldErr}>
              El correo o la contraseña son incorrectos
            </Text>
          ) : null}
        </View>
        <Pressable onPress={() => navigation.navigate('Recuperar Contraseña')}>
          <Text style={loginStyles.loginFormForgot}>
            ¿Olvidaste tu contraseña?
          </Text>
        </Pressable>
        <TouchableOpacity
          style={loginStyles.loginFormBtn}
          onPress={formik.handleSubmit}>
          <View style={loginStyles.loginFormBtnProcess}>
            {logging ? (
              <View style={loginStyles.loginFormBtnProcess}>
                <View style={loginStyles.loginSpinner}>
                  <ActivityIndicator color="#ffffff" />
                </View>
                <Text style={loginStyles.loginFormBtnTxt}>Procesando...</Text>
              </View>
            ) : (
              <Text style={loginStyles.loginFormBtnTxt}>Iniciar sesión</Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={loginStyles.loginCreateAccount}>
          <Text style={loginStyles.loginFormQuestion}>
            ¿No tienes una cuenta?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Crear Cuenta')}>
            <Text style={loginStyles.loginFormQuestionBtn}>Crear cuenta</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const initialValues = () => {
  return {email: '', password: ''};
};

const validationSchema = () => {
  return {
    email: Yup.string()
      .email('Ingrese un correo válido')
      .required('Por favor ingrese su correo'),
    password: Yup.string().required('Por favor ingrese su contraseña'),
  };
};

export default Login;
