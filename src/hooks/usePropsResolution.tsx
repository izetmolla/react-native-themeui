import { useContext } from 'react';
import { ThemeUiContext } from '../contexts/ThemeUiProvider';
//test
export function usePropsResolution(
    component: 'Box' | 'Text' | 'Button' | 'Icon' | 'Pressable',
    incomingProps: any,
    _state?: any,
    _config?: {
        componentTheme?: any;
        resolveResponsively?: string[];
        ignoreProps?: string[];
        cascadePseudoProps?: boolean;
        extendTheme?: string[];
    }
) {
    const { mode, colors } = useContext(ThemeUiContext);

    const optionalStyle = (mode === 'light') ? incomingProps?._light : incomingProps?._dark;
    const style: any = colors[mode][component];
    if (component === 'Button') {
        return {
            // backgroundColor: 'blue',
            // color: 'white',
            // ...incomingProps,
            ...optionalStyle,
        };
    }



    return {
        ...incomingProps,
        style: { ...style, ...optionalStyle, ...incomingProps?.style },
    };
}
