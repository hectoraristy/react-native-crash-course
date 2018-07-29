import {createSelector} from 'reselect';

const getUser = state => state.user;

export const getUsername = createSelector(getUser, (user) => user.username);