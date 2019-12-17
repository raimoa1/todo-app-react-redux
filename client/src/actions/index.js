import todos from '../apis/todos';

import {
SIGN_IN,
SIGN_OUT,
CREATE_TODO,
TOGGLE_TODO,
REMOVE_TODO,
FETCH_TODOS,
FETCH_TODO,
EDIT_TODO
} from './types';

export const signIn = (userId) => {
  return ({
    type: SIGN_IN,
    payload: userId
  });
}

export const signOut = () => {
  return({
    type: SIGN_OUT
  })
}

export const fetchToDos = () => async (dispatch) => {
const response = await todos.get(`/todos`);

  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  });
}

export const fetchToDo = (id) => async dispatch => {
  const response = await todos.get(`/todos/${id}`);

  dispatch({
    type: FETCH_TODO,
    payload: response.data
  })
}

export const createToDo = (formValues) => async (dispatch) => {
const response = await todos.post(`/todos`, {...formValues});

  dispatch({
    type: CREATE_TODO,
    payload: response.data
  });
}

export const editToDo = (formValues, id) => async (dispatch) => {
const response = await todos.put(`/todos/${id}`, formValues);

  dispatch({
    type: EDIT_TODO,
    payload: response.data
  })
}

export const toggleToDo = (value, id) => async (dispatch) => {
const response = await todos.post(`/todos/${id}`, value);

  dispatch({
    type: TOGGLE_TODO,
    payload: response.data
  });
}

export const removeToDo = (id) => async (dispatch) => {
 await todos.delete(`/todos/${id}`);

  dispatch({
    type: REMOVE_TODO,
    payload: id
  })
}

