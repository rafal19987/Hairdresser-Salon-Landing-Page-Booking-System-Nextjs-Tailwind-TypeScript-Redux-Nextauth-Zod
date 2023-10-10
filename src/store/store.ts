import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/employees/employeesSlice';
import servicesReducer from './features/services/servicesSlice';
import reservationsReducer from './features/reservations/reservationsSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    services: servicesReducer,
    reservations: reservationsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
