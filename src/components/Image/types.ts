import { SafeAreaProps, GeneralStyles } from '../../types';
import { PseudoComponentProps } from '../../contexts/theme';
import type { ImageProps as ImgPro } from 'react-native';

export interface ImageProps
  extends ImgPro,
    SafeAreaProps,
    GeneralStyles,
    PseudoComponentProps<ImgPro['style']> {}
