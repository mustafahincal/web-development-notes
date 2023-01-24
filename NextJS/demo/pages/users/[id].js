import { useRouter } from "next/router";
import React from "react";

const User = ({ user }) => {
  const router = useRouter();
  return (
    <div
      style={{
        margin: "15px",
        backgroundColor: "red",
        color: "white",
        padding: "20px",
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      <span onClick={() => router.back()} style={{ display: "block" }}>
        Back
      </span>
      <span style={{ display: "block" }}> {user.name} </span>
      <span style={{ display: "block" }}> {user.email} </span>
    </div>
  );
};

// Generates `/posts/1` and `/posts/2`
export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  const ids = users.map((user) => user.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return { paths, fallback: false };
}

export default User;
