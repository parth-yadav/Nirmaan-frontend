// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice'; 
import authSlice from './authSlice';
import blogEditorReducer from './blogEditorSlice';
import blogNewEditorSlice from './blogNewEditorSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth : authSlice,
    blogEditor: blogEditorReducer,
    blogNewEditor : blogNewEditorSlice
  },
});

export default store;
