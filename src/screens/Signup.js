import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  Pressable,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import loginStyles from '../styles/loginStyles';
import axios from 'axios';
import slugify from 'slugify';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {envConfig} from '../utils/config';
import CircuitoMorelia from '../assets/imgs/Circuito_Morelia.png';

const Signup = () => {
  const [error, setError] = useState(false);
  const [signing, setSigning] = useState(false);
  const navigation = useNavigation();

  const signup = async (url, data) => {
    await axios
      .post(url, data)
      .then(res => {
        const user = res.data;
        navigation.navigate('Iniciar Sesión');
        setSigning(false);
      })
      .catch(error => {
        setError(true);
        setSigning(false);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      setSigning(true);
      const regex = /\s+/g;
      data.slug = slugify(data.name.replace(regex, '-'), {lower: true});
      signup(`${envConfig.apiUrl}/users`, data);
    },
  });

  return (
    <View style={[loginStyles.login, globalStyles.body]}>
      <View style={loginStyles.loginHeader}>
        <View style={loginStyles.loginFigure}>
          <Image style={loginStyles.loginFigureImg} source={CircuitoMorelia} />
        </View>
        <View>
          <Text style={loginStyles.loginTitle}>Crea una cuenta</Text>
        </View>
        <View>
          <Text style={loginStyles.loginTxt}>
            Crea una cuenta y conoce el circuito
          </Text>
        </View>
      </View>

      <View style={loginStyles.loginForm}>
        <View style={loginStyles.loginFormField}>
          <Text style={loginStyles.loginFormFieldLbl}>Nombre</Text>
          <TextInput
            style={loginStyles.loginFormFieldInput}
            placeholder="Ingresa tu nombre"
            placeholderTextColor={'#737373'}
            selectionColor={'#222227'}
            autoCapitalize="none"
            value={formik.values.name}
            onChangeText={input => formik.setFieldValue('name', input)}
          />
          <Text style={loginStyles.loginFormFieldErr}>
            {formik.errors.name}
          </Text>
        </View>
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
              Hubo un error al crear tu cuenta
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={loginStyles.loginFormBtn}
          onPress={formik.handleSubmit}>
          <View style={loginStyles.loginFormBtnProcess}>
            {signing ? (
              <View style={loginStyles.loginFormBtnProcess}>
                <View style={loginStyles.loginSpinner}>
                  <ActivityIndicator color="#ffffff" />
                </View>
                <Text style={loginStyles.loginFormBtnTxt}>Procesando...</Text>
              </View>
            ) : (
              <Text style={loginStyles.loginFormBtnTxt}>Crear cuenta</Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={loginStyles.loginCreateAccount}>
          <Text style={loginStyles.loginFormQuestion}>
            ¿Ya tienes una cuenta?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Iniciar Sesión')}>
            <Text style={loginStyles.loginFormQuestionBtn}>Inicia sesión</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const initialValues = () => {
  return {slug: '', name: '', email: '', password: '', role: 'client'};
};

const validationSchema = () => {
  return {
    name: Yup.string().required('Por favor ingrese su nombre'),
    email: Yup.string()
      .email('Ingrese un correo válido')
      .required('Por favor ingrese su correo'),
    password: Yup.string().required('Por favor ingrese su contraseña'),
  };
};

export default Signup;
