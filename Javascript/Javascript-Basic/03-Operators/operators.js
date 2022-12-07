//! Operatörler

let val;
const a = 10;
const b = 5;
const c = 5;
var d = 3;

//* 1- Aritmetik Operatörler
val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++; // val'in degeri 3 olur cünkü atadıkdan sonra artırıyor.
val = ++d; // dersek önce artırıp sonra val değişkenine atar.
val = d--;
val = --d;


//* 2- Atama Operatörler
val = a;
val += a; // val = val + a;
val -= a; // val = val - a;
val *= a; // val = val * a;
val /= a; // val = val / a;
val %= a; // val = val % a;


//* 3- Karşılaştırma Operatörler
val = a == b; // false döndürür.
val = b == c; // true döndürür.
val = b === c; // 3 tane eşittir hem değer kontrolü yapar hem de type kontrolü yapar.
val = 5 == "5"; // burda true döndürür biri number biri string olmasına rağmen.
val = 5 === "5"; // false döndürür.
val = a != b; // true döndürür.
val = a < b;
val = a >= b;

//* 4- Mantıksal Operatörler

//? && (and)
val = (a > b) && (a < c);


//? || (or)
val = (a < b) || (a > c);


//? !(not)
val = !(a < b);

console.log(val);
console.log(typeof val);