import React, { FC, memo } from 'react';
import ParsedTextComp from 'react-native-parsed-text';

import { usePropsResolution } from '../../hooks/usePropsResolution';
import { ParsedTextProps } from './types';

const ParsedText: FC<ParsedTextProps> = ({ children, ...props }) => {
  const { ...resolvedProps } = usePropsResolution('Text', props);

  return <ParsedTextComp {...resolvedProps}>{children}</ParsedTextComp>;
};

export default memo(ParsedText);
