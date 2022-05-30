import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO,
} from './constants';

const initialState = {
  loading: false,
  myTodo: [],
  todos: [],
  error: null,
};

export default function todosReducer(state = initialState, action) {
  console.log(action, 'reducersssssssss');
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        myTodo: [{name: action.payload}, ...state.myTodo],
      };
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload.todo,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
