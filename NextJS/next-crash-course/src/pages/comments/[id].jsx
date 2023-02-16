import { useRouter } from "next/router";
import React from "react";

const Comment = ({ comment }) => {
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
        <span> {comment.id} </span> - <span> {comment.email} </span>
      </h1>
    </div>
  );
};

//* Instead of server side props, we could do this as client side, so we could pull data in useEffect and keep it with a state, just like we do in react. But its much better to use getServerSideProps
/* export async function getServerSideProps(context) {
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

//! we cant use getStaticProps in [id].jsx pages, getStaticPaths is required for dynamic SSG pages and is missing for '/comments/[id]'.
//* if we wanna use getStaticProps we must use with getStaticPaths
export async function getStaticProps(context) {
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

//* we use getStaticPaths to define dynamic routes like id
export async function getStaticPaths() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments = await result.json();
  const ids = comments.map((comment) => comment.id);
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

export default Comment;
