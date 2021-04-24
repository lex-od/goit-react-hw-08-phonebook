import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
    // const { data } = await axios.post('');
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    // const { data } = await axios.post('');
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
    // await axios.post('');
});

const authOperations = { register, logIn, logOut };
export default authOperations;
