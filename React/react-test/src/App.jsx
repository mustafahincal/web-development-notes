import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const testInput = useRef(null);
  const isMounted = useRef(false);

  const typingHandler = (e) => {
    console.log(e.key);
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-rendered");
  }, [name]);

  const handleFormSubmit = () => {
    console.log(testInput.current.value);
  };

  return (
    <div>
      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={testInput}
      ></input>
    </div>
  );
}

export default App;
