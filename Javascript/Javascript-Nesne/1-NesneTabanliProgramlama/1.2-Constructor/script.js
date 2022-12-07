// let yigit = {
//     name: "yigit",
//     yearOfBirth: "2010",
//     job: "student"
// }

// let Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     this.calculateAge = function() {
//         return 2018 - this.yearOfBirth;
//     }

//     console.log(this);

// }

function Person(name, yearOfBirth, job) {
    var name = name;
    //? this ile tanımlarsak public ; var ile tanımlarsak private gibi düşünebiliriz.
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function() {
        return 2018 - this.yearOfBirth;
    }

    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(value) {
            this.name = value;
        }
    })

    console.log(this);

}

let yigit = new Person("yigit", 2010, "student");
let merve = new Person("merve", 2001, "engineer");

console.log(yigit);
console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());

console.log("***************");

console.log(merve.name);
console.log(merve.yearOfBirth);
console.log(merve.job);
console.log(merve.calculateAge());