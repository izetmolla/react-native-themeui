/* eslint-disable react-native/no-inline-styles */
import React, { FC, memo } from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './types';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { omit } from '../../utils';
import FloatingLabelInput from '../TextInput';
import Text from '../Text';
import { styles } from '../TextInput/styles';

const Input: FC<InputProps> = ({ withFloadtingLabel = false, ...props }) => {
  const { ...resolvedProps } = usePropsResolution(
    withFloadtingLabel ? 'TextInput' : 'Input',
    withFloadtingLabel
      ? {
          ...omit(props),
          ...styles,
          containerStyles: { ...styles.container, ...props?.containerStyles },
          inputStyles: { ...props?.inputStyles },
          labelStyles: { ...props?.labelStyles },
        }
      : omit(props)
  );

  if (withFloadtingLabel) {
    return (
      <>
        <FloatingLabelInput {...resolvedProps} />
        {props?.error && (
          <Text style={{ color: 'red', paddingLeft: 5, paddingTop: 3 }}>
            {props.error}
          </Text>
        )}
      </>
    );
  }

  return <TextInput {...resolvedProps} />;
};

export default memo(Input);
