import styles from "../../styles/Home.module.css";

function Posts(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <title>Sid's Next App</title>
      <h1>Welcome to the POSTS</h1>
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
