import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import AddingData from './AddingData';
import AllList from './AllList';

const MyModal = ({
  modalVisible,
  setModalVisible,
  modalshownType,
  setModalShowntype,
  inputText,
  setInputText,
  handleDone,
  allData,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        {/* <View style={styles.centeredView}> */}
        <View style={styles.modalView}>
          {modalshownType ? (
            <AllList
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              modalshownType={modalshownType}
              setModalShowntype={setModalShowntype}
              allData={allData}
            />
          ) : (
            <AddingData
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              modalshownType={modalshownType}
              setModalShowntype={setModalShowntype}
              setInputText={setInputText}
              handleDone={handleDone}
            />
          )}
        </View>
        {/* </View> */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop: 20,
    backgroundColor: '#efefef',
    flex: 1,
    width: '100%',
    padding: 10,
    borderRadius: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MyModal;
