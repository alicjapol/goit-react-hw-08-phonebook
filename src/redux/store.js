import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import contactsReducer from './contactsSlice';
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer, 
  },
}, enhancer);
