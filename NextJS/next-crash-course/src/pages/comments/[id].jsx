import React from "react";

const Comment = ({ comment }) => {
  return (
    <h1
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "10px 20px",
        margin: "20px 0",
      }}
    >
      <span> {comment.id} </span> - <span> {comment.email} </span>
    </h1>
  );
};

export async function getServerSideProps(context) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${context.params.id}`
  );
  const comment = await result.json();
  return {
    props: {
      comment,
    },
  };
}

//! we cant use getStaticProps in [id].jsx pages, getStaticPaths is required for dynamic SSG pages and is missing for '/comments/[id]'.
/* export async function getStaticProps(context) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${context.params.id}`
  );
  const comment = await result.json();
  return {
    props: {
      comment,
    },
  };
} */

export default Comment;
