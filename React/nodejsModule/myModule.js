//* kendi modülümüzü oluşturalım
//* başka bir dosyadan import edebilmemiz için dışarıya açmamız gerekir , export ediyoruz.
//* export default functionName;  farklı kullanımları aşağıda verilmiştir.

// function sum(a, b) {
//    return a + b;
// }

// const sum = function (a, b) {
//    return a + b;
// };

// const sum = (a, b) => {
//    return a + b;
// };

// export default sum;
// sadece bir tane function export default edebilirim , birden fazla etmek istersem ;

//? ************************ */

// export const sum = (a, b) => a + b;

// export const hello = () => {
//    console.log("hello");
// };

//? ********************** */

// const sum = (a, b) => a + b;

// const hello = (name) => {
//    console.log(`hello ${name}`);
// };

// export { sum, hello };

//? *********************

// const sum = (a, b) => a + b;

// const hello = (name) => {
//    console.log(`hello ${name}`);
// };

// const subs = (a, b) => a - b;

// export { sum, hello, subs };

//? *********************
//* sadece 1 tane default function export edebiliriz , normal export istediğimiz kadar.

// const sum = (a, b) => a + b;

// export const hello = (name) => {
//    console.log(`hello ${name}`);
// };

// export const subs = (a, b) => a - b;

// export default sum;

//? ******************** /
//* sadece function değil her veri tipini dışa aktarabiliriz.

// export const text = "Ben bir text'im ve dışarıya aktarılabilirim";
// export const user = { name: "Mustafa", surname: "Hıncal" };
// export const users = [
//    { name: "Tunahan", surname: "Karyagdiola" },
//    { name: "Atakan", surname: "Can" },
// ];

//? *****************/
//* default olarak export edeceksek böyle başına getirebiliriz , isim vermeden.

// export default (name) => {
//    console.log(`Selamün Aleyküm ${name}`);
// };

// export default function hi(name) {
//    console.log(`Selamün Aleyküm ${name}`);
// }

//? *****************/
//* buradan export ettiğim şeyleri index.js dosyamda topluca import edebilirim.

// const whoAmI = "Mustafa";

// const sayHi = function (name = "mustafa") {
//    console.log(`hello ${name}`);
// };

// const user = {
//    name: "Mustafa",
//    surname: "Hıncal",
// };

// export default whoAmI;
// export { sayHi, user };
