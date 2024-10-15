// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'; 

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 

export default store;
