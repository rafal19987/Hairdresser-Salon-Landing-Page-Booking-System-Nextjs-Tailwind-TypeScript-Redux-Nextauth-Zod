import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '@/store/store';

export type TEmployeesStore = {
  id: number;
  name: string;
  number: string;
  photo: string;
  quote: string;
};

const initialState: TEmployeesStore[] = [
  {
    id: 1,
    name: 'Wiktoria',
    number: '500502502',
    photo:
      'https://images.unsplash.com/photo-1617690825204-069678e3a2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    quote:
      'W Męskiej Strefie stawiamy na indywidualizm i precyzję, dbając o każdy detal, by Twoja fryzura była wyjątkowa i dopasowana do Twoje stylu.',
  },
  {
    id: 2,
    name: 'Agnieszka',
    number: '500503504',
    photo:
      'https://images.unsplash.com/photo-1585980516944-df4fcf837ea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    quote:
      'Nieustannie podążamy za najnowszymi trendami i technikami fryzjerskimi, aby zapewnić Ci najwyższy poziom obsługi.',
  },
];

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<TEmployeesStore>) => {
      state = [action.payload, ...state];
      return state;
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export const selectEmployees = (state: RootState) => state.employees;

export default employeesSlice.reducer;
