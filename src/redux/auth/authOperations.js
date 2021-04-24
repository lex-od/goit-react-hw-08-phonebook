import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async credentials => {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);

    return data;
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);

    return data;
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
    await axios.post('/users/logout');

    token.unset();
});

const authOperations = { register, logIn, logOut };
export default authOperations;
