import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User.js";
import Error404 from "./Error404.js";
import "../App.css";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   NavLink,
   Link,
} from "react-router-dom";

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
                  <NavLink
                     className={({ isActive }) => (isActive ? "active" : "")}
                     to={`/users/${user.id}`}
                  >
                     {user.name}
                  </NavLink>
               </li>
            ))}
         </ul>

         <Routes>
            <Route path="/" element={<h2>Please select user</h2>}></Route>
            <Route path="/:id" element={<User />}></Route>
         </Routes>
      </div>
   );
}

export default Users;
