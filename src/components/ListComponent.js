import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListComponent = ({item}) => {
  return (
    <View
      style={{
        padding: 50,
        backgroundColor: '#fff',
        marginVertical: 20,
        borderRadius: 15,
      }}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({});
