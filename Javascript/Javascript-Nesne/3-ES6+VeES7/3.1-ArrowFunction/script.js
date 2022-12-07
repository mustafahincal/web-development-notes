//! Arrow Functions

//* ES5
let welcomeES5 = function() {
    console.log("Hello from ES5");
};
welcomeES5();

//? with parameters
let multiplyES5 = function(x, y) {
    return x * y;
}
console.log(multiplyES5(10, 10));

let splitES5 = function(text) {
    return text.split(" ");
}
console.log(splitES5("Modern Javascript Kursu"));

//? object literals

let getProductES5 = function(id, name) {
    return {
        id: id,
        name: name
    }
}
console.log(getProductES5("1", "Samsung S8"));


//* ES6
let welcomeES6 = () => {
    console.log("Hello from ES6");
};
welcomeES6();


//? with parameters
let multiplyES6 = (x, y) => {
    return x * y;
}
console.log(multiplyES6(10, 10));

// let multiplyES6 = (x, y) => x * y;   tek satır yazacaksak parantezlere gerek yok.
// console.log(multiplyES6(10, 10));

let splitES6 = (text) => {
    return text.split(" ");
}
console.log(splitES5("Modern Javascript Kursu"));

// let splitES6 = text => text.split(" "); // tek parametre gelecekse paranteze de gerek yok.
// console.log(splitES5("Modern Javascript Kursu"));

//? object literals

let getProductES6 = (id, name) => ({
    id: id,
    name: name
});
console.log(getProductES6("1", "Iphone X"));

console.log("***************************************");


const phones = [
    { name: "Iphone 8", price: 3000 },
    { name: "Iphone X", price: 4000 },
    { name: "Iphone 10", price: 5000 },
    { name: "Iphone 11", price: 6000 },
];

//* ES5

//! map gönderilen object içindeki istedigimiz verileri dizi şeklinde return eder.
let pricesES5 = phones.map(function(phone) {
    return phone.price;
});

console.log(pricesES5);

//* ES6

let pricesES6 = phones.map(phone => phone.price);

console.log(pricesES6);


const arr = [1, 2, 3, 4, 6, 10, 20, 25, 55, 61, 79];

//* ES5
//! filter dizi içindeki elemanları bizim koyduğumuz kurala göre filtreleyip dizi şeklinde return eder.
let evenES5 = arr.filter(function(a) {
    return a % 2 == 1;
})
console.log(evenES5);

//* ES6
let evenES6 = arr.filter(a => a % 2 == 1);
console.log(evenES6);