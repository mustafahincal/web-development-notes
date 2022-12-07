//! Değişken Türleri

//* Primitive Types

// typeof değişkenimizin türünü yazdırır

//? String
let fullName = "Mustafa";
console.log(typeof fullName);

//? Number
let age = 20;
console.log(typeof age);
let money = 100.5;
console.log(typeof money);

//? Boolean
let isActive = true;
console.log(typeof isActive);

//? null
let job = null;
console.log(typeof job)

//? undefined
let car;
console.log(typeof car);


//* Reference Types-Objects

//? Array
let names = ["Ali", "Mustafa", "Mehmet"];
console.log(typeof names);
console.log(names)

//? Object
let address = {
    city: "Konya",
    country: "Türkiye"
}
console.log(typeof address);

//? Functions
var calculateAge = function() {
    return 0;
};
console.log(typeof calculateAge);