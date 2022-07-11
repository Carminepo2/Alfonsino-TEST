import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {partnersApi} from '../services/partners.service';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [partnersApi.reducerPath]: partnersApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(partnersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
