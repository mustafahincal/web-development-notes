import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Posts = ({ posts }) => {
  const router = useRouter();

  const addPost = async () => {
    await fetch("http://localhost:3000/api/posts/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "1",
        title: "test title 1",
        body: "test body 1",
      }),
    });
  };
  return (
    <div>
      <button onClick={addPost} className="btn" style={{ marginTop: "30px" }}>
        Add Post
      </button>
      {posts.map((post) => (
        <div key={post.id} className="comment-wrap">
          <button
            onClick={() => router.push(`/posts/${post.id}`)}
            className="btn"
          >
            Detail
          </button>
          <h2>
            {post.id} - {post.title}
          </h2>
        </div>
      ))}

      <style jsx>
        {`
          .btn {
            padding: 10px 20px;
            cursor: pointer;
          }
          .comment-wrap {
            display: flex;
            gap: 1.5rem;
            margin-top: 30px;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export async function getServerSideProps(context) {
  const result = await fetch("http://localhost:3000/api/posts");
  const posts = await result.json();
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
