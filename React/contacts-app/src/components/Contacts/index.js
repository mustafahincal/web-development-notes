import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";

function Contacts() {
   const [contacts, setContacts] = useState([
      {
         fullName: "Mustafa",
         phone_number: "1232131",
      },
      {
         fullName: "Tunahan",
         phone_number: "2132131",
      },
   ]);

   useEffect(() => {
      console.log(contacts);
   }, [contacts]);

   return (
      <div id="container">
         <h1 className="header">Contacts</h1>
         <List contacts={contacts} />
         <Form addContact={setContacts} contacts={contacts} />
      </div>
   );
}

export default Contacts;
