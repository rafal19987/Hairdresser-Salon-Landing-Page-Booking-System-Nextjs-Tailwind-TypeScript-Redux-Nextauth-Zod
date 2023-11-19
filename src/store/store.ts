import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import employeesReducer from './features/employees/employeesSlice';
import servicesReducer from './features/services/servicesSlice';
import reservationsReducer from './features/reservations/reservationsSlice';
import selectedServiceIdReducer from './features/selectedServiceId/selectedServiceIdSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  employees: employeesReducer,
  services: servicesReducer,
  reservations: reservationsReducer,
  selectedServiceId: selectedServiceIdReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV === 'production' ? false : true,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
