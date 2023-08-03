import { useTheme } from "./useTheme";


export function usePropsResolution(
    component: "Box" | "Text" | "Button",
    incomingProps: any,
    // state?: any,
    // config?: {
    //     componentTheme?: any;
    //     resolveResponsively?: string[];
    //     ignoreProps?: string[];
    //     cascadePseudoProps?: boolean;
    //     extendTheme?: string[];
    // }
) {
    const { theme } = useTheme();


    const optionalStyle = theme.mode === "light" ? incomingProps?._light : incomingProps?._dark
    const style: any = theme.colors[theme.mode][component]
    return { ...incomingProps, style: { ...style, ...optionalStyle, ...incomingProps?.style } };
}