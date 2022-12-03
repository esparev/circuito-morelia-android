import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import UnitItem from './UnitItem';

const UnitList = props => {
  const {units} = props;

  return (
    <FlatList
      data={units}
      showsVerticalScrollIndicator={false}
      keyExtractor={unit => String(unit.number)}
      renderItem={({item}) => <UnitItem unit={item} />}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          // style={styles.spinner}
          color="#FFFFFF"
        />
      }
    />
  );
};

export default UnitList;
