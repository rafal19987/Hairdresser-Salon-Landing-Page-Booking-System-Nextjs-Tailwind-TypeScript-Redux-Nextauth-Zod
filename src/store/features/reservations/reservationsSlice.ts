import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '@/store/store';
import { type TEmployeesStore } from '../employees/employeesSlice';
import { type TServicesStore } from '../services/servicesSlice';

export type TReservationsStore = {
  id: number | string;
  createdAt: string | Date;
  executorId: TEmployeesStore['id'];
  serviceId: TServicesStore['id'];
  day?: string | number;
  hour?: string | number;
  isConfirmed: boolean;
  reservationDate?: {
    hour: string;
    date?: string;
    day: string;
    month?: number;
    year?: number;
  };
};

const initialState: TReservationsStore[] = [];

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<TReservationsStore>) => {
      state = [action.payload, ...state];
      return state;
    },
    deleteAllReserations: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addReservation, deleteAllReserations } =
  reservationsSlice.actions;

export const selectEmployees = (state: RootState) => state.reservations;

export default reservationsSlice.reducer;
