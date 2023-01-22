import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const values = { user, setUser };

   return (
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
   );
};

//* daha düzenli hale getirebiliriz, normalde context'i her kullanacağımız yerde userContext import edip, const data = useContext(UserContext); şeklinde kullanıyoruz bunu şöyle daha güzel şekilde yapabiliriz;

export const useUser = () => useContext(UserContext);
