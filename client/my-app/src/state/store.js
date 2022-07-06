import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userReducer from "./user";
import { defaultPropertiesReducer } from "./defaultProperties";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      user: userReducer,
      defaultProperties: defaultPropertiesReducer
    },
  });
  
  export default store;