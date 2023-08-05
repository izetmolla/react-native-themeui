import React, { FC, ReactNode, useState, createContext, memo } from 'react';
import defaultTheme, { ThemeUiTypes, ThemeActionTypes } from './theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface ThemeUiProviderProps {
  children: ReactNode;
  mode?: 'light' | 'dark';
}

const ThemeUiContext = createContext<ThemeUiTypes>(defaultTheme);
const ThemeUiActionContext = createContext<ThemeActionTypes>({
  setThemeMode: () => {},
});

const ThemeUiProvider: FC<ThemeUiProviderProps> = ({
  mode = 'light',
  children,
}) => {
  defaultTheme.mode = mode;
  const [theme, setTheme] = useState<ThemeUiTypes>(defaultTheme);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const setThemeMode = (mode: 'light' | 'dark') =>
    setTheme({ ...theme, mode: mode });

  return (
    <SafeAreaProvider>
      <ThemeUiContext.Provider value={theme}>
        <ThemeUiActionContext.Provider value={{ setThemeMode }}>
          {children}
        </ThemeUiActionContext.Provider>
      </ThemeUiContext.Provider>
    </SafeAreaProvider>
  );
};

export { ThemeUiContext, ThemeUiActionContext };
export default memo(ThemeUiProvider);
