'use client';

import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleThemeHandler: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState('dark');

  const toggleThemeHandler = (): void => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>
      <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
