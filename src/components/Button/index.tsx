import React, { FC, memo } from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { ButtonProps } from './types';
import Text from '../Text';

const Button: FC<ButtonProps> = ({ children, title, ...props }) => {
  const { ...resolvedProps } = usePropsResolution('Button', props);
  return (
    <TouchableOpacity style={styles.button} {...resolvedProps}>
      {title ? <Text style={styles.buttonText}>{title}</Text> : children}
    </TouchableOpacity>
  );

  // return <BtnComp {...resolvedProps}>{children}</BtnComp>;
};

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});
export default memo(Button);
