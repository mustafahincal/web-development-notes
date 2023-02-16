import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        style={{
          padding: "10px 20px",
          marginTop: "30px",
          backgroundColor: "white",
          color: "black",
          cursor: "pointer",
        }}
      >
        Back
      </button>
      <h1
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "10px 20px",
          margin: "20px 0",
        }}
      >
        <span> {post.id} </span> - <span> {post.title} </span>
      </h1>
    </div>
  );
};

export async function getStaticProps(context) {
  const result = await fetch(
    `http://localhost:3000/api/posts/${context.params.id}`
  );
  const post = await result.json();
  return {
    props: {
      post,
    },
  };
}

//* we use getStaticPaths to define dynamic routes like id
export async function getStaticPaths() {
  const result = await fetch(`http://localhost:3000/api/posts`);
  const posts = await result.json();
  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Post;
