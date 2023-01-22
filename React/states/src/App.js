import { useState } from "react";
import Counter from "./components/Counter";

function App() {
   let isim = "mustafa";
   const [name, setName] = useState(isim);
   const [age, setAge] = useState(20);
   const [friends, setFriends] = useState(["Tunahan", "Uğur"]);
   const [address, setAddress] = useState({ title: "Istanbul", zip: 42020 });

   // const addFriend = (name) => {
   //    let newFriends = [...friends]; //* let newFriends = friends deseydim adres ataması yapmış olurduk ve , .push desem bile değer değişse bile adres aynı olduğundan dolayı react değişikliği anlamaz o yüzden sayfayı render etmez.
   //    newFriends.push(name);
   //    setFriends(newFriends);
   // };

   const [userName, setUserName] = useState("hncal");

   const changeUserName = () => {
      setUserName("than");
      console.log(userName);
   };

   return (
      <div className="App">
         <h1>Merhaba {name}</h1>
         <h1>{age}</h1>
         <br></br>
         <button onClick={() => setName("Ali")}>Change Name</button>
         <button onClick={() => setAge(25)}>Change Age</button>

         <br></br>
         <hr></hr>
         <br></br>

         <h1>Friends</h1>
         {friends.map((friend, index) => (
            <div key={index}>{friend}</div>
         ))}
         <br></br>
         <button onClick={() => setFriends([...friends, "Ali"])}>
            add new friend
         </button>

         <br></br>
         <hr></hr>
         <br></br>

         <h1>Address</h1>
         <div>
            {address.title} {address.zip}
         </div>
         <br></br>
         <button onClick={() => setAddress({ ...address, zip: 23132 })}>
            change address
         </button>
         {/*
            <button onClick={() => setAddress({ title: "Ankara" })}>
               change address
            </button>
            böyle yaparak direkt veriyi değiştireceğim için zip verisi gider.
            O yüzden yine ... kullanıyoruz ve ardından değiştirmek istediğimiz yeri yazıyoruz bu sayede kalmasını istediğimiz şeyler kalıyor.
            setAddress({ ...address, zip: 23132 }
         */}
         <hr />
         <br></br>
         <br></br>
         <br></br>

         <div style={{ backgroundColor: "pink" }}>{userName}</div>
         <button onClick={() => changeUserName()}>Click</button>
         <br></br>
         <br></br>
         <br></br>
      </div>
   );
}

//* componentin herhangi bir anında değerinin değişme potansiyeli olan bir veri state olarak tanımlanır ve bu state değiştiği anında da ilgili component render edilerek değişiklik ekrana yansıtılmış olur.

export default App;
