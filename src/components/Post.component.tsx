interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostProps {
    post: Post;
}

function Post({ post }: PostProps) {
    return (
        <div
            style={{
                marginBottom: 30,
            }}
        >
            <h3
                style={{
                    marginTop: 0,
                    marginBottom: 10,
                }}
            >
                {post.title}
            </h3>
            <p
                style={{
                    margin: 0,
                }}
            >
                {post.body}
            </p>
        </div>
    );
}

export { Post };
