import { PseudoComponentProps } from '../../contexts/theme';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps
  extends TouchableOpacityProps,
    PseudoComponentProps<TouchableOpacityProps['style']> {
  children?: React.ReactNode;
  title?: string;
  variant?:
    | 'outline'
    | 'solid'
    | 'filled'
    | 'underlined'
    | 'unstyled'
    | 'rounded';
  borderRadius?: number | string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  padding?: number;
  margin?: number;
  width?: number | string;
  height?: number | string;
  marginBottom?: number | string;
  marginTop?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  paddingBottom?: number | string;
  paddingTop?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  alignSelf?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: string;
  position?: string;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;

  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingSize?: number;
  loadingStyle?: TouchableOpacityProps['style'];
  loadingProps?: TouchableOpacityProps;
}
