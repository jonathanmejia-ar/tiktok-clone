import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import Axios from 'axios';
import { apiConfig } from '../config/api';

export const register = createAsyncThunk('user/logIn', async ({ credentials }) => {
    //asyncs operations
    let response = await Axios.post(`${apiConfig.domain}/users`, { user: credentials })
    console.log(response);
    return response.data.user;
});

export const logIn = createAsyncThunk('user/logIn', async ({ credentials }) => {
    //Asyncs operations
    let response = await Axios.post(`${apiConfig.domain}/users/signin`, { user: credentials })
    console.log(response);
    return response.data.user;
});

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: ''
    },
    reducers: {
        logOut: (state) => {
            state.user = null;
        }
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.status = 'loading';
        },
        [register.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        },
        [register.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [logIn.pending]: (state, action) => {
            state.status = 'loading';
        },
        [logIn.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        },
        [logIn.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;