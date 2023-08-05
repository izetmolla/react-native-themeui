import { SafeAreaProps, GeneralStyles } from '../../types';
import { PseudoComponentProps } from '../../contexts/theme';
import type { ViewProps } from 'react-native';

export interface BoxProps
  extends ViewProps,
    SafeAreaProps,
    GeneralStyles,
    PseudoComponentProps<ViewProps['style']> {}
