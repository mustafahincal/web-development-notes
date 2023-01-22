import { useState, useEffect } from "react";
function Notes() {
   const [number, setNumber] = useState(0);
   const [name, setName] = useState("Mustafa");

   useEffect(() => {
      console.log("state güncellendi");
   });

   useEffect(() => {
      console.log("component mount edildi");
   }, []);

   useEffect(() => {
      console.log("number state güncellendi");
   }, [number]);

   useEffect(() => {
      console.log("number veya name state güncellendi");
   }, [number, name]);

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
//* useEffect , component her render edildiğinde çalışır. componentDidMount gibi çalışmaktadır. Aslında her render işlemi sonrası çalışabildiği gibi bizim belirttiğimiz değişkenlerin değişmesi sonrasında da çalışabilir ya da sadece ilk render işlemi sonrası çalışabilir.

//* Bir component mount edildi demek de componentin DOM'a yerleştirilmesi, browser da görünmesi demek.
/*
   useEffect(() => {
      console.log("state güncellendi");
   });   her render işleminden sonra çalışacaktır.

   useEffect(() => {
      console.log("component mount edildi");
   }, []);     []  yapıp boş bırakırsak , sadece ilk render işleminden sonra çalışır demek.

   useEffect(() => {
      console.log("number state güncellendi");
   }, [number]);  sadece number state'i güncellendiği zaman çalışır.

   useEffect(() => {
      console.log("number veya name state güncellendi");
   }, [number, name]);  number veya name state'leri güncellendiği zaman çalışır.
*/

//* useState , useEffect bunlar herhangi bir if içinde bulunmamalılar hata verir.
