import React, { type FC } from "react";
import {
    defaultConfig,
    IThemeUiConfig,
    ThemeUiConfigProvider,
} from './ThemeUiContext';
import { theme as defaultTheme, ITheme } from "../theme";

export interface ThemeUiProviderProps {
    theme?: ITheme;
    // colorModeManager?: IColorModeProviderProps['colorModeManager'];
    children?: React.ReactNode;
    initialWindowMetrics?: any;
    config?: IThemeUiConfig;
    isSSR?: boolean;
    disableContrastText?: boolean;

}

const ThemeUiProvider: FC<ThemeUiProviderProps> = (props) => {
    const {
        // colorModeManager,
        config = defaultConfig,
        children,
        theme: propsTheme = defaultTheme,
        disableContrastText,
    } = props;
    const theme = config.theme ?? propsTheme;






    return (
        <ThemeUiConfigProvider
            theme={theme as any}
            config={config}
            disableContrastText={disableContrastText}
        >
            {children}
        </ThemeUiConfigProvider>
    )





    // const theme = config.theme ?? propsTheme;

    // const newTheme = React.useMemo(() => {
    //     if (config.enableRem) {
    //         return platformSpecificSpaceUnits(theme);
    //     }
    //     return theme;
    // }, [config.enableRem, theme]);

    // const windowWidth = useWindowDimensions()?.width;

    // const currentBreakpoint = React.useMemo(() => getClosestBreakpoint(newTheme.breakpoints, windowWidth), [windowWidth, newTheme.breakpoints]);

    // return (
    //     <ThemeUiConfigProvider
    //         theme={newTheme}
    //         config={config}
    //         currentBreakpoint={currentBreakpoint}
    //         isSSR={isSSR}
    //         disableContrastText={disableContrastText}
    //     >
    //         <SafeAreaProvider
    //             initialMetrics={
    //                 initialWindowMetrics ?? defaultInitialWindowMetricsBasedOnPlatform
    //             }
    //         >
    //             <ResponsiveQueryProvider disableCSSMediaQueries={!isSSR}>
    //                 <HybridProvider
    //                     colorModeManager={colorModeManager}
    //                     options={theme.config}
    //                 >
    //                     <OverlayProvider isSSR>
    //                         <ToastProvider>
    //                             <InitializeToastRef />
    //                             <SSRProvider>{children}</SSRProvider>
    //                         </ToastProvider>
    //                     </OverlayProvider>
    //                 </HybridProvider>
    //             </ResponsiveQueryProvider>
    //         </SafeAreaProvider>
    //     </ThemeUiConfigProvider>
    // );
};

// const InitializeToastRef = () => {
//     const toast = useToast();
//     ToastRef.current = toast;
//     return null;
// };

export default ThemeUiProvider;
