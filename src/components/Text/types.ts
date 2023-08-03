import { PseudoComponentProps } from '../../contexts/theme';
import type { TextProps as TextCompProps } from 'react-native';


export interface TextProps extends TextCompProps, PseudoComponentProps<TextCompProps["style"]> {

}