import React, { FC } from 'react';

import { Button as BtnComp } from 'react-native';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const { ...resolvedProps } = usePropsResolution('Button', props);

  return <BtnComp {...resolvedProps}>{children}</BtnComp>;
};

export default Button;
