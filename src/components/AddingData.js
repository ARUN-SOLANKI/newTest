import {View, Text} from 'react-native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyButton from './MyButton';

const AddingData = ({
  setModalShowntype,
  modalshownType,
  modalVisible,
  setModalVisible,
  setInputText,
  handleDone,
}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text
            style={{fontSize: 35}}
            onPress={() => setModalShowntype(!modalshownType)}>
            <Icon name="chevron-left" size={20} color="#000" />
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#000'}}>Adding Data</Text>
        <Text style={{fontSize: 20}}></Text>
      </View>

      <View>
        <TextInput
          keyboardType="text"
          style={{borderWidth: 1, borderRadius: 15, marginTop: 50}}
          multiline={true}
          numberOfLines={10}
          onChangeText={e => setInputText(e)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 35,
        }}>
        <MyButton title="Add" onPress={() => handleDone()} />
      </View>
    </View>
  );
};

export default AddingData;
