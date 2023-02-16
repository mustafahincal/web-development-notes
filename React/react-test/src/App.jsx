import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [users, setUsers] = useState([
    {
      uname: "",
      usurname: "",
    },
  ]);

  const formHandle = (e) => {
    setUsers([...users, { uname: firstName, usurname: lastName }]);
    e.preventDefault();
  };
  const test = () => {
    console.log(users);
  };
  return (
    <div>
      <form onSubmit={formHandle}>
        <input
          type="text"
          placeholder="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;
