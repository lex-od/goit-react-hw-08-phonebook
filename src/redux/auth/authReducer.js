import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authOps } from './';

const { register, logIn, logOut } = authOps;

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
    [register.fulfilled]: (_, { payload }) => payload.user,
    [logIn.fulfilled]: (_, { payload }) => payload.user,
    [logOut.fulfilled]: () => initUserState,
    // [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [register.fulfilled]: (_, { payload }) => payload.token,
    [logIn.fulfilled]: (_, { payload }) => payload.token,
    [logOut.fulfilled]: () => null,
});

const error = createReducer(null, {
    [register.rejected]: (_, { error }) => error,
    [logIn.rejected]: (_, { error }) => error,
    [logOut.rejected]: (_, { error }) => error,
    // [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
    user,
    token,
    error,
});
