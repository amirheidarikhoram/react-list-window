# React List Window

`react-list-window` is a package designed to simplify the rendering of large and extensive lists in your web applications. Managing large lists efficiently can be a challenging task, leading to performance issues and slow loading times. This package provides an elegant solution through "windowing," allowing you to display only the visible portion of your list at any given time.

## Installation

You can install this component using your preferred package manager. For example, using npm:

```bash
npm install react-list-window
```

Or using yarn:

```bash
yarn add react-list-window
```

## Usage

### 1. Import Components

First, import components:

```jsx
import { List, Data } from "react-window-list";
```

### 2. Define API Function and Props

The List component needs an API function to fetch data page by page. This is a simple example of an API Function accepting an abort controller signal:

```jsx
const apiFn = (page, pageSize, signal) =>
    new Promise((resolve, reject) => {
        signal.addEventListener("abort", () => {
            reject(new DOMException("Aborted", "AbortError"));
        });

        resolve({
            data: posts.slice(page * pageSize, (page + 1) * pageSize),
            hasNextPage: (page + 1) * pageSize < manyPosts.length,
            page,
            pageSize,
            total: posts.length,
        });
    });
```

and the props will be like below:

```jsx
const props = useMemo(
    () => ({
        apiFn,
        orientation: "vertical",
        pageSize: 100,
        fixedSize: false,
        autoLoad: true,
    }),
    []
);
```

### 3. Create List Component With Data Provider

You can get all data from `Data` component like below. You must pass a function rendering elements that are wrapped with `Windowed` component.

```jsx
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
</List>
```

Note: You don't necessarily need to wrap components with `Windowed`. This component is responsible for windowing and will not be applied if you don't use it.

### 4. Add Trigger Component

With `Trigger` you can control when to load a new page. Whenever the button element enters viewport `handleLoadMore` function will be called. It can be disabled by passing `loadMore={false}` as a property.

```jsx
<Trigger>
    {({ handleLoadMore, enterCount, loading, hasNextPage }) => (
        <button onClick={handleLoadMore}>
            Load More {loading && "Loading!"} enterCount: {enterCount} hasNextPage{" "}
            {hasNextPage ? "YES" : "NO"}
        </button>
    )}
</Trigger>
```

## Contributions

We welcome contributions from the community to enhance this package. If you have ideas for improvements, bug fixes, or new features, please feel free to contribute.

Before making any changes, we encourage you to open an issue on our GitHub repository to discuss your proposed contribution. This helps ensure that your contribution aligns with the project's goals and guidelines.
