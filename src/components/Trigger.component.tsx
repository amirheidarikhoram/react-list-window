import { useInViewport } from "ahooks";
import { useContext, useEffect, useRef, useState } from "react";
import { ListContext } from "../contexts";
import { TriggerProps } from "../ts";

function Trigger({ countEnters, onLoadMore, loadMore = true, children }: TriggerProps) {
    const containerDivRef = useRef<HTMLDivElement>(null);
    const [enterCount, setEnterCount] = useState(0);

    const [inViewport] = useInViewport(containerDivRef.current);

    const { handleLoadMore, loading, initialLoadDone, hasNextPage } = useContext(ListContext);

    useEffect(() => {
        if (countEnters) {
            if (inViewport) {
                setEnterCount((prevState) => prevState + 1);
            }
        }
        if (initialLoadDone && inViewport && loadMore) {
            hasNextPage && (onLoadMore ?? handleLoadMore)();
        }
    }, [inViewport]);

    return (
        <div ref={containerDivRef}>
            {children({
                handleLoadMore,
                loading,
                hasNextPage,
                enterCount: enterCount,
            })}
        </div>
    );
}

export { Trigger };
