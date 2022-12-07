//! Sets (Collection - Unique value)

let val;
var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); //* 2 değeri varken bir daha eklemez.
mySet.add("two");
mySet.add({ a: 1, b: 2 });

var obj = { a: 1, b: 2 };
mySet.add(obj); //* object içerikleri ama adresleri farklı olduğu için ekleyebiliriz.

val = mySet.has(1);
val = mySet.size;
mySet.delete(1);

console.log(val);
console.log(mySet);

for (let item of mySet) {
    console.log(item);
}

for (let key of mySet.keys()) {
    console.log(key);
}
for (let value of mySet.values()) {
    console.log(value);
}
//* set'lerde key ve value değerleri aynıdır.

console.log(mySet);
console.log(Array.from(mySet));
console.log((Array.from(mySet))[1]);


let mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2);

//! intersect
var intersect = new Set(Array.from(mySet).filter(x => mySet2.has(x)));
//* mySet ve mySet2 de ortak olan elemanları intersect içine atıyoruz.
// var intersect = new Set([...mySet].filter(x => mySet2.has(x)));
console.log(intersect);

//! difference
var difference = new Set([...mySet].filter(x => !mySet2.has(x)));
console.log(difference);