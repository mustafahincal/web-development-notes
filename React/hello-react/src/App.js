import { useState } from "react";
import Header from "./components/Header";
const App = () => {
   // const name = "Mustafa";
   // const surname = "Hıncal";

   // const [name, setName] = useState("Mustafa");

   const name = "Mustafa";
   const surname = "Hıncal";
   const isLoggedIn = true;

   return (
      <>
         {/* <Header /> */}

         {/* <h1>{name}</h1>
         <h1>{`Soyadım ${surname}`}</h1> */}

         {/* <h1>{name}</h1>
         <button onClick={() => setName("Ahmet")}>Click me</button> */}

         {/* {isLoggedIn && <h1>{` ${name} ${surname} giriş yaptı`}</h1>}
         {!isLoggedIn && <h1>Giriş yapmadınız!!</h1>} */}

         {isLoggedIn ? (
            <h1>{` ${name} ${surname} giriş yaptı`}</h1>
         ) : (
            <h1>Giriş yapmadınız!!</h1>
         )}
      </>
   );
};

export default App;
