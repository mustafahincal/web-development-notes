import { useRouter } from "next/router";
import React from "react";

const Users = ({ users }) => {
  const router = useRouter();
  return (
    <div>
      {users.map((user, index) => (
        <div
          onClick={() => router.push(`/users/${user.id}`)}
          key={index}
          style={{
            margin: "15px",
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <span style={{ display: "block" }}> {user.name} </span>
          <span style={{ display: "block" }}> {user.email} </span>
        </div>
      ))}
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  // Pass data to the page via props
  return { props: { users } };
}

export default Users;
