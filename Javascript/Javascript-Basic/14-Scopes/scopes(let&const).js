//! Scopes

//* Global Scopes
let name = "Mustafa";
let age = 35;

console.log("function içine girmeden önceki name ve age : ", name, age);

function logName() {
    let name = "Ali";
    age = 45;
    console.log("function scope  ", name, age);
}
logName();
console.log("function içine girip cıktıkdan sonraki name ve age : ", name, age);
//? Fonksiyonlar kendi scopelarını oluşturur.Yani fonksiyon içinde oluşturduğum bir age=12; değişkenini dışarda yazdıramam , tanımlanmamış kabul edilir.

console.log("if block'una girmeden önceki age: ", age);
if (true) {
    let age = 30;
    console.log("block scope", name, age);
}
console.log("if block'una girip cıktıkdan sonraki age : ", age);
//? Block'lar yeni scope oluşturmaz , var olan değişkeni direk değiştirir.

console.log("***********************");

//*  ES6 ile gelen let ve const block scope oluşturur , yani if in içinde oluşturduklarımızı dışarda kullanamayız , ama var ile oluşturursak dışarda kullanabiliriz.

if (true) {
    var model = "Opel";
    let year = 2010;
    const color = "white";
    console.log("block scope2 ", model, year, color);
}
console.log(model);

var i = 1;
for (let i = 0; i < 10; i++) {
    console.log("i : ", i);
}
// let i dediğim için sadece block içinde artacak , for döngüsü bittiğinde deperi tekrar 1 e dönecektir.

console.log(i);







//* Local Scopes