//* fetch işlemi için node-fetch kullanmıştık ; onun alternatifi olan axios kullanıcaz react'te genel olarak , farkı : .json() işlemine gerek kalmıyor.

import axios from "axios";
import fetch from "node-fetch";

// (async () => {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// })();

//* ama axios bir nesne döndürüyor o yüzden tanımlamamız biraz farklı olacak.
//* const { data } = ... dememiz gerekir ancak 3 kere data tanımlayamayacağımız için ; {data : posts} diyoruz.
// (async () => {
//     const {data : users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data : post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const {data : post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// })();

//? ******************* */
//* resolve : başarılı , reject : başarısız
//* bir promise resolve olduğunda .then ' e düşer , reject olduğunda .catch' e düşer.

// const getCommets = () => {
//     return new Promise((resolve,reject) => {
//         console.log("comments");
//         resolve();
//     })
// }
// getCommets().then(() => console.log("finish")).catch((e) => console.log(e));
//* console'da comments ve finish yazar.

//? ******************* */

// const getCommets = () => {
//     return new Promise((resolve,reject) => {
//         resolve("comments");
//     })
// }
// getCommets().then((data) => console.log(data)).catch((e) => console.log(e));

//? ******************* */

// const getCommets = (number) => {
//     return new Promise((resolve,reject) => {
//         if(number === 1){
//             resolve("başarılı");
//         }
//         reject("başarısız");
//     })
// }
// getCommets(2).then((data) => console.log(data)).catch((e) => console.log(e));

//? ******************* */

//! await kullandığımız function'larda ; async koymayı unutmayalım
// const getUsers = () => {
//     return new Promise(async (resolve,reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//         resolve(data);
//     })
// }

// const getPost = (postId) => {
//     return new Promise(async (resolve,reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + postId);
//         resolve(data);
//     })
// }

// getUsers()
// .then(data => console.log(data))
// .catch((e) => console.log(e));

// getPost(2)
// .then(data => console.log(data))
// .catch(e => console.log(e));

//* ancaaaak , biz function içinde await falan filan yaptık ama, bu function'lar da promise return ediyorlar onlara da bi işlem uygulamalıyız çünkü , bir çalıştırdığımda getusers önce gelirken diğer çalıştırmam da getpost gelebilir.

//? ******************* */

// const getUsers = () => {
//     return new Promise(async (resolve,reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//         resolve(data);
//     })
// }

// const getPost = (postId) => {
//     return new Promise(async (resolve,reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + postId);
//         resolve(data);
//     })
// }

// (async () => {
//     await getUsers()
//     .then(data => console.log(data))
//     .catch((e) => console.log(e));

//     await getPost(2)
//     .then(data => console.log(data))
//     .catch(e => console.log(e));
// })();

//* artık hep önce getUsers gelicek sonra getPost gelecek.

//? ************************ */
//* ben bu getUsers ve getPost'daki then'lerden de kurtulabilirim
//* await 2 işlevi var gibi düşünebiliriz hem bir işlem bitmeden diğerine geçirtmiyor hem de promise gelen yapıları .then gibi karşılıyor.

// const getUsers = () => {
//     return new Promise(async (resolve,reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//         resolve(data);
//     })
// }

// const getPost = (postId) => {
//     return new Promise(async (resolve,reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + postId);
//         resolve(data);
//     })
// }

// (async () => {
//     const users = await getUsers();
//     const post = await getPost(2);

//     console.log(users);
//     console.log(post);
// })();

//? ******************* */
//* await kullananarak .then' i kaldırdık yani .catch'i de kaldırdık.
//* o yüzden hata yönetimini try catch içine alarak yapacağız.

const getUsers = () => {
    return new Promise(async (resolve,reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        reject("bir sorun oluştu");
        //* hata döndürelim.
    })
}

const getPost = (postId) => {
    return new Promise(async (resolve,reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + postId);
        resolve(data);
    })
}

(async () => {
    try{
        const users = await getUsers();  //* burda hata gelince direk catch çalışacak.
        const post = await getPost(2);
    
        console.log(users); 
        console.log(post);
    }catch(e){
        console.log(e);
    }
    
})();

//? *************************/
//* promise'leri toplu bir şekilde çalıştırabilirim

// Promise.all([getUsers(),getPost(3)])
// .then(console.log)
// .catch(console.log);