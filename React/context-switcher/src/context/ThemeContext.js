import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

   useEffect(() => {
      console.log(theme);
      localStorage.setItem("theme", theme);
   }, [theme]);

   const values = {
      theme,
      setTheme,
   };

   return (
      <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
   );
};

export default ThemeContext;
