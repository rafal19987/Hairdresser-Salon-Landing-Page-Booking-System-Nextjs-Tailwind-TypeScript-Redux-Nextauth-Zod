'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchEmployees } from '@/redux/features/employeesSlice';

const EmployeesReduxPage = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return <div></div>;
};

export default EmployeesReduxPage;
