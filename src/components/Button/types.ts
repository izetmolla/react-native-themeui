import { PseudoComponentProps } from '../../contexts/theme';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps, PseudoComponentProps<TouchableOpacityProps["style"]> {
    children?: React.ReactNode;
    title?: string;
    variant?: 'outline' | 'solid' | 'filled' | 'underlined' | 'unstyled' | 'rounded';
}
