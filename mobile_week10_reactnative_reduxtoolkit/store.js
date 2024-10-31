// store.js
import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';

export const store = configureStore({
  reducer: {
    contents: contentReducer,
  },
});