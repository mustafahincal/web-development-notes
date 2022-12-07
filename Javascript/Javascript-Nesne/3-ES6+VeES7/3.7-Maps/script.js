//! Maps : Key/value pairs (collection)

let val;

const numbers = new Map();
numbers.set(1, "one");
numbers.set("2", "two");
numbers.set(3, 3);
numbers.set("four", "four");

val = numbers;
val = numbers.get(1); //* ilk verdigimiz değerler key değerleridir, ona göre işlem yaparız.
val = numbers.get('2');
val = numbers.size;
val = numbers.has(3);
val = numbers.delete(3);
val = numbers.has(3);
//numbers.clear; //* tüm elemanları siler

console.log(val);

for (var [key, value] of numbers) {
    console.log(key + " = " + value);
}
for (var [key, value] of numbers.entries()) {
    console.log(key + " = " + value);
}
for (var key of numbers.keys()) {
    console.log(key);
}
for (var value of numbers.values()) {
    console.log(value);
}

numbers.forEach(function(key, value) {
    console.log(key + " = " + value);
})

console.log("******************************");

var first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
])
var second = new Map([
    [4, "four"],
    [5, "five"],
])

var merged = new Map([...first, ...second]);
console.log(merged);