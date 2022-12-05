import React from 'react';
import {FlatList} from 'react-native';
import AdminItem from './AdminItem';

const AdminList = props => {
  const {admins} = props;

  return (
    <FlatList
      data={admins}
      showsVerticalScrollIndicator={false}
      keyExtractor={admin => String(admin.slug)}
      renderItem={({item}) => <AdminItem admin={item} />}
    />
  );
};

export default AdminList;
