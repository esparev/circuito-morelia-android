import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
// import SinglePageHeader from '@components/SinglePageHeader';
// import AssignDriverModal from '@components/AssignDriverModal';
// import EditUnitModal from '@components/EditUnitModal';
// import DeleteUnitModal from '@components/DeleteUnitModal';
import UnitList from '../components/UnitList';
import useGetUnit from '../hooks/useGetUnit';
import useGetUnits from '../hooks/useGetUnits';
import globalStyles from '../styles/globalStyles';
import alertStyles from '../styles/alertStyles';
import {envConfig} from '../utils/config';

const Unit = props => {
  const {route} = props;
  const unit = useGetUnit(envConfig.apiUrl, route.params.number);
  const allUnits = useGetUnits(envConfig.apiUrl);
  const units = allUnits.filter(otherUnit => otherUnit.number !== unit.number);

  const showAssignModal = () => {
    const modal = document.querySelector('.assign__modal');
    modal.classList.add('modal--show');
  };

  const showEditModal = () => {
    const modal = document.querySelector('.edit__modal');
    modal.classList.add('modal--show');
  };

  const showDeleteModal = () => {
    const modal = document.querySelector('.delete__modal');
    modal.classList.add('modal--show');
  };

  return (
    <SafeAreaView style={globalStyles.body}>
      <View styles={alertStyles.alert}></View>

      {/* <SinglePageHeader
        title={`Unidad ${unit.number}`}
        info={``}
        entityName="Unidad"
        otherEntityName="Conductor"
        hasExtraButton
        isDriverBtn
        onAssign={showAssignModal}
        onEdit={showEditModal}
        onDelete={showDeleteModal}
      /> */}

      <View style={globalStyles.hero}>
        <View>
          <Text style={globalStyles.h2}>Unidad {unit.number}</Text>
        </View>
        <View>
          <Text style={globalStyles.h3}>Más Unidades</Text>
          <UnitList units={units} />
        </View>
      </View>

      {/* <AssignDriverModal number={unit.number} />
      <EditUnitModal number={unit.number} />
      <DeleteUnitModal number={unit.number} /> */}
    </SafeAreaView>
  );
};

export default Unit;
