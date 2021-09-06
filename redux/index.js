import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './exampleSlice.js';

export const store = configureStore({
  reducer: {
    exampleSlice,
  },
});
