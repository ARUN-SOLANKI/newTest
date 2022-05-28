import {View, Text} from 'react-native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import MyButton from './MyButton';

const AddingData = ({setModalShowntype, modalshownType}) => {
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
            {'<'}
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 25}}>AddingData</Text>
        <Text style={{fontSize: 25}}></Text>
      </View>

      <View>
        <TextInput
          keyboardType="text"
          style={{borderWidth: 1, borderRadius: 15, marginTop: 50}}
          multiline={true}
          numberOfLines={10}
        />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 35,
        }}>
        <MyButton title="Add" onPress={() => console.log('addings')} />
      </View>
    </View>
  );
};

export default AddingData;
