/* eslint-disable react-native/no-inline-styles */
import React, { FC, memo } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { usePropsResolution } from '../../hooks/usePropsResolution';
import { ButtonProps } from './types';
import { omit } from '../../utils';
import Text from '../Text';

const Button: FC<ButtonProps> = ({ children, title, ...props }) => {
  const { ...resolvedProps } = usePropsResolution('Button', {
    style: styles.button,
    ...omit(props, 'leftIcon', 'rightIcon'),
  });
  return (
    <TouchableOpacity {...resolvedProps}>
      {props.loading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            props?.contentStyle,
          ]}
        >
          {props.leftIcon && props.leftIcon}
          {title ? <Text style={styles.buttonText}>{title}</Text> : children}
          {props.rightIcon && props.rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
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
