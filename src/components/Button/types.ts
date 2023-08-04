import type { ButtonProps as BtnProps } from 'react-native';
import { PseudoComponentProps } from '../../contexts/theme';

export interface ButtonProps extends BtnProps, PseudoComponentProps<BtnProps> {}
