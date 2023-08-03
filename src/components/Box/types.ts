import { PseudoComponentProps } from '../../contexts/theme';
import type { ViewProps } from 'react-native';


export interface BoxProps extends ViewProps, PseudoComponentProps<ViewProps["style"]> {
    safeArea?: boolean
}