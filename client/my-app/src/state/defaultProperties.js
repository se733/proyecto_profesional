import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const defaultPropertiesRequest = createAsyncThunk('SEND_ALL_PROPERTIES', () => {
    return axios.get('http://localhost:3001/api/properties').then(res => res.data)
    
})

export const defaultPropertiesReducer = createReducer([], {
    [defaultPropertiesRequest.fulfilled]:(state,action) => action.payload
});

