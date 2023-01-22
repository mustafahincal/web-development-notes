import { useState } from "react";
function InputExample() {
   const [form, setForm] = useState({ name: "", surname: "" });

   const onChangeInput = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   return (
      <>
         <div>
            Name <br />
            <input
               name="name"
               value={form.name}
               onChange={(e) => onChangeInput(e)}
            />
         </div>
         <div>
            Surname <br />
            <input
               name="surname"
               value={form.surname}
               onChange={(e) => onChangeInput(e)}
            />
         </div>
         <br />
         <br />
         {form.name} {form.surname}
      </>
   );
}
/*
    const [name, setName] = useState("Mustafa");
   const [surname, setSurname] = useState("");

   const changeName = (e) => setSurname(e.target.value);

   return (
      <>
         <div>
            Name <br />
            <input value={name} onChange={(e) => setName(e.target.value)} />
         </div>
         <div>
            Surname <br />
            <input value={surname} onChange={(e) => changeName(e)} />
         </div>
         <br />
         <br />
         {name} {surname}
      </>
   );

*/

export default InputExample;
