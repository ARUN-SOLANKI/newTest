import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO,
} from './constants';

import axios from 'axios';

export const fetchData = () => {
  return dispatch => {
    dispatch(addTodoStarted());
    axios
      .get(`https://gorest.co.in/public/v2/users`)
      .then(res => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err));
      });
  };
};

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    todo,
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

export const addTodo = str => ({
  type: ADD_TODO,
  payload: str,
});
