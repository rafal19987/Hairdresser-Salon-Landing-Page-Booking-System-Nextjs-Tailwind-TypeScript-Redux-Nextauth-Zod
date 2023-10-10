import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '@/store/store';
import { type TEmployeesStore } from '../employees/employeesSlice';
import { type TServicesStore } from '../services/servicesSlice';

export type TReservationsStore = {
  id: number;
  createdAt: string;
  executorId: TEmployeesStore['id'];
  serviceId: TServicesStore['id'];
  day: string;
  hour: string;
  isConfirmed: boolean;
};

const initialState: TReservationsStore[] = [
  {
    id: 1,
    createdAt: 'new Date()',
    executorId: 2,
    serviceId: 2,
    day: '12',
    hour: '8:30',
    isConfirmed: true,
  },
  {
    id: 2,
    createdAt: 'new Date()',
    executorId: 1,
    serviceId: 2,
    day: '12',
    hour: '9:00',
    isConfirmed: false,
  },
];

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<TReservationsStore>) => {
      state = [action.payload, ...state];
      return state;
    },
  },
});

export const { addReservation } = reservationsSlice.actions;

export const selectEmployees = (state: RootState) => state.reservations;

export default reservationsSlice.reducer;
