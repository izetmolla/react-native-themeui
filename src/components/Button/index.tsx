import React, { FC } from 'react';

import { View } from "react-native"
import { usePropsResolution } from "../../hooks/usePropsResolution"
import { ButtonProps } from './types';


const Button: FC<ButtonProps> = ({ children, ...props }) => {
    const { ...resolvedProps } = usePropsResolution('Button', props);

    return (
        <View {...resolvedProps} >
            {children}
        </View>
    )
}

export default Button