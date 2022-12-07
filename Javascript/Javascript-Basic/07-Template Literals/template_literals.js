//! Template Literals

const fullName = "Mustafa Hıncal";
const city = "Konya";
const yearOfBirth = 2001;

let val;
let val2;
let val3;

val = "my name is " + fullName +
    " I'm " + (2021 - yearOfBirth) + " years old" +
    " and I live in " + city;

//* ternary operator
val2 = `my name is ${fullName} I'm ${2021-yearOfBirth} years old and I live in ${city}`;

val3 = `my name is ${fullName} I'm ${(2021-yearOfBirth>=18)?"over 18":"under 18"} years old and I live in ${city}`;

// eğer ( ) değer true ise soru işaretinden sonra gelen ilk durum gercekleşcek.


console.log(val);
console.log(val2);
console.log(val3);