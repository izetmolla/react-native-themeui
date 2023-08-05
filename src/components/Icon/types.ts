import { OpaqueColorValue, TextProps } from 'react-native';

export interface IconProps extends TextProps {
  as?: React.ReactNode | any;
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number;
  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://expo.github.io/vector-icons/}
   */
  name: string;
  /**
   * Color of the icon. Can be a string or OpaqueColorValue (returned from
   * PlatformColor(..))
   *
   */
  color?: string | OpaqueColorValue;
}
