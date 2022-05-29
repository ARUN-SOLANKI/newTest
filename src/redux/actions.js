import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
} from './constants';

import axios from 'axios';

export const addTodo = str => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        dispatch(addTodoSuccess({res: res, data: str}));
      })
      .catch(err => {
        dispatch(addTodoFailure(err));
      });
  };
};

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo,
  },
});

const addTodoStarted = () => ({
  type: ADD_TODO_REQUEST,
});

const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error,
  },
});
