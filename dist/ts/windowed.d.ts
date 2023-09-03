import { ReactNode } from "react";
import { TOrientation } from ".";
export interface WindowedContextState {
    defaultHeight: number;
    defaultWidth: number;
    fixedSize?: boolean;
    root?: HTMLElement;
    orientation: TOrientation;
    isSet: boolean;
}
export interface WindowedContextActions {
    setDefaultHeight: (height: number) => void;
    setDefaultWidth: (width: number) => void;
    setRoot: (root: HTMLElement) => void;
}
export interface WindowedProps {
    children: ReactNode;
    isReference?: boolean;
}
