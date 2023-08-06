import { SafeAreaProps, GeneralStyles } from '../../types';
import { PseudoComponentProps } from '../../contexts/theme';
import type { TextInputProps } from 'react-native';
import { Props as FloatTextInputProps } from '../TextInput';

export interface InputProps
  extends TextInputProps,
    SafeAreaProps,
    GeneralStyles,
    FloatTextInputProps,
    PseudoComponentProps<TextInputProps['style']>,
    PseudoComponentProps<FloatTextInputProps['style']> {
  withFloadtingLabel?: boolean;
  error?: string;
}
export { TextInputProps };
