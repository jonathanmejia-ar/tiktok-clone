import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import Axios from 'axios';
import { apiConfig } from '../config/api';

export const loadVideos = createAsyncThunk('videos/load', async (page = 1, thunkAPI) => {
    let token;
    try {
        token = thunkAPI.getState().user.user.jwtToken;
    } catch {
        return Promise.reject('Invalid token')
    }
    if (!token) return Promise.reject('Invalid token');
    let response = await Axios.get(`${apiConfig.domain}/videos?page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
});

export const createVideo = createAsyncThunk('videos/create', async (videoData, thunkAPI) => {
    let token;
    try {
        token = thunkAPI.getState().user.user.jwtToken;
    } catch {
        return Promise.reject('Unauthorized')
    }
    if (!token) return Promise.reject('Unauthorized');
    let response = await Axios.post(`${apiConfig.domain}/videos`, videoData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
});

let videosSlice = createSlice({
    name: 'videos',
    initialState: {
        status: 'not_loaded',
        data: {
            videos: [],
            nextPage: 1,
            total: 1
        }
    },
    reducers: {},
    extraReducers: {
        [loadVideos.fulfilled]: (state, action) => {
            let { currentPage, nextPage, prevPage, total } = action.payload;
            state.status = 'success';
            state.data = {
                currentPage,
                nextPage,
                prevPage,
                total,
                videos: state.data.videos.concat(action.payload.videos)
            };
        }
    }
});

export default videosSlice.reducer;