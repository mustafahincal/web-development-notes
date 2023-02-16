import Head from "next/head";
import React from "react";

const Posts = ({ posts }) => {
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
      <button onClick={addPost} className="btn">
        Add Post
      </button>
      {posts.map((post) => (
        <div key={post.id} className="comment-wrap">
          <div>{post.id}</div>-<h2>{post.title}</h2>
        </div>
      ))}

      <style jsx>
        {`
          .btn {
            padding: 10px 20px;
            margin-top: 20px;
            cursor: pointer;
          }
          .comment-wrap {
            display: flex;
            gap: 1rem;
            margin-top: 20px;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export async function getServerSideProps(context) {
  const result = await fetch("http://localhost:3000/api/posts/getAll");
  const posts = await result.json();
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
