import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { authOps } from './';

// const { register, logIn, logOut } = authOps;

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
    // [authActions.registerSuccess]: (_, { payload }) => payload.user,
    // [authActions.loginSuccess]: (_, { payload }) => payload.user,
    // [authActions.logoutSuccess]: () => initUserState,
    // [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    // [authActions.registerSuccess]: (_, { payload }) => payload.token,
    // [authActions.loginSuccess]: (_, { payload }) => payload.token,
    // [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
    // [authActions.registerError]: (_, { payload }) => payload,
    // [authActions.loginError]: (_, { payload }) => payload,
    // [authActions.logoutError]: (_, { payload }) => payload,
    // [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
    user,
    token,
    error,
});