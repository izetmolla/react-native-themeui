import React, { FC } from 'react';
import { ImageProps } from './types';
import { Image as ImgComp } from 'react-native';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { omit } from '../../utils';
const Image: FC<ImageProps> = ({ ...props }) => {
  const { ...resolvedProps } = usePropsResolution('Image', {
    ...omit(props),
  });
  return <ImgComp {...resolvedProps} />;
};
export default Image;
