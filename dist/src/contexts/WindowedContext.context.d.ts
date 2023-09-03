/// <reference types="react" />
import { TOrientation, WindowedContextActions, WindowedContextState } from "../ts";
export declare const WindowedContext: import("react").Context<WindowedContextState & WindowedContextActions>;
export interface WindowedProviderProps {
    children: React.ReactNode;
    fixedSize?: boolean;
    orientation?: TOrientation;
}
export declare const WindowedProvider: ({ children, fixedSize, orientation, }: WindowedProviderProps) => import("react/jsx-runtime").JSX.Element;
