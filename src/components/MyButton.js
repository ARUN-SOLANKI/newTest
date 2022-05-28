import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        padding: 15,
        width: 250,
        borderRadius: 10,
      }}
      onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({});
