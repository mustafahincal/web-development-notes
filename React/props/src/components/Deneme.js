import React from "react";

function Deneme({ theme, setTheme }) {
   return (
      <div>
         Deneme içindeki Theme : {theme}
         <br />
         <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Deneme Click
         </button>
      </div>
   );
}

export default Deneme;
