import React, { FC, memo } from 'react';

import { Text as TxtComp } from 'react-native';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { TextProps } from './types';

const Text: FC<TextProps> = ({ children, ...props }) => {
  const { ...resolvedProps } = usePropsResolution('Text', props);

  return <TxtComp {...resolvedProps}>{children}</TxtComp>;
};

export default memo(Text);
