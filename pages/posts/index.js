import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Posts.module.css";

function Posts({ posts }) {
  const router = useRouter();
  // console.log(posts);
  return (
    <div>
      <title>Sid's Next App</title>
      <h1>Welcome to the POSTS</h1>

      {posts.map(({ title, body, id, userId }) => (
        <div
          className={styles.postContainer}
          key={id}
          onClick={() => router.push(`/posts/${id}`)}
        >
          <h4>{title}</h4>
          <h5>{body}</h5>
        </div>
      ))}
    </div>
  );
}

// EXECUTED ON SERVER

export async function getStaticProps() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
