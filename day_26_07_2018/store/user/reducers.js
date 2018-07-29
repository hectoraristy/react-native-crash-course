import {handleActions} from 'redux-actions';

import {USER_SAVE} from './action-types';

import initialState from './initialState';

const userSave = (state, {payload}) => {
  return {
    ...state,
    username: payload.username,
    password: payload.password,
  }
}

const user = handleActions({
  USER_SAVE: userSave,
},
  initialState
)

export default user;
