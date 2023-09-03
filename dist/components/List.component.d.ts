/// <reference types="react" />
import { ListProps, ListRef } from '../../../../../../src/ts';
declare function List<T>({ apiFn, pageSize, overridePageSize, children, orientation, fixedSize, autoLoad, }: ListProps<T>, ref: React.ForwardedRef<ListRef<T>>): import("react/jsx-runtime").JSX.Element;
declare const ForwardedList: <T>(props: ListProps<T> & {
    ref?: import("react").ForwardedRef<ListRef<T>> | undefined;
}) => ReturnType<typeof List>;
export { ForwardedList as List };
