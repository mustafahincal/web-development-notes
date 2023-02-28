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

  const typingHandler = (e) => {
    console.log(e.key);
  };

  return (
    <div>
      <form onSubmit={formHandle}>
        <input
          type="text"
          placeholder="firstname"
          value={firstName}
          onChange={typingHandler}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;
