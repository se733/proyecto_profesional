const { createReducer, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

export const setSearch = createAsyncThunk("SET_WAY_TO_FILTER", (name) => {
    return axios.get(`http://localhost:3001/api/properties/search/${name}`)
    .then((res) => res.data)
});

export const setSearchReducer = createReducer([], {
    [setSearch.fulfilled]:(state,action) => action.payload
});