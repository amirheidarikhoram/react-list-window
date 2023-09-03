/// <reference types="react" />
export interface TriggerChildrenProps {
    hasNextPage: boolean;
    loading: boolean;
    handleLoadMore: () => void;
    enterCount: number;
}
export interface TriggerProps {
    children: (props: TriggerChildrenProps) => React.ReactNode;
    countEnters?: boolean;
    loadMore?: boolean;
    onLoadMore?: () => void;
}
