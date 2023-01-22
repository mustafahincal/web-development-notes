import React, { useState } from "react";

function Counter() {
   const [count, setCounter] = useState(0);
   return (
      <div>
         <h1>{count}</h1>
         <br />
         <button onClick={() => setCounter(count + 1)}>Increase</button>
         <br />
         <button onClick={() => setCounter(count - 1)}>Decrease</button>
      </div>
   );
}

export default Counter;
