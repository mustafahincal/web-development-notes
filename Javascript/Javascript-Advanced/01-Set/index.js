//* Set

/*
 * new Set()
 * set.add(value)
 * set.has(value)
 * set.delete(value)
 * set.clear()
 * set.size
 */

// const names = new Set();
// const setOfNames = new Set(["Mustafa", "Mehmet", "Ali"]);

/*
const setOfNames = new Set();
const names = ["Mustafa", "Mehmet", "Ali"];
names.forEach((name) => {
   setOfNames.add(name);
});
 */

const names = ["Mustafa", "Mehmet", "Ali"];
const setOfNames = new Set(names);

/* setOfNames.forEach((name) => {
  console.log(name);
}); */

for (const name of setOfNames) {
  console.log(name);
}

//*  can't be used high order functions with set, but if we use [...setName] then we can use the functions (filter,map, ..)
//! setOfNames.map((name) => console.log(name));
[...setOfNames].map((name) => console.log(name));

setOfNames.delete("Mustafa");
console.log(setOfNames.size);
console.log(setOfNames.has("Mustafa"));
console.log(setOfNames.has("Mehmet"));
setOfNames.clear();

//* elements must be unique, if we try to add same value it doesnt error, it's just dont add the value

setOfNames.add("Mustafa");
setOfNames.add("Mustafa");
console.log(setOfNames);

//* we can use set to clear multiple values in the array

const languages = [
  "Turkish",
  "English",
  "French",
  "Turkish",
  "French",
  "French",
];
console.log(languages);
console.log(new Set(languages));
console.log([...new Set(languages)]); //  output : [ 'Turkish', 'English', 'French' ]

//* union of sets
const a = [1, 2, 3, 4, 9];
const b = [2, 5, 8, 1, 3];
const c = [...a, ...b];
const setOfC = new Set(c);
console.log(setOfC); // output : Set(6) { 1, 2, 3, 4, 5, 8, 9 }

//* intersection of sets
const setOfB = new Set(b);
const d = a.filter((num) => setOfB.has(num));
const setOfD = new Set(d);
console.log(setOfD); // output : Set(3) { 1, 2, 3 }

//* difference of sets
const e = a.filter((num) => !setOfB.has(num));
const setOfE = new Set(e);
console.log(setOfE);
