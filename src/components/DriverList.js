import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import DriverItem from './DriverItem';

const DriverList = props => {
  const {drivers} = props;

  return (
    <FlatList
      data={drivers}
      showsVerticalScrollIndicator={false}
      keyExtractor={driver => String(driver.slug)}
      renderItem={({item}) => <DriverItem driver={item} />}
    />
  );
};

export default DriverList;
