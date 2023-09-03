import { createContext, useRef, useState } from "react";
import { TOrientation, WindowedContextActions, WindowedContextState } from "../ts";

const INITIAL_STATE_ACTIONS: WindowedContextState & WindowedContextActions = {
    defaultHeight: 0,
    defaultWidth: 0,
    fixedSize: false,
    root: undefined,
    orientation: "vertical",
    isSet: false,
    setDefaultHeight: () => {},
    setDefaultWidth: () => {},
    setRoot: () => {},
};

export const WindowedContext = createContext<WindowedContextState & WindowedContextActions>(
    INITIAL_STATE_ACTIONS
);

export interface WindowedProviderProps {
    children: React.ReactNode;
    fixedSize?: boolean;
    orientation?: TOrientation;
}

export const WindowedProvider = ({
    children,
    fixedSize,
    orientation = "vertical",
}: WindowedProviderProps) => {
    const rootRef = useRef<HTMLElement | undefined>();
    const [size, setSize] = useState({
        defaultHeight: 0,
        defaultWidth: 0,
        isSet: false,
    });

    const handleSetDefaultHeight = (height: number) => {
        setSize((prev) => ({
            ...prev,
            defaultHeight: height,
            isSet: true,
        }));
    };

    const handleSetDefaultWidth = (width: number) => {
        setSize((prev) => ({
            ...prev,
            defaultWidth: width,
            isSet: true,
        }));
    };

    const handleSetRoot = (root: HTMLElement) => {
        rootRef.current = root;
    };

    return (
        <WindowedContext.Provider
            value={{
                ...size,
                fixedSize: fixedSize,
                orientation,
                setDefaultHeight: handleSetDefaultHeight,
                setDefaultWidth: handleSetDefaultWidth,
                setRoot: handleSetRoot,
            }}
        >
            {children}
        </WindowedContext.Provider>
    );
};
