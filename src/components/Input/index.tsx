import React, { FC, memo } from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './types';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { omit } from '../../utils';
import FloatingLabelInput from '../TextInput';

const Input: FC<InputProps> = ({ withFloadtingLabel = false, ...props }) => {
  const { ...resolvedProps } = usePropsResolution(
    withFloadtingLabel ? 'Input' : 'TextInput',
    omit(props)
  );

  if (withFloadtingLabel) {
    return <FloatingLabelInput {...resolvedProps} />;
  }

  return <TextInput {...resolvedProps} />;
};

export default memo(Input);
