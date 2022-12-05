import React from 'react';
import {FlatList} from 'react-native';
import UnitItem from './UnitItem';

const UnitList = props => {
  const {units} = props;

  return (
    <FlatList
      data={units}
      showsVerticalScrollIndicator={false}
      keyExtractor={unit => String(unit.number)}
      renderItem={({item}) => <UnitItem unit={item} />}
    />
  );
};

export default UnitList;
