import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const loginRequest = createAsyncThunk("SEND_LOGIN_REQUEST", (data) => {
  return axios
    .post("http://localhost:3001/api/users/login", data)
    .then((res) => {
      delete res.data.password;
      delete res.data.salt;
      return res.data;
    });
});

export const logoutRequest = createAsyncThunk("SEND_LOGOUT_REQUEST", () => {
  return axios
    .post("http://localhost:3001/api/users/logout")
    .then((res) => res.data);
});

export const editUserRequest = createAsyncThunk(
  "SEND_EDIT_USER_REQUEST",
  (data) => {
    const { id, body } = data;
    return axios.put(`/api/users/update/${id}`, body).then((res) => res.data);
  }
);

// export const promoteAdminRequest = createAsyncThunk(
//   "SEND_PROMOTION_REQUEST",
//   (data) => {
//     return axios.put("http://localhost:3001/api/users/promote", data).then((res) => res.data);
//   }
// );

export const setUser = createAsyncThunk("SET_USER", () => {
  const localUser = JSON.parse(localStorage.getItem("user"));

  if (localUser != null) {
    return axios
      .get("http://localhost:3001/api/users/me")
      .then((response) =>
        localUser.id === response.data.id ? localUser : null
      )
      .catch((err) => console.log(err));
  } else {
    return null;
  }
});

const useReducer = createReducer(
  {},
  {
    [loginRequest.fulfilled]: (state, action) => action.payload,
    // [setUser.fulfilled]: (state, action) => action.payload,
    [logoutRequest.fulfilled]: (state, action) => action.payload,
    // [promoteAdminRequest.fulfilled]: (state, action) =>
    //   localStorage.setItem("user", JSON.stringify(action.payload)),
    //  === "OK" && localStorage.removeItem("user",null)
    [editUserRequest.fulfilled]: (state, action) =>
      localStorage.setItem("user", JSON.stringify(action.payload)),
  }
);

export default useReducer;
