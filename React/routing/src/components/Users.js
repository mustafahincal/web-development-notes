import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
   const [users, setUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setTimeout(async () => {
         const { data: newUsers } = await axios(
            "https://jsonplaceholder.typicode.com/users"
         );
         setIsLoading(false);
         setUsers(newUsers);

         //  axios("https://jsonplaceholder.typicode.com/users").then((res) =>
         //     setUsers(res.data)
         //  );
      }, 1000);
   }, []);

   return (
      <div>
         <h2>Users</h2>
         {isLoading && <h2>Loading . . .</h2>}
         <ul>
            {users.map((user) => (
               <li key={user.id}>
                  <Link to={`/user/${user.id}`}>{user.name}</Link>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Users;
