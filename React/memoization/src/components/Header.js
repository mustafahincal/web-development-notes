import React from "react";

//* function Header({number, increment}) gibi de props'ları yönetebilirim
function Header(props) {
   console.log("Header Component Re-rendered ");
   return (
      <>
         <div>Header - {props.number}</div>
         <br />
         <br />
         <button onClick={props.increment}>Click</button>
      </>
   );
}

export default React.memo(Header);
