//* setTimeOut vereceğimiz süre sonunda 2000ms(2sn) function'u çalıştırır.
// setTimeout(() => {
//    console.log("Merhaba");
// }, 2000);

//* setInterval vereceğimiz sürede bir function'u çalıştırır.
// setInterval(() => {
//    console.log("Merhaba");
// }, 2000);

//? **********************/
//* bir function'a başka bir function'u parametre olarak gönderebilirim.
// const sayHi = (fc) => {
//    fc();
// };
// sayHi(() => {
//    console.log("Hello");
// });

//? **********************/
//* fetch ile herhangi bir veri kaynağından veri çekebiliriz
import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//    .then((data) => data.json())
//    .then((users) => console.log(users));

//* fetch'den zaten promise geliyor , onu then ile yakalayıp datayı elde ettik ,ilk gelen data json tipinde değil , data.json() diyerek onu json'a çeviriyoruz ancak promise nesnesi döndürüyor . Onuda tekrar then ile yakalayarak verileri elde ediyoruz.

//* burda önce users'ları sonra posts'ları çeksin diye böyle iç içe yazdık.
//* bunlar asenkron işlem olduğu için, ayrı ayrı yazarsam gelme sıraları farklı olabilir, biri 1sn de biri 5sn de cevap verebilir , ben eğer birinin önceliği olsun istersem önce o çıkmalıysa ona göre yapıyı kurmalıyım.
//* aşağıdaki yapı biraz daha büyürse karmaşıklığa yol acabilir o yüzden biz daha iyisini kuracağız => async-await . . . 

// fetch("https://jsonplaceholder.typicode.com/users")
//    .then((data) => data.json())
//    .then((users) => {
//       console.log("Users yuklendi! ", users);
//       fetch("https://jsonplaceholder.typicode.com/posts/1")
//          .then((data) => data.json())
//          .then((post1) => {
//             console.log("Post yuklendi! ", post1);
//             fetch("https://jsonplaceholder.typicode.com/posts/1")
//                  .then((data) => data.json())
//                  .then((posts2) => {
//                  console.log("Post2 yuklendi! ", posts2);
//          });
//          });
//    });

//? **********************/
//* await koyduğumuz satırın işi bitmeden diğer satıra geçilmiyor.
//* await  .then işlevi görüyor gibi de bi şey burada. Normal fetch de promise dönerken await fetch(...) ' den promise dönmüyor.
//* yukardaki kodun yaptığı işlemin aynısını yapıyor ve daha kısa ve anlaşılır.

// async function getData(number) {}
// const getData = async function (number) {};
// const getData = async (number) => {};
async function getData(){

    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    
    console.log("users : ",users);
    console.log("post1 : ",post1);
    console.log("post2 : ",post2);
}

getData();

//* eğer ben bir fonksiyon istemiyorum direkt çalışsın dersek , immadiate functions (() => {})(); türünde yazabiliriz , yine async getirerek.

// (async function(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    
//     console.log("users : ",users);
//     console.log("post1 : ",post1);
//     console.log("post2 : ",post2);
// })();

// (async () => {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    
//     console.log("users : ",users);
//     console.log("post1 : ",post1);
//     console.log("post2 : ",post2);
// })();