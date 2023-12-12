import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import ShimmerUI from "./ShimmerUI";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  // const { postList, fetching } = useContext(PostListData);

  // const [fetching, setFetchingData] = useState(false);

  // useEffect(() => {
  //   setFetchingData(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetchingData(false);
  //     });

  //   return () => {
  //     // console.log("Cleaning up UseEffect.");
  //     controller.abort();
  //   };
  // }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* {fetching && <ShimmerUI />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)} */}

      {/* {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
