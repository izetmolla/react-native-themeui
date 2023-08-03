import { PseudoComponentProps } from '../../contexts/theme';
import type { ViewProps } from 'react-native';

export interface IconProps
  extends ViewProps,
    PseudoComponentProps<ViewProps['style']> {
  as: React.ReactNode;
  name: string;
}
