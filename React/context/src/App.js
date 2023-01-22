import "./App.css";
import ThemeContext from "./context/ThemeContext";
import { ThemeProvider } from "./context/ThemeContext";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
   return (
      <div className="App">
         <ThemeProvider>
            <Button />
            <hr />
            <Header />
         </ThemeProvider>
      </div>
   );
}

export default App;

/* Normalde kullanımı böyle ancak daha güzelleştirmek için yukardaki gibi yeni bir ThemeProvider oluşturduk, oluştururken içerisindeki(children) ifadeler önemli olduğu için, onları kullandık!  
    <div className="App">
      <ThemeContext.Provider value={dark}>
          <Button />
      </ThemeContext.Provider>
    </div>; 
*/
