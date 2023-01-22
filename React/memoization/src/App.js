import "./App.css";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import Header from "./components/Header";

//* number'ı artırmak için kullandığım button'u Header componentine aktardık.
//* number her değiştiğinde App componenti render oluyor demiştik. Header'da herhangi bir değişiklik yok ancak o gönderdiğimiz increment fonksiyonu her render'da baştan oluştuğu için bir değişiklik gibi algılanıyor ve Header componenti'de render oluyor.
//* bizim yapmamız gereken gönderdiğimiz fonksiyonun değişmediğini her defasında aynı fonksiyon olduğunu söylemek.
//* bunun için useCallback kullanıyoruz.
function App() {
   const [text, setText] = useState(" ");
   const [number, setNumber] = useState(0);

   //? const increment = () => setNumber(number + 1);

   //* böyle yaparsam yine number her degistiğinde render olacağı için yine Header componenti bir değişiklik gibi algılıyor ve yine render oluyor.
   // const increment = useCallback(() => {
   //    setNumber(number + 1);
   // }, [number]);

   //* setNumber((prevState) => prevState + 1); , () içine vereceğimiz değer önceki durumu tutar, herhangi bir isim verebiliriz.
   const increment = useCallback(() => {
      setNumber((prevState) => prevState + 1);
   }, []);

   return (
      <div className="App">
         <Header increment={increment} />
         <h1>{number}</h1>

         <br />
         <br />

         <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
         ></input>
      </div>
   );
}

//! **********************************************************************************************

//* number her değiştiğinde App içerisindeki her şey render olduğundan dolayı doğal olarak Header componenti'de değişiklik olmamasına rağmen render ediliyor.
//* bunu Header'i export ettiğimiz yerde => export default React.memo(Header);  dersek bu sorunu çözmüş oluruz.
//* Eğer Header componentinde değiştirilmesi gereken bir yer olursa ozaman render edilir.

// function App() {
//   const [number, setNumber] = useState(0);

//   return (
//      <div className="App">
//         <Header />
//         <h1>{number}</h1>
//         <button onClick={() => setNumber(number + 1)}>Click</button>
//      </div>
//   );
// }

//! **********************************************************************************************

//* Header componentine number'i gönderiyorum, number'da olan herhangi bir değişiklikte Header render edilir.
//* Çünkü Header componentinin aldığı property'ler değişti.
// function App() {
//   const [number, setNumber] = useState(0);

//   return (
//      <div className="App">
//         <Header number={number} />
//         <h1>{number}</h1>
//         <button onClick={() => setNumber(number + 1)}>Click</button>
//      </div>
//   );
// }

//! **********************************************************************************************

//* Header componentine number'i gönderiyorum ancak number<5 iken hep 0 gitsin number>5 iken number'ın kendi gitsin
//* bu sefer Header componentinde 5'e kadar herhangi bir değişiklik olmayacağı için yine render edilmeyecek. number >= 5 olduğu andan itibaren component'de değişiklik olacağından render edilecek.
// function App() {
//   const [number, setNumber] = useState(0);

//   return (
//      <div className="App">
//         <Header number={number < 5 ? 0 : number} />
//         <h1>{number}</h1>
//         <button onClick={() => setNumber(number + 1)}>Click</button>
//      </div>
//   );
// }

//! **********************************************************************************************

//* number her arttığında güncelleme olduğu için App componenti render oluyor. Render olduğu için data object'de render oluyor normal olarak ve primitive bir tip olmadığı için, değişme oluyor. Yani data'nın bellek üzerindeki referansı değişiyor. Bu yüzden Header'a gönderdiğimiz data property'si değiştiği için Header componenti'de render ediliyor.
//* Çözüm 1) Eğer, const data = { name: "Mustafa" }; ifadesini function App() dışında bir yere yazabiliyorsak sorun çözülür.
//* Çözüm 2) useMemo kullanmak.

// function App() {
//   const [text, setText] = useState(" ");
//   const [number, setNumber] = useState(0);
//?  const data = { name: "Mustafa" };

//   //* kullanımı useEffect gibi, [] içine ne yazarsam o değiştiği zaman çalışacak. Bir şey yazmazsam sadece ilk render'da çalışacak
//   const data = useMemo(() => {
//      return { name: "Mustafa" };
//   }, []);

//    const data = useMemo(() => {
//     return { name: "Mustafa", number };
//  }, [number]);

//   //***************************** */

//   //* dersek eğer her render işleminde bu fonksiyon boşuna çalışıp duracak ve uygulamamızı yavaşlatacak.
//  const data2 = calculateObject();

//? ne kadar useEffect'e benzesede useEffect kullanamayız çünkü return işlemi var.
//   const data2 = useMemo(() => {
//      return calculateObject();
//   }, []);

//   return (
//      <div className="App">
//         <Header number={number < 5 ? 0 : number} data={data} />
//         <h1>{number}</h1>
//         <button onClick={() => setNumber(number + 1)}>Click</button>
//         <br />
//         <br />

//         <input
//            type="text"
//            value={text}
//            onChange={(e) => setText(e.target.value)}
//         ></input>
//      </div>
//   );
// }

// function calculateObject() {
//   console.log("calculating..");
//   for (let i = 0; i < 10000; i++) {}
//   console.log("calculating completed.");

//   return { name: "Mustafa" };
// }

//! **********************************************************************************************

export default App;
