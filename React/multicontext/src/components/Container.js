import React from "react";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Container() {
   const { theme } = useContext(ThemeContext);

   return (
      <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
         <Button />
         <hr />
         <Header />
         <hr />
         <br />
         <Profile />
      </div>
   );
}

export default Container;
