import { useContext, useState } from "react";
import { useUser } from "../context/UserContext";
// import UserContext from "../context/UserContext.js" dememize gerek kalmadı, useUser adlı oluşturduğumuz hook sayesinde

function Profile() {
   //   const data = useContext(UserContext);
   //* kendi oluşturduğumuz hook'u kullandık.
   const data = useUser();
   console.log(data);

   const [isLoading, setIsLoading] = useState(false);

   const handleLogin = () => {
      setIsLoading(true);
      setTimeout(() => {
         data.setUser({
            id: 1,
            username: "hncal",
            bio: "lorem ipsum doler",
         });
         setIsLoading(false);
      }, 1500);
   };

   const handleLogout = () => {
      data.setUser(null);
   };
   return (
      <div>
         {!data.user && (
            <button onClick={() => handleLogin()}>
               {isLoading ? "Loading..." : "Login"}
            </button>
         )}

         <br />

         <code>{JSON.stringify(data.user)}</code>

         <br />

         {data.user && <button onClick={() => handleLogout()}>Logout</button>}
      </div>
   );
}

export default Profile;
