import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../components/MyButton';
import MyModal from '../components/MyModal';

const More = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalshownType, setModalShowntype] = useState(true);
  return (
    <View style={{display: 'flex', alignItems: 'center', marginTop: 100}}>
      <MyButton
        title={'Open Modal'}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <MyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalshownType={modalshownType}
        setModalShowntype={setModalShowntype}
      />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
