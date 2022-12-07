//! Arrays in ES6

const boxes = document.querySelectorAll(".box");


//? ES5
// let boxesES5 = Array.prototype.slice.call(boxes); //* nodelist'i diziye çevirdik. nodelist'de de foreach kullanabiliriz.
// boxesES5.forEach(function(box) {
//     box.style.backgroundColor = "green";

// })

//? ES6
// //* Array.from(boxes) ifadesi direk bize bir dizi veriyor.
// Array.from(boxes).forEach(box => box.style.backgroundColor = "pink");


//? ES5
// let boxesES5 = Array.prototype.slice.call(boxes);
// for (let i = 0; i < boxesES5.length; i++) {
//     if (boxesES5[i].className == "box blue") {
//         continue;
//     }
//     boxesES5[i].style.backgroundColor = "blue";
//     boxesES5[i].textContent = "I'm Changed";
// }

//? ES6
// let boxesES6 = Array.from(boxes);
// for (let box of boxesES6) {
//     if (box.className == "box blue") {
//         continue;
//     }
//     box.textContent = "I'm Changed";
//     box.style.backgroundColor = "blue";
// }


//! from

// let arr = Array.from("Modern Javascript");
// console.log(arr); //* boşluklar dahil olmak üzere tüm karakterleri bir diziye çevirdi.

const products = [
    { name: "Samsung S8", price: 3000 },
    { name: "Samsung S8", price: 4000 },
    { name: "Samsung S7", price: 2000 },
    { name: "Samsung S6", price: 1000 },
]

console.log(Array.from(products, prd => prd)); //* [{…}, {…}, {…}]
console.log(Array.from(products, prd => prd.name)); //* ['Samsung S8', 'Samsung S7', 'Samsung S6']
console.log(Array.from(products, prd => prd.price)); //* [3000, 2000, 1000]
console.log(Array.from(products, prd => prd.price == 3000)); //* [true, false, false]
console.log(products.find(prd => prd.name == "Samsung S8")); //* {name: 'Samsung S8', price: 3000}
console.log(products.filter(prd => prd.name == "Samsung S8")); //* [{…}, {…}] object dizisi döndürür.
console.log(products.findIndex(prd => prd.price == 4000)); //* 1 , eğer yoksa -1 döndürür.


let numbers = ["a", "b", "c"];
//* elemanların key ve value değerleri vardır

//* entries key(index) ve value değerlerini beraber tutar
let entries = numbers.entries();
for (let i of entries) {
    console.log(i);
}
//* keys sadece index'leri tutar.
let keys = numbers.keys();
for (let i of keys) {
    console.log(i);
}

//* values sadece value'leri tutar.(diziyi normal yazdırmakla aynı şey)
let values = numbers.values();
for (let i of values) {
    console.log(i);
}

//! Array prototype diye araştırarak diğer method'lara da ulaşabiliriz.