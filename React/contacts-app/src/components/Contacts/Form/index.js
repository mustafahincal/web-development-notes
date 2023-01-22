import { useState, useEffect } from "react";

function Form({ addContact, contacts }) {
   const initialFormValues = { fullName: "", phone_number: "" };
   const [form, setForm] = useState(initialFormValues);

   const onChangeInput = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   useEffect(() => {
      setForm(initialFormValues);
   }, [contacts]);

   const onSubmit = (e) => {
      e.preventDefault();

      if (form.fullName.trim() === "" || form.phone_number.trim() === "") {
         return false;
      }
      addContact([...contacts, form]);
   };

   return (
      <form onSubmit={onSubmit}>
         <div>
            <input
               name="fullName"
               placeholder="Full Name"
               value={form.fullName}
               onChange={onChangeInput}
            />
         </div>
         <div>
            <input
               name="phone_number"
               placeholder="Phone Number"
               value={form.phone_number}
               onChange={onChangeInput}
            />
         </div>
         <div>
            <button>Add</button>
         </div>
      </form>
   );
}

export default Form;
