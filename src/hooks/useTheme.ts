import {
  ThemeUiActionContext,
  ThemeUiContext,
} from '../contexts/ThemeUiProvider';
import { ThemeActionTypes, ThemeUiTypes } from '../contexts/theme';
import { useContext } from 'react';

export const useTheme = () => {
  const theme = useContext<ThemeUiTypes>(ThemeUiContext);
  const actions = useContext<ThemeActionTypes>(ThemeUiActionContext);
  return { theme, ...actions };
};
