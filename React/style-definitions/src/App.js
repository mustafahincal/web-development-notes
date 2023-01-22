import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <div
               style={{
                  color: "red",
                  backgroundColor: "white",
                  paddingTop: "10px",
               }}
            >
               Mustafa Hıncal
            </div>

            <button type="button" class="btn btn-primary">
               Primary
            </button>
            <button
               type="button"
               class="btn btn-secondary"
               style={{ marginBottom: "40px" }}
            >
               Secondary
            </button>

            <A />
            <B />
         </header>
      </div>
   );
}

export default App;
