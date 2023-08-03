import React, { FC } from 'react';

import { View } from 'react-native';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { IconProps } from './types';

const Icon: FC<IconProps> = ({ children, as, name, ...props }) => {
  console.log({ as, name });
  const { ...resolvedProps } = usePropsResolution('Button', props);
  return <View {...resolvedProps}>{children}</View>;
};

export default Icon;
