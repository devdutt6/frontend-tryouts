import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return posts;
  } catch (err) {
    throw new Error(err.message);
  }
};

const postPost = async (payload) => {
  try {
    console.log("🚀 ~ file: Posts.jsx:21 ~ postPost ~ payload:", payload);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "random title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt maxime in mollitia minima. Nemo laboriosam",
      }),
      "Content-Type": "application/json",
    });
    const post = await response.json();
    return post;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const Posts = () => {
  // const queryClient = useQueryClient();
  const { isError, error, data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    select: (data) => data.map((post) => ({ id: post.id, name: post.title })),
  });

  const mutation = useMutation({
    mutationFn: postPost,
    // onSuccess: (data) => {
    //   queryClient.invalidateQueries({ queryKey: ["posts"] });
    // },
  });

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{error}</h2>
      ) : (
        <>
          <button
            onClick={() => {
              mutation.mutate({ payload: "find me" });
            }}
            disabled={mutation.data}
          >
            {mutation.isLoading ? (
              <span>Sending</span>
            ) : mutation.isError ? (
              <span>{error}</span>
            ) : mutation.data ? (
              <span>Added Post</span>
            ) : (
              <span>Add post</span>
            )}
          </button>
          <ul>
            {data &&
              data.length > 0 &&
              data.map((post) => <li key={post.id}>{post.name}</li>)}
          </ul>
        </>
      )}
    </div>
  );
};
