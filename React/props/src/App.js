import "./App.css";
import User from "./components/User";
import { useState } from "react";
import Deneme from "./components/Deneme";

function App() {
   const [theme, setTheme] = useState("dark");
   const friends = [
      {
         id: 1,
         name: "Ahmet",
      },
      {
         id: 2,
         name: "Mustafa",
      },
      {
         id: 3,
         name: "Atakan",
      },
      {
         id: 4,
         name: "Tunahan",
      },
      {
         id: 5,
         name: "Mehmet",
      },
      {
         id: 6,
         name: "Uğur",
      },
   ];

   return (
      // <>
      //    <User
      //       name={"Mustafa"}
      //       surname="Hıncal"
      //       isLoggedIn={true}
      //       age={21}
      //       friends={["Ahmet", "Tayfun", "Gökhan", "Ayşe", "Fatma"]}
      //    />
      // </>
      //* String ifadeleri  {} içine almadan gönderebilirim ancak boolean ve number'ları { } içinde göndermeliyiz.

      <>
         <User
            name={"Mustafa"}
            surname="Hıncal"
            isLoggedIn={true}
            age={21}
            friends={friends}
            address={{
               title: "Karatay/Konya",
               zip: 42020,
            }}
         />
         <br />
         <hr />
         <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Click
         </button>
         Theme : {theme}
         <br />
         <hr />
         <Deneme theme={theme} setTheme={setTheme} />
      </>
   );
}

export default App;
