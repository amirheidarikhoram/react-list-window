import { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { ListContext, WindowedProvider } from "src/contexts";
import { ListProps, ListRef, ListState } from "src/ts";
import { Data } from "./Data.component";

function List<T>(
    {
        apiFn,
        pageSize = 10,
        overridePageSize = false,
        children,
        orientation = "vertical",
        fixedSize = true,
    }: ListProps<T>,
    ref: React.ForwardedRef<ListRef<T>>
) {
    const initialLoad = useRef(true);
    const [data, setData] = useState<ListState<T>>({
        data: [] as T[],
        loading: true,
        error: null,
        page: 1,
        pageSize,
        lastUpdateAt: Date.now(),
        hasNextPage: true,
        loadedFromCache: false,
    });
    const apiCancellationRef = useRef<any>();

    const handleDataLoad = useCallback((page: number, pageSize = data.pageSize) => {
        if (apiCancellationRef.current) {
            apiCancellationRef.current.abort();
        }

        const controller = new AbortController();
        apiCancellationRef.current = controller;

        setData((prev) => ({ ...prev, loading: true }));
        apiFn(page, pageSize, controller.signal)
            .then((res) => {
                setData((prev) => ({
                    ...prev,
                    page,
                    pageSize,
                    error: null,
                    data: [...prev.data, ...res.data],
                    loading: false,
                    lastUpdateAt: Date.now(),
                    hasNextPage: res.hasNextPage,
                    loadedFromCache: false,
                }));
            })
            .catch((err) => {
                setData((prev) => ({
                    ...prev,
                    pageSize,
                    error: err,
                    loading: false,
                    lastUpdateAt: Date.now(),
                    loadedFromCache: false,
                }));
            })
            .finally(() => {
                apiCancellationRef.current = null;
            });
    }, []);

    const handleLoadMore = useCallback(() => {
        handleDataLoad(data.page + 1, data.pageSize);
    }, [data.page, data.pageSize]);

    const handleReset = useCallback(
        (pageSize?: number) => {
            setData({
                data: [] as T[],
                loading: false,
                error: null,
                page: 1,
                pageSize: pageSize ?? data.pageSize,
                hasNextPage: false,
                lastUpdateAt: Date.now(),
                loadedFromCache: false,
            });
            handleDataLoad(1, pageSize ?? data.pageSize);
        },
        [data.page, data.pageSize]
    );

    useEffect(() => {
        !initialLoad.current &&
            overridePageSize &&
            data.pageSize !== pageSize &&
            handleReset(pageSize);
    }, [pageSize, data.pageSize, overridePageSize]);

    useEffect(() => {
        handleDataLoad(0, data.pageSize);
    }, []);

    useImperativeHandle(ref, () => ({
        reset: handleReset,
        setPageSize: (pageSize: number) => handleReset(pageSize),
        getData: () => data,
    }));

    return (
        <ListContext.Provider
            value={{
                ...data,
                handleLoadMore,
                handleReset,
            }}
        >
            <WindowedProvider orientation={orientation} fixedSize={fixedSize}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: orientation === "vertical" ? "column" : "row",
                    }}
                >
                    <Data<T>>{children}</Data>
                </div>
            </WindowedProvider>
        </ListContext.Provider>
    );
}

const ForwardedList = forwardRef(List) as <T>(
    props: ListProps<T> & { ref?: React.ForwardedRef<ListRef<T>> }
) => ReturnType<typeof List>;

export { ForwardedList as List };
