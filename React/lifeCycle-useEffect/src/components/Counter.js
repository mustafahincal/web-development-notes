import { useState, useEffect } from "react";

function Counter() {
   const [number, setNumber] = useState(0);
   const [name, setName] = useState("Mustafa");

   useEffect(() => {
      console.log("component mount edildi");

      const interval = setInterval(() => {
         //  setNumber(number + 1);
         setNumber((n) => n + 1);
         // önceki degeri al (n) , onu bir artır (n+1)
      }, 2000);

      return () => clearInterval(interval);
   }, []);

   useEffect(() => {
      console.log("number güncellendi");
   }, [number]);

   return (
      <>
         <h1>{number}</h1>
         <button onClick={() => setNumber(number + 1)}>click</button>

         <br />

         <h1>{name}</h1>
         <button onClick={() => setName("Tunahan")}>click</button>
      </>
   );
}

export default Counter;
