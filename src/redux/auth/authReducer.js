import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authOps } from './';

const { register, logIn, logOut } = authOps;

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
    [register.fulfilled]: (_, { payload }) => payload.user,
    [logIn.fulfilled]: (_, { payload }) => payload.user,
    [logOut.fulfilled]: () => initUserState,
    // [authActions.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [register.fulfilled]: (_, { payload }) => payload.token,
    [logIn.fulfilled]: (_, { payload }) => payload.token,
    [logOut.fulfilled]: () => null,
});

const error = createReducer(null, {
    [register.pending]: () => null,
    [register.rejected]: (_, { error }) => error,

    [logIn.pending]: () => null,
    [logIn.rejected]: (_, { error }) => error,

    [logOut.pending]: () => null,
    [logOut.rejected]: (_, { error }) => error,

    // [authActions.pending]: () => null,
    // [authActions.rejected]: (_, { error }) => error,
});

export default combineReducers({
    user,
    token,
    error,
});
