import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyButton from '../components/MyButton';
import MyModal from '../components/MyModal';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, fetchData} from '../redux/actions';

const More = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalshownType, setModalShowntype] = useState(true);
  const [inputText, setInputText] = useState('');
  const [allData, setAlldata] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleDone = () => {
    if (inputText) {
      dispatch(addTodo(inputText));
      setModalShowntype(!modalshownType);
    }
  };

  useEffect(() => {
    const {myTodo, todos} = data.booksReducer;
    const newArr = [...myTodo, ...todos];
    setAlldata(newArr);
  }, [data]);

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
        inputText={inputText}
        handleDone={handleDone}
        setInputText={setInputText}
        allData={allData}
      />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
