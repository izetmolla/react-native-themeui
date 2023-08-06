/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { ThemeUiContext } from '../contexts/ThemeUiProvider';
import { omit, pick } from '../utils';
//test
export function usePropsResolution(
    component: 'Box' | 'Text' | 'Button' | 'Icon' | 'Pressable' | 'Image' | 'Input' | 'TextInput',
    incomingProps: any,
    state?: any,
    _config?: {
        componentTheme?: any;
        resolveResponsively?: string[];
        ignoreProps?: string[];
        cascadePseudoProps?: boolean;
        extendTheme?: string[];
    }
) {
    let optionalStyle: any = {};
    const { mode, colors } = useContext(ThemeUiContext);
    if (incomingProps?.rounded) {
        const br = typeof (incomingProps?.rounded === 'string' && incomingProps?.width) ? incomingProps?.rounded : 0;
        optionalStyle = { ...optionalStyle, borderRadius: br }
    }

    optionalStyle = (mode === 'light') ? incomingProps?._light : incomingProps?._dark;
    const style: any = colors[mode][component];
    if (component === 'Icon') {
        return {
            ...style,
            ...optionalStyle,
            ...incomingProps
        }
    }

    if (component === 'Button') {
        const btnStyles: string[] = [
            'borderRadius',
            'backgroundColor',
            'borderColor',
            'borderWidth',
            'fontSize',
            'fontWeight',
            'fontFamily',
            'padding',
            'margin',
            'width',
            'height',
            'marginBottom',
            'marginTop',
            'marginLeft',
            'marginRight',
            'paddingBottom',
            'paddingTop',
            'paddingLeft',
            'paddingRight',
            'alignSelf',
            'alignItems',
            'justifyContent',
            'flexDirection',
            'flexGrow',
            'flexShrink',
            'flexWrap',
            'position',
            'top',
            'bottom',
            'left',
            'right',
        ];
        return {
            ...omit(incomingProps, btnStyles),
            ...optionalStyle,
            style: { ...incomingProps?.style, ...pick(incomingProps, ...btnStyles) },
            ...state,
        };
    }
    if (component === 'TextInput') {
        
        const errorStyles: any = incomingProps?.error ? {
            message: incomingProps?.error,
            containerStyles: { ...incomingProps?.container, borderWidth: 2, borderColor: 'red' },
            inputStyles: { ...incomingProps?.inputStyles, color: 'red' },
            labelStyles: { ...incomingProps?.labelStyles, color: 'red' },
        } : {}
        return {
            ...optionalStyle,
            inputStyles: { ...style?.inputStyles, ...optionalStyle?.inputStyles, ...incomingProps?.inputStyles },
            ...incomingProps,
            ...errorStyles,
        }
    }

    return {
        ...incomingProps,
        style: {
            ...style,
            ...optionalStyle,
            ...incomingProps?.style,
        },
        ...state,
    };
}
// git commit -m "feat: new components added"


