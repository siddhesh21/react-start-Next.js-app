import React from "react";
import Head from "next/Head";
import Link from "next/Link";
import styles from "../../styles/Post.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { userHasArticle, userStateArticles } from "../../atoms/userAtom";
import { Button } from "@material-ui/core";
import SavedArticles from "../../components/SavedArticles";

function Post({ post: { body, id, title, userId }, post, user }) {
  const [userArticles, setUserArticles] = useRecoilState(userStateArticles);
  const hasArticle = useRecoilValue(userHasArticle(id));

  const saveArticle = () => {
    console.log("Saved user Article");
    setUserArticles([...userArticles, { ...post, user }]);
  };

  console.log(userArticles);
  console.log(hasArticle);

  return (
    <>
      <Head>
        <title>Post by {user.name}</title>
      </Head>

      <div className={styles.container}>
        <h2>
          #{id} - {title}
        </h2>
        <h3>Written by: {user.name} </h3>
        <p>UserID: {userId}</p>
        <p>{body}</p>

        <div className={styles.buttonContainer}>
          <Link href={`/posts/${id - 1}`}>Previous Post</Link>

          <Button
            color="secondary"
            variant="outlined"
            disabled={hasArticle}
            onClick={saveArticle}
          >
            {hasArticle ? "Article saved to your List" : "Save Article"}
          </Button>

          <Link href={`/posts/${id + 1}`}>Next Post</Link>
        </div>
      </div>
      <SavedArticles />
    </>
  );
}

export async function getStaticProps(context) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  ).then((res) => res.json());

  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  ).then((res) => res.json());

  return {
    props: {
      post,
      user,
    },
  };
}

export async function getStaticPaths(context) {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  const paths = posts.map((post) => `/posts/${post.id}`);
  return {
    paths,
    fallback: false,
  };
}

export default Post;
