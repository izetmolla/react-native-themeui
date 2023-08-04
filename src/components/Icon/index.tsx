import React, { memo } from 'react';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { IconProps } from './types';


const Icon = (props: IconProps) => {
  const { as, size, ...resolvedProps } = usePropsResolution('Icon', props);
  return React.cloneElement(as, {
    ...resolvedProps,
    //@ts-ignore
    ...as.props,
  })
};

export default memo(Icon);