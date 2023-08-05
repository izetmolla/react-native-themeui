import React, { FC, memo } from 'react';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { IconProps } from './types';
import { omit } from '../../utils';

const Icon: FC<IconProps> = ({ as, ...props }) => {
  const Comp = as;

  const { ...resolvedProps } = usePropsResolution('Icon', omit(props, 'as'));
  return <Comp {...resolvedProps} />;
};

export default memo(Icon);
