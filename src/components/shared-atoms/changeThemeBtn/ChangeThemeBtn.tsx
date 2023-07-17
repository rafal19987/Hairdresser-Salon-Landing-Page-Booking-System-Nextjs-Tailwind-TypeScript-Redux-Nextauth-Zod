'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ChangeThemeBtn = () => {
  const { toggleThemeHandler, theme } = useContext(ThemeContext);

  return <button onClick={toggleThemeHandler}>{theme}</button>;
};

export default ChangeThemeBtn;
