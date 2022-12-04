import React, {useState} from 'react';
import {Pressable, Image, Text, View, SafeAreaView} from 'react-native';
// import SinglePageHeader from '@components/SinglePageHeader';
// import AssignDriverModal from '@components/AssignDriverModal';
import EditUnitModal from '../components/EditUnitModal';
// import DeleteUnitModal from '@components/DeleteUnitModal';
import UnitList from '../components/UnitList';
import useGetUnit from '../hooks/useGetUnit';
import useGetUnits from '../hooks/useGetUnits';
import useAuth from '../hooks/useAuth';
import globalStyles from '../styles/globalStyles';
import buttonStyles from '../styles/buttonStyles';
import alertStyles from '../styles/alertStyles';
import entityStyles from '../styles/entityStyles';
import {envConfig} from '../utils/config';

const Unit = props => {
  const {route} = props;
  const {auth} = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [alert, setAlert] = useState('');
  const unit = useGetUnit(envConfig.apiUrl, route.params.number);
  const allUnits = useGetUnits(envConfig.apiUrl);
  const units = allUnits.filter(otherUnit => otherUnit.number !== unit.number);

  return (
    <SafeAreaView style={globalStyles.body}>
      <View style={alertStyles.alert}>
        {alert ? (
          <View
            style={
              alert === 'success'
                ? [alertStyles.alertContainer, alertStyles.alertGreen]
                : [alertStyles.alertContainer, alertStyles.alertRed]
            }>
            <Text style={alertStyles.alertMsg}>
              {alert === 'success'
                ? '¡Unidad editada exitosamente!'
                : '¡Ups!, Hubo un error al editar la unidad.'}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={globalStyles.hero}>
        <View>
          <View style={entityStyles.entityHeader}>
            <View>
              <Text style={globalStyles.h2}>Unidad {unit.number}</Text>
            </View>
            {auth.user.role === 'hero' || auth.user.role === 'admin' ? (
              <View style={buttonStyles.btnsContainer}>
                <Pressable
                  style={buttonStyles.btnBgBlack}
                  onPress={() => setModalVisible(true)}>
                  <Image
                    style={buttonStyles.btnIcon}
                    source={require('../assets/icons/pencil.png')}
                  />
                  <Text style={buttonStyles.btnTxt}>Editar</Text>
                </Pressable>
                <Pressable style={buttonStyles.btnBgRed}>
                  <Image
                    style={buttonStyles.btnIcon}
                    source={require('../assets/icons/trash-bin.png')}
                  />
                  <Text style={buttonStyles.btnTxt}>Eliminar</Text>
                </Pressable>
              </View>
            ) : null}
          </View>
        </View>
        <View style={entityStyles.moreEntities}>
          <Text style={globalStyles.h3}>Más Unidades</Text>
          <UnitList units={units} />
        </View>
      </View>

      <EditUnitModal
        number={route.params.number}
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(false)}
        setAlert={setAlert}
      />
      {/* <AssignDriverModal number={unit.number} />
      <DeleteUnitModal number={unit.number} /> */}
    </SafeAreaView>
  );
};

export default Unit;
