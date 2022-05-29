import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
} from './constants';

const initialState = {
  loading: false,
  todos: [],
  error: null,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload],
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
