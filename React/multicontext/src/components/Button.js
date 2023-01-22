import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {
   const data = useContext(ThemeContext);
   // const { theme, setTheme } = useContext(ThemeContext);
   console.log(data);

   return (
      <div>
         Active Theme : {data.theme}
         <br />
         <button
            onClick={() =>
               data.setTheme(data.theme === "dark" ? "light" : "dark")
            }
         >
            Change Theme
         </button>
      </div>
   );
}

export default Button;
