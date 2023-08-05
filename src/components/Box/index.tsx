import React, { FC, memo } from 'react';

import { View } from 'react-native';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { BoxProps } from './types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { omit } from '../../utils';

const Box: FC<BoxProps> = ({ children, ...props }) => {
  const { ...resolvedProps } = usePropsResolution('Box', {
    ...omit(props),
  });

  if (props.safeArea) {
    return <SafeAreaView {...resolvedProps}>{children}</SafeAreaView>;
  }

  return <View {...resolvedProps}>{children}</View>;
};

export default memo(Box);
