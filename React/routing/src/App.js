import * as React from "react";
// import {BrowserRouter, Routes, Route, Link , Outlet} from "react-router-dom";
import "./App.css";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   NavLink,
   Link,
} from "react-router-dom";
//pages
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";
import Users from "./components/Users";

//kodluyoruz videosuna göre uyarladıgım
function App() {
   return (
      <Router>
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                     {/* Yönlendirmeyi a tag'i ile yaparsam sayfa yenilenir yani
                     istediğimiz şey olmaz. a yerine Link veya NavLink
                     kullanıyoruz. */}
                  </li>

                  <li>
                     <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                           color: isActive ? "red" : "green",
                        })}
                     >
                        About
                     </NavLink>
                     {/* NavLink ile stil verdik. Link aktif ise red değil ise sarı olsun dedik. */}
                  </li>

                  <li>
                     <NavLink to="/users">Users</NavLink>
                  </li>
               </ul>
            </nav>
         </div>

         <Routes>
            <Route path="/" exact element={<Home />} />
            {/* exact -> path'in birebir /about a eşit olmasını kontrol eder.
            exact olmazsa / = /about olur ayıramaz ; ama react6'dan sonra gerekli değil
            sanırsam */}
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route
               path="*"
               element={
                  <main style={{ padding: "1rem" }}>
                     {/* burada yıldız "*" diğerlerini bulamazsan her ne olursa bununla eşleş demek.  */}
                     <p>There' s nothing here!</p>{" "}
                  </main>
               }
            />
         </Routes>
      </Router>
   );
}

export default App;

/* 
<div>
  <nav>
    <ul>
       <li>
          <Link to="/">Home</Link>           
        </li>
        <li>
          <Link to="/about">About</Link>
          <a href="/about">About</a>  
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
    </ul>
  </nav>
  <Outlet />
</div> 

    HTML ile link verdiğimizde sayfa yenilenir ancak react router ile component yenilenir sadece, sayfa komple yenilenmez.
*/

/* 
  patika videosunda exact kullanılmış. v6 ile Routes içine yazıldığından böyle bi sorun olmuyor.

  <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="users" element={<Users />} />
    <Route path="user/:id" element={<User />} />  
    En son  </Route> yani home sayfanın kapaması, home içine koyduğumuz için hepsini gösterecek. 
  </Routes>

    </BrowserRouter> 
          
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="users" element={<Users />} />          
    <Route path="/user/:id" element={<User />} />           
    </Route> 
     En son  </Route> yani home sayfanın kapaması, home içine koyduğumuz için hepsini gösterecek. 
  </Routes> 
*/
