import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
// import SinglePageHeader from '@components/SinglePageHeader';
// import AssignDriverModal from '@components/AssignDriverModal';
// import EditUnitModal from '@components/EditUnitModal';
// import DeleteUnitModal from '@components/DeleteUnitModal';
import DriverList from '../components/DriverList';
import useGetUser from '../hooks/useGetUser';
import useGetUsers from '../hooks/useGetUsers';
import globalStyles from '../styles/globalStyles';
import alertStyles from '../styles/alertStyles';
import entityStyles from '../styles/entityStyles';
import {envConfig} from '../utils/config';

const Driver = props => {
  const {route} = props;
  const driver = useGetUser(envConfig.apiUrl, route.params.slug);
  const users = useGetUsers(envConfig.apiUrl);
  const drivers = users.filter(
    (otherDriver) =>
      otherDriver.role !== 'hero' &&
      otherDriver.role !== 'admin' &&
      otherDriver.role !== 'client' &&
      otherDriver.slug !== driver.slug
  );

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
        title={`Conductor ${driver.slug}`}
        info={``}
        entityName="Conductor"
        otherEntityName="Conductor"
        hasExtraButton
        isDriverBtn
        onAssign={showAssignModal}
        onEdit={showEditModal}
        onDelete={showDeleteModal}
      /> */}

      <View style={globalStyles.hero}>
        <View>
          <Text style={globalStyles.h2}>{driver.name}</Text>
          <Text style={globalStyles.textSmall}>{driver.email}</Text>
        </View>
        <View style={entityStyles.moreEntities}>
          <Text style={globalStyles.h3}>Más Conductores</Text>
          <DriverList drivers={drivers} />
        </View>
      </View>

      {/* <AssignDriverModal number={unit.number} />
      <EditUnitModal number={unit.number} />
      <DeleteUnitModal number={unit.number} /> */}
    </SafeAreaView>
  );
};

export default Driver;
