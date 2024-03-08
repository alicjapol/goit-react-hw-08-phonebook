import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import contactsReducer from './contactsSlice';
import { devToolsEnhancer } from "@redux-devtools/extension";
import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore } from 'redux-persist';

const enhancer = devToolsEnhancer();

const authPersistConfig = {
  key: 'auth',
  storage
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer), 
  },
}, enhancer);


export const persist = persistStore(store);