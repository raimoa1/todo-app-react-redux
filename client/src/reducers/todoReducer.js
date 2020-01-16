import _ from 'lodash';

import {
FETCH_TODOS,
FETCH_TODO,
CREATE_TODO,
TOGGLE_TODO,
REMOVE_TODO,
EDIT_TODO
} from '../actions/types';

export default(state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {...state, [action.payload.id] : action.payload};
    case FETCH_TODO:
      return {...state, [action.payload.id] : action.payload}
    case CREATE_TODO:
      return {...state, [action.payload.id] : action.payload};
    case TOGGLE_TODO:
      return {...state, [action.payload.id] : action.payload}
    case EDIT_TODO:
      return {...state, [action.payload.id] : action.payload}
    case REMOVE_TODO:
      return _.omit(state, action.payload);
    default:
        return state
  }
}