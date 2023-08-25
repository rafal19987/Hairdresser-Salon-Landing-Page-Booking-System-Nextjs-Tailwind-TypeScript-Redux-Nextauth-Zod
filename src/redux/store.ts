import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '@/redux/features/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
