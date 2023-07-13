'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ChangeThemeBtn = () => {
  const { toggleThemeHandler } = useContext(ThemeContext);

  return <button onClick={toggleThemeHandler}>Zmień theme</button>;
};

export default ChangeThemeBtn;
