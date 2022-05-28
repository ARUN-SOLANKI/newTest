import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ListComponent from './ListComponent';

const AllList = ({setModalShowntype, modalshownType}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}></Text>
        <Text style={{fontSize: 20, color: '#000'}}>My Modal</Text>
        <TouchableOpacity onPress={() => setModalShowntype(!modalshownType)}>
          <Text style={{fontSize: 20, color: 'blue'}}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ListComponent />
        <ListComponent />
        <ListComponent />
      </View>
    </View>
  );
};

export default AllList;

const styles = StyleSheet.create({});
