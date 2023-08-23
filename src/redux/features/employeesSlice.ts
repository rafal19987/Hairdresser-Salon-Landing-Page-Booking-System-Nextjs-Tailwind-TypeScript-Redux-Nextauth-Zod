import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { TEmployeeProps } from '@/types/employeeTypes';

export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FETCH_API_URL}/employees`);
  const data = await res.json();
  return data;
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default employeesSlice.reducer;
