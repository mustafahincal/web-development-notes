import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
   const { id } = useParams();
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
         axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .finally(() => setIsLoading(false));
      }, 1000);
   }, [id]);
   //* useParams kullanarak /user/:id ' deki id'yi alabiliriz.

   return (
      <div>
         <h3>User Detail</h3>
         {isLoading && <h2>Loading . . . </h2>}
         {!isLoading && <code>{JSON.stringify(user)}</code>}
         <br></br>
         <br></br>

         <Link to={`/user/${parseInt(id) + 1}`}>
            Next User ({parseInt(id) + 1})
         </Link>
      </div>
   );
}

export default User;

// function User() {
//     const { id } = useParams();
//     let [target, setTarget] = useState(id);
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//        setIsLoading(true);
//        setTimeout(() => {
//           axios(`https://jsonplaceholder.typicode.com/users/${target}`)
//              .then((res) => setUser(res.data))
//              .finally(() => setIsLoading(false));
//        }, 1000);
//     }, [target]);

//     return (
//        <div>
//           <h3>User Detail</h3>
//           {isLoading && <h2>Loading . . . </h2>}
//           {!isLoading && <code>{JSON.stringify(user)}</code>}
//           <br></br>
//           <br></br>
//           <button
//              onClick={() => {
//                 setTarget(++target);
//              }}
//           >
//              Next User {">"}{" "}
//           </button>
//        </div>
//     );
//  }
