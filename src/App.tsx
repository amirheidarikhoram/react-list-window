import { useMemo } from "react";
import Posts from "./assets/posts.json";
import { APIFunction, ListProps } from "src/ts";
import { List, Post, PostProps, Windowed } from "src/components";

function App() {
    const manyPosts = useMemo(() => {
        const list = [];

        for (let i = 0; i < 10000; i++) {
            list.push(...Posts);
        }

        return list;
    }, []);

    const apiFn: APIFunction<any> = (page, pageSize, signal) =>
        new Promise((resolve, reject) => {
            signal.addEventListener("abort", () => {
                reject(new DOMException("Aborted", "AbortError"));
            });

            resolve({
                data: manyPosts.slice(page * pageSize, (page + 1) * pageSize),
                hasNextPage: (page + 1) * pageSize < manyPosts.length,
                page,
                pageSize,
                total: manyPosts.length,
            });
        });

    const props = useMemo(
        (): ListProps<PostProps["post"]> => ({
            apiFn,
            orientation: "vertical",
            pageSize: 10000,
            fixedSize: false,
        }),
        []
    );

    return (
        <>
            Hello
            <div>
                <List {...props}>
                    {(state) =>
                        state.data.map((d) => (
                            <Windowed key={d.id}>
                                <Post post={d} />
                            </Windowed>
                        ))
                    }
                </List>
            </div>
        </>
    );
}

export default App;
