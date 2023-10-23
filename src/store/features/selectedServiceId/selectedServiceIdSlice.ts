import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '@/store/store';
import { type TServicesStore } from '../services/servicesSlice';

export type TSelectedServiceIdStore = {
  selectedServiceId: TServicesStore['id'] | null;
};

const initialState: TSelectedServiceIdStore = {
  selectedServiceId: null,
};

export const selectedServiceIdSlice = createSlice({
  name: 'selectedServiceId',
  initialState,
  reducers: {
    selectServiceId: (
      state,
      action: PayloadAction<TSelectedServiceIdStore>
    ) => {
      state = action.payload;
      return state;
    },
    resetSelectedServiceId: (state) => {
      return { selectedServiceId: null };
    },
  },
});

export const { selectServiceId, resetSelectedServiceId } =
  selectedServiceIdSlice.actions;

export const selectService = (state: RootState) => state.selectedServiceId;

export default selectedServiceIdSlice.reducer;
