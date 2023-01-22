import { useEffect, useState } from "react";
import axios from "axios";

function User() {
   const [users, setUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         axios("https://jsonplaceholder.typicode.com/users")
            .then(({ data: res }) => setUsers(res))
            // .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
      }, 1000);
   }, []);

   return (
      <div>
         <h1>Users</h1>
         {isLoading && <div>Loading...</div>}
         {!isLoading &&
            users.map((user, index) => <div key={index}> {user.name} </div>)}
      </div>
   );
}
//* fetch kullanırsak gelen datayı ekstra bi data.json() ile stringfy etmemiz gerekiyor.
//* axios da hem buna gerek yok hem de başka daha iyi yönleri var.
//* farklı olarak axios bir response dönüyor onun içindeki data bizim verilemizi içeriyor.
/*
    useEffect(() => {
      setTimeout(() => {
         fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => data.json())
            .then((data) => setUsers(data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
      }, 1000);
   }, []);
*/

export default User;
