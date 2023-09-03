import { useMemo } from "react";
import Posts from "./assets/posts.json";
import { APIFunction, ListProps } from "src/ts";
import { Data, Trigger, List, Post, PostProps, Windowed } from "src/components";

function App() {
    const apiFn: APIFunction<any> = (page, pageSize, signal) =>
        new Promise((resolve, reject) => {
            signal.addEventListener("abort", () => {
                reject(new DOMException("Aborted", "AbortError"));
            });

            const res = {
                data: Posts
                    // .slice(page * pageSize, (page + 1) * pageSize)
                    .map((p, i) => ({
                        ...p,
                        id: page * pageSize + i,
                    })),
                hasNextPage: page > 1 ? false : true,
                page,
                pageSize,
                total: 100000,
            };

            setTimeout(() => {
                resolve(res);
            }, 200);
        });

    const props = useMemo(
        (): ListProps<PostProps["post"]> => ({
            apiFn,
            orientation: "vertical",
            pageSize: 100,
            fixedSize: false,
        }),
        []
    );

    return (
        <List {...props}>
            <Data<Post>>
                {(state) =>
                    state.data.map((d) => (
                        <Windowed key={d.id}>
                            <Post post={d} />
                        </Windowed>
                    ))
                }
            </Data>
            <Trigger countEnters>
                {({ handleLoadMore, enterCount, loading, hasNextPage }) => (
                    <button onClick={handleLoadMore}>
                        Load More {loading && "Loading!"} enterCount: {enterCount} hasNextPage{" "}
                        {hasNextPage ? "YES" : "NO"}
                        {hasNextPage}
                    </button>
                )}
            </Trigger>
        </List>
    );
}

export default App;
