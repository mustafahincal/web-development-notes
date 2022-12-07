//* Prototype

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2018 - this.yearOfBirth;
}

Person.prototype.getName = function() {
    return this.name;
}

let emel = new Person("emel", 1999, "teacher");

let yigit = new Person("yigit", 2001, "student");

console.log(emel);
console.log(emel.calculateAge());
console.log(emel.getName());

console.log(yigit);
console.log(yigit.calculateAge());
console.log(yigit.getName());

Person.prototype.lastName = "turan";

//? emel nesnesi kendi içinde name adında bir değişkene sahip mi? 
console.log(emel.hasOwnProperty("name")); //! True

//? emel nesnesi kendi içinde lastname adında bir değişkene sahip değil. lastname prototype içinde.
console.log(emel.hasOwnProperty("lastname")); //! False

//? lastname değişkeni prototype içinde;  emel ve yigit içinde aynı değere sahip.
console.log(emel.lastName); //! turan
console.log(yigit.lastName); //! turan