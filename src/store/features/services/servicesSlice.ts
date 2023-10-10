import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '@/store/store';
import { type TEmployeesStore } from '../employees/employeesSlice';

export type TServicesStore = {
  id: number;
  title: string;
  price: string;
  serviceTime: string;
  executorId: TEmployeesStore['id'][];
};

const initialState: TServicesStore[] = [
  {
    id: 1,
    price: '50',
    serviceTime: '30',
    title: 'Strzyżenie męskie - broda',
    executorId: [2],
  },
  {
    id: 2,
    price: '20',
    serviceTime: '30',
    title: 'Strzyżenie męskie - bródka',
    executorId: [2],
  },
  {
    id: 3,
    price: '60',
    serviceTime: '30',
    title: 'Strzyżenie męskie - klasyczne',
    executorId: [1, 2],
  },
  {
    id: 4,
    price: '80',
    serviceTime: '30',
    title: 'Strzyżenie męskie - klasyczne - włosy długie',
    executorId: [1, 2],
  },
  {
    id: 5,
    price: '95',
    serviceTime: '30',
    title: 'Strzyżenie męskie - klasyczne + broda',
    executorId: [2],
  },
  {
    id: 6,
    price: '65',
    serviceTime: '30',
    title: 'Strzyżenie męskie - klasyczne + fade',
    executorId: [1, 2],
  },
  {
    id: 7,
    price: '70',
    serviceTime: '30',
    title: 'Strzyżenie męskie - klasyczne + skinfade',
    executorId: [1, 2],
  },
  {
    id: 8,
    price: '140',
    serviceTime: '30',
    title: 'Strzyżenie męskie - klasyczne + koloryzacja',
    executorId: [1],
  },
  {
    id: 9,
    price: '45',
    serviceTime: '30',
    title: 'Strzyżenie męskie - maszynką - 0-3mm',
    executorId: [1, 2],
  },
  {
    id: 10,
    price: '50',
    serviceTime: '30',
    title: 'Strzyżenie męskie - maszynką - 6-18mm',
    executorId: [1, 2],
  },
  {
    id: 11,
    price: '40',
    serviceTime: '30',
    title: 'Strzyżenie męskie - wąs',
    executorId: [1, 2],
  },
  {
    id: 12,
    price: '40',
    serviceTime: '30',
    title: 'Woskowanie - nos/uszy',
    executorId: [1, 2],
  },
  {
    id: 13,
    price: '50',
    serviceTime: '30',
    title: 'Strzyżenie dzieci do 4 lat',
    executorId: [1],
  },
];

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<TServicesStore>) => {
      state = [action.payload, ...state];
      return state;
    },
  },
});

export const { addService } = servicesSlice.actions;

export const selectServices = (state: RootState) => state.services;

export default servicesSlice.reducer;
