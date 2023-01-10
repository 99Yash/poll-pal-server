import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import FormReducer from 'redux-toolkit-form';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: FormReducer,
  },
});
