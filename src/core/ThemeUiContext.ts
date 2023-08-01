import { createContext } from '../utils/createContext';
import type { ITheme } from '../theme';
import type { IModeType } from './StrictMode';

export interface IThemeUiConfig {
  theme?: ITheme;
  suppressColorAccessibilityWarning?: boolean;
  dependencies?: {
    'linear-gradient': any;
  };
  enableRem?: boolean;
  strictMode?: IModeType;
  disableContrastText?: boolean;
}

export const defaultConfig: IThemeUiConfig = {
  strictMode: 'off',
};

export const [ThemeUiConfigProvider, useThemeUiConfig] = createContext<{
  config: IThemeUiConfig;
  isSSR?: boolean;
  theme?: ITheme;
  disableContrastText?: boolean;
}>('ThemeUiConfigProvider');
