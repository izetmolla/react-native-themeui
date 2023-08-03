import { useContext } from "react";
import { ThemeUiContext } from "../contexts/ThemeUiProvider";


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
    const { mode, colors } = useContext(ThemeUiContext);


    const optionalStyle = mode === "light" ? incomingProps?._light : incomingProps?._dark
    const style: any = colors[mode][component]
    return { ...incomingProps, style: { ...style, ...optionalStyle, ...incomingProps?.style } };
}