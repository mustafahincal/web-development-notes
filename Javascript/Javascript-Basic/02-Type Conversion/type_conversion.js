//! Tür Dönüşümü

let num1 = "5";
let num2 = "10";
let total = num1 + num2;
// number değilde string olarak tanımladık.

console.log(total);
// sayısal olarak toplamak yerine yan yana yazdırır ve sonuc 510 olur.
console.log(typeof num1);

num1 = Number("5");
num2 = Number("10");
total = num1 + num2;
// number ile number türüne çevirdik.

console.log(total);
// sayısal olarak toplar ve sonuc 15 olur.
console.log(typeof num1);



//? number to string
let val1=25;
console.log(typeof val1);
console.log(typeof (val1.toString()));
val1 = String(10);


console.log(typeof val1);
console.log(typeof val1);
console.log(val1.length);
// karakter uzunlugunu 2 olarak verecektir çünkü string kabul etti.

//? bool to string
let val2;
val2 = String(true);

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

//? date to string
let val3;
val3 = String(new Date().getFullYear());

console.log(val3);
console.log(typeof val3);
console.log(val3.length);

//? array to string
let val4;
val4 = String([1, 2, 3, 4]);

console.log(val4);
console.log(typeof val4);
console.log(val4.length);
// uzunluğunu virgüllerini de sayarak 7 karakter söyler.

//? toString();
let val5;
val5 = (10).toString();
val5 = (false).toString();


console.log(val5);
console.log(typeof val5);
console.log(val5.length);

//? string to number
// normal string bir ifadeyi cümleyi ve bir diziyi number a ceviremeyiz .
let val6;
val6 = Number("10.6");

console.log(val6);
console.log(typeof val6);
console.log(val6.length);
// burda bir sayının uzunluğu olmadığı için console'a undefined yazar.
//* val6 = parsInt("10");
//* val6 = parsFloat("10.6");  da kullanabiliriz.

//? bool to number
let val7;
val7 = Number(true);

console.log(val7); // true 'nin sayısal değeri 1 dir 1 yazar.
console.log(typeof val7);
console.log(val7.toFixed(2));
// toFixed ile değişkenin noktadan sonra 2 basamağını yazdırır.
