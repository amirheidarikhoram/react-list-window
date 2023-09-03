import { useContext, useMemo } from "react";
import { ListContext } from "../contexts";
import { DataProps, ListContextActions, ListState } from "../ts";

function Data<T>({ children }: DataProps<T>) {
    const context = useContext(ListContext) as ListState<T> & ListContextActions;

    const renderChildren = useMemo(() => {
        return children?.(context);
    }, [context, children]);

    return <>{renderChildren}</>;
}

export { Data };
