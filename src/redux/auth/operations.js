import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults = 'https://connections-api.herokuapp.com';
const register = createAsyncThunk('auth/register', (credentials, thunkAPI) => {
  try {
    const res = axios.post("/users/signup", credentials);
    console.log(res);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export { register };
