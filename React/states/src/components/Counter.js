import { useState } from "react";
function Counter() {
   const [count, setCount] = useState(0);

   const increase = () => {
      setCount(count + 1);
   };
   const decrease = () => {
      setCount(count - 1);
   };

   return (
      <>
         <h1>{count}</h1>
         <br />
         <button onClick={() => increase()}>Decrease</button>
         <button onClick={() => decrease()}>Increase</button>
      </>
   );
}

/**
    <>
         <h1>{count}</h1>
         <br />
         <button onClick={() => setCount(count - 1)}>Decrease</button>
         <button onClick={() => setCount(count + 1)}>Increase</button>
      </>
 */

export default Counter;
