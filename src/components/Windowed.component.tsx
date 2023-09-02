import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useInViewport } from "ahooks";
import { WindowedProps } from "src/ts";
import { WindowedContext } from "src/contexts";

function Windowed({ children, isReference }: WindowedProps) {
    const containerDivRef = useRef<HTMLDivElement>(null);
    const instanceContainerRef = useRef<HTMLDivElement>(null);

    const [placeholderSize, setPlaceholderSize] = useState({
        width: 0,
        height: 0,
        isSet: false,
    });

    const {
        defaultHeight,
        defaultWidth,
        fixedSize,
        orientation,
        setDefaultWidth,
        setDefaultHeight,
        root,
        isSet,
    } = useContext(WindowedContext);

    const [inViewport] = useInViewport(containerDivRef.current, {
        root,
        rootMargin: "100px",
    });

    const { width, height } = useMemo(() => {
        return {
            width:
                orientation === "vertical"
                    ? undefined
                    : fixedSize
                    ? defaultWidth
                    : placeholderSize.width,
            height:
                orientation === "horizontal"
                    ? undefined
                    : fixedSize
                    ? defaultHeight
                    : placeholderSize.height,
        };
    }, [orientation, fixedSize, defaultWidth, defaultHeight, placeholderSize]);

    useEffect(() => {
        if (instanceContainerRef.current) {
            const { height, width } = instanceContainerRef.current.getBoundingClientRect();

            setPlaceholderSize({
                width,
                height,
                isSet: true,
            });
        }
    }, []);

    useEffect(() => {
        if (placeholderSize.isSet && isReference && !isSet) {
            setDefaultWidth(placeholderSize.width);
            setDefaultHeight(placeholderSize.height);
        }
    }, [placeholderSize, isSet]);

    const shouldMountInstance = useMemo(
        () =>
            (fixedSize && isReference && !placeholderSize.isSet && !isSet) ||
            (!fixedSize && !placeholderSize.isSet),
        [fixedSize, isReference, placeholderSize, isSet]
    );

    return (
        <div
            ref={containerDivRef}
            style={{
                width,
                height,
            }}
        >
            <>
                {shouldMountInstance && (
                    <div
                        ref={instanceContainerRef}
                        style={{
                            visibility: "hidden",
                            zIndex: -1000,
                            display: "flex",
                        }}
                    >
                        {children}
                    </div>
                )}
                {inViewport && children}
            </>
        </div>
    );
}

export { Windowed };
