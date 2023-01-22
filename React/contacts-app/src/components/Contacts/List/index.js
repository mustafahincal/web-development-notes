import { useState } from "react";

function List({ contacts }) {
   const [filterText, setFilterText] = useState("");

   const filtered = contacts.filter((item) => {
      return Object.keys(item).some((key) => {
         return item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase());
      });
   });

   console.log(filtered);

   return (
      <div>
         <div>
            <input
               placeholder="Filter Contact"
               value={filterText}
               onChange={(e) => setFilterText(e.target.value)}
            />
         </div>
         <ul className="list">
            {filtered.map((contact, i) => (
               <li className="contact" key={i}>
                  <span>{contact.fullName}</span>
                  <span>{contact.phone_number}</span>
               </li>
            ))}
         </ul>

         <p>Total Contacts ({filtered.length})</p>
      </div>
   );
}

export default List;
