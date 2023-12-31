import { PropsWithChildren, ReactNode } from "react";
import { WindowedContextState } from "./windowed";
export type APIFunction<T> = (page: number, pageSize: number, abortSignal: AbortSignal) => Promise<PaginatedData<T>>;
export type ListWindowedProps = Pick<WindowedContextState, "orientation" | "fixedSize">;
export interface PaginatedData<T> {
    data: T[];
    page: number;
    pageSize: number;
    total: number;
    hasNextPage: boolean;
}
export interface ListProps<T> extends PropsWithChildren, ListWindowedProps {
    apiFn: APIFunction<T>;
    pageSize?: number;
    overridePageSize?: boolean;
    autoLoad?: boolean;
}
export interface ListState<T> {
    data: T[];
    loading: boolean;
    error: any;
    page: number;
    pageSize: number;
    lastUpdateAt: number;
    hasNextPage: boolean;
    initialLoadDone: boolean;
}
export interface ListRef<T> {
    reset: () => void;
    setPageSize: (pageSize: number) => void;
    getData: () => ListState<T>;
}
export interface ListContextState<T> extends ListState<T> {
}
export interface ListContextActions {
    handleLoadMore: () => void;
    handleReset: () => void;
}
export interface DataProps<T> {
    children?: (state: ListState<T> & ListContextActions) => ReactNode;
}
