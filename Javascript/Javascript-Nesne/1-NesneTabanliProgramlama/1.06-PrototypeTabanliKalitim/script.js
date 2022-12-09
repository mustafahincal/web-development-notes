//! Prototypal Inheritance

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2022 - this.yearOfBirth;
}

let Teacher = function(name, yearOfBirth, job, subject) {
    // this.name = name;
    // this.yearOfBirth = yearOfBirth;
    // this.job = job;              bunların yerine;
    // this.subject = subject;

    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}

console.log(Teacher.prototype.constructor)

//* Inherit the Person prototype methods

Teacher.prototype = Object.create(Person.prototype);
//? Yukardaki işlemi yaptıktan sonra Teacher.prototype.constructor Person'nun constructor'ını gösterir.
console.log(Teacher.prototype.constructor)

//? set Teacher constructor
Teacher.prototype.constructor = Teacher;
console.log(Teacher.prototype.constructor)

Teacher.prototype.greeting = function() {
    return "hello my name is " + this.name;
}


let emel = new Teacher("emel", 2000, "teacher", "math");

console.log(emel);
console.log(emel.calculateAge());
console.log(emel.greeting());

let yigit = new Person("yigit", 2010, "student");

console.log(yigit);
console.log(yigit.calculateAge());
// console.log(yigit.greeting());
//? yigit nesnesi greeting methodunu çağıramaz.