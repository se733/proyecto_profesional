import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userReducer from "./user";
import { defaultPropertiesReducer } from "./defaultProperties";
import { singlePropertiesReducer } from "./singleProperties";
import { setSearchReducer } from "./search";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      user: userReducer,
      defaultProperties: defaultPropertiesReducer,
      singleProperties : singlePropertiesReducer,
      setSearch: setSearchReducer,
    },
  });
  
  export default store;