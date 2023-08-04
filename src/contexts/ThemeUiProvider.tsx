import React, { FC, ReactNode, useState, createContext, memo } from 'react';
import defaultTheme, { ThemeUiTypes, ThemeActionTypes } from './theme';

interface ThemeUiProviderProps {
  children: ReactNode;
  mode?: 'light' | 'dark';
}

const ThemeUiContext = createContext<ThemeUiTypes>(defaultTheme);
const ThemeUiActionContext = createContext<ThemeActionTypes>({
  setThemeMode: () => { },
});

const ThemeUiProvider: FC<ThemeUiProviderProps> = ({
  mode = 'light',
  children,
}) => {
  defaultTheme.mode = mode;
  const [theme, setTheme] = useState<ThemeUiTypes>(defaultTheme);

  const setThemeMode = (mode: 'light' | 'dark' = 'light') =>
    setTheme({ ...theme, mode });

  return (
    <ThemeUiContext.Provider value={theme}>
      <ThemeUiActionContext.Provider value={{ setThemeMode }}>
        {children}
      </ThemeUiActionContext.Provider>
    </ThemeUiContext.Provider>
  );
};

export { ThemeUiContext, ThemeUiActionContext };
export default memo(ThemeUiProvider);
