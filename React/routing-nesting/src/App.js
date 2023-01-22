import * as React from "react";
import "./App.css";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   NavLink,
   Link,
} from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import Error404 from "./components/Error404";

function App() {
   return (
      <Router>
         <div>
            <nav>
               <ul>
                  <li>
                     <NavLink
                        className={({ isActive }) =>
                           isActive ? "active" : "not-active"
                        }
                        to="/"
                     >
                        Home
                     </NavLink>
                     {/* className={({ isActive }) => (isActive ? "yes" : "no")} => böyle yaparak eğer active ise yes class'ını veriyoruz active değilse no class'ını veriyoruz */}
                  </li>
                  {/* NavLink ile özelleştirme yapabiliriz. Linkten farkı sadece odur */}
                  <li>
                     <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                           color: isActive ? "red" : "green",
                        })}
                     >
                        About
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        className={({ isActive }) =>
                           isActive ? "active" : "not-active"
                        }
                        to="/users"
                     >
                        Users
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>

         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/*" element={<Users />} />
            <Route path="*" element={<Error404 />} />
         </Routes>
      </Router>
   );
}

export default App;
