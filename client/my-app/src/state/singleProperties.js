import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const singlePropertiesRequest = createAsyncThunk("SEND_SINGLE_PROPERTIE_REQUEST", (id_any_filter) => {
    return axios.get(`http://localhost:3001/api/properties/${id_any_filter}`).then((res) => res.data)
})

export const singlePropertiesReducer = createReducer ({}, {
    [singlePropertiesRequest.fulfilled]: (state, action) => action.payload
})