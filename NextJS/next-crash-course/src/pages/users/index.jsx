import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ margin: "10px" }}>
          {user.email}
        </div>
      ))}
    </div>
  );
};

//* getServerSideProps works on the server side, reprocess every request, runs every request
//* use on data that change much
export async function getServerSideProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await result.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
