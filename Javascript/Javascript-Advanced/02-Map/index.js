//* Map

//? map is collection of keyed data items, just like an Object. Main difference is that Map allows keys any type. You might say that we can use 1 or true to define object but it's not like that because when you write {true : "bool1"} the key true will be convert to string.

/*
 * new Map()
 * map.set(key,value)
 * map.get(key)
 * map.has(key)
 * map.delete(key)
 * map.clear()
 * map.size
 */

const map = new Map();

map.set("1", "str");
map.set(1, "num");
map.set(true, "bool1");
map.set(false, "bool2");
// Map(4) { '1' => 'str', 1 => 'num', true => 'bool1', false => 'bool2' }

console.log(map.get(1)); // num
console.log(map.get("1")); // str
console.log(map.get(true)); // bool1

const obj = {};
obj["1"] = "str";
obj[1] = "num";
console.log(obj); // { '1': 'num' }, obj[1] = obj["1"]

//* the objects can be key
const mapOfUsers = new Map();
const user = { name: "Mustafa", age: 21 };
mapOfUsers.set(user, 10);
console.log(mapOfUsers); // Map(1) { { name: 'Mustafa', age: 21 } => 10 }

//* map.entires(), map.values(), map.keys()
console.log(map.entries());
/* [Map Entries] {
      [ '1', 'str' ],
      [ 1, 'num' ],
      [ true, 'bool1' ],
      [ false, 'bool2' ]
    } */
console.log(map.values()); // [Map Iterator] { 'str', 'num', 'bool1', 'bool2' }
console.log(map.keys()); // [Map Iterator] { '1', 1, true, false }

for (const key of map.keys()) {
  console.log(key);
}
for (const key of map.values()) {
  console.log(key);
}
for (const key of map.entries()) {
  console.log(key);
}

[...map.keys()].forEach((key) => console.log(key));

[...map].forEach((item) => console.log(item));
/* 
[ '1', 'str' ]
[ 1, 'num' ]
[ true, 'bool1' ]
[ false, 'bool2' ] 
*/

[...map].forEach(([key, value]) => console.log("key : " + value));

//* map from object
//* array of [key,value] pairs
const map1 = new Map([
  ["1", "str"],
  [1, "num"],
  [true, "bool1"],
  [false, "bool2"],
]);
console.log(map1);

const obj1 = {
  name: "Mustafa",
  age: 21,
};
console.log(Object.entries(obj1)); // [ [ 'name', 'Mustafa' ], [ 'age', 21 ] ]

const map2 = new Map(Object.entries(obj1));
console.log(map2);

//* object from map
console.log(map2); // Map(2) { 'name' => 'Mustafa', 'age' => 21 }
console.log(map2.entries()); // [Map Entries] { [ 'name', 'Mustafa' ], [ 'age', 21 ] }
console.log(Object.fromEntries(map2.entries())); // { name: 'Mustafa', age: 21 }
console.log(Object.fromEntries(map2)); // { name: 'Mustafa', age: 21 }
