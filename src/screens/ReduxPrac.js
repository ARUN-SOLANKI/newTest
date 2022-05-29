import {connect, useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../redux/actions';

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const ReduxPrac = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  console.log(data, '-------->');

  useEffect(() => {
    dispatch(addTodo('my name is arun'));
  }, []);

  console.log(data, 'njasnkfbdj');

  return (
    <View>
      <Text>ReduxPrac</Text>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: () => {
      dispatch(addTodo());
    },
  };
};

const mapStateToProps = state => {
  const {todosReducer} = state;
  return {
    data: todosReducer,
  };
};

export default ReduxPrac;

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxPrac);
