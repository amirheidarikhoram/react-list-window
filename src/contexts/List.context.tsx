import { createContext } from "react";
import { ListContextActions, ListContextState } from "src/ts";

const INITIAL_STATE_ACTIONS: ListContextState<any> & ListContextActions = {
    data: [],
    page: 0,
    pageSize: 0,
    error: null,
    loading: false,
    lastUpdateAt: 0,
    hasNextPage: false,
    initialLoadDone: false,
    handleLoadMore: () => {},
    handleReset: () => {},
};

export const ListContext = createContext(INITIAL_STATE_ACTIONS);
