//* nodejs yapısı kurmak için;
//? 1) npm init fileName -y
//? 2) create index.js
//? 3) write codes
//? 4) node index.js diyerek çalıştır
//? 5) veya package.json içinde scripts içine "start":"node index.js" diyerek ; npm run start ile çalıştır.
//? 6) npm install packageName
//? 7) import veya require ile paketi dosyaya dahil et.
//? 8) import ile yapmak için type module olmalı.

//! let slugify = require("slugify");
//* normal de bu şekilde kullanabilirim
//* ama artık ES6 ile gelen import keyword'ünü kullanabiliriz.
//* kullanmak için package.json da "type":"module" tanımını yapmam gerekli.

//! import slugify from "slugify";

// let text = "some string values";
// let msg = slugify(text);
// msg = slugify(text, "*");
// console.log(msg);

//? ******************** /

// import sum from "./myModule.js";
// console.log(sum(2, 5));

//? ******************** /

// import { sum, hello } from "./myModule.js";
// console.log(sum(2, 5));
// hello("Mustafa");

//? ******************** /

// import { sum, hello, subs } from "./myModule.js";
// console.log(sum(2, 5));
// console.log(subs(5, 2));
// hello("Mustafa");

//? ******************** /
//* default olarak export edilen bir function'ı süslü parantezler içine almıyoruz . Aynı zamanda default olarak geldiyse ismi aynı olmak zorunda değil zaten 1 tane export default edilebilir.

// import topla, { subs, hello } from "./myModule.js";
// console.log(topla(2, 5));
// console.log(subs(5, 2));
// hello("Mustafa");

//? ******************** /
//* sadece function değil her veri tipini dışa aktarabiliriz.

// import { text, user, users } from "./myModule.js";

// console.log(text);
// console.log(user);
// console.log(users);

//? *****************/
//* default olarak export edilen bir function'u import ettik.

// import hi from "./myModule.js";
// hi("Mustafa");

//? *****************/
//* modülümden export edilen şeyleri topluca bir yerde tutabilirim

import * as Utils from "./myModule.js";

Utils.sayHi();
console.log(Utils.user);
console.log(Utils.default);
