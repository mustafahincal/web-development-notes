//* Person Constructor
let Person = function(name) {
    this.name = name;
}

Person.prototype.introduce = function() {
    return "Hello I'm " + this.name;
}

let mahmut = new Person("mahmut");
console.log(mahmut);

console.log("*************");

//* Student Constructor
let Student = function(name, number) {
    Person.call(this, name);
    this.number = number;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function(lesson) {
    return "I'm studying " + lesson;
}

let mustafa = new Student("mustafa", 123);
console.log(mustafa);
console.log(mustafa.introduce());
console.log(mustafa.study("math"));

console.log("*************");

//* Teacher Constructor
let Teacher = function(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function() {
    return "I'm teaching " + this.branch;
}

let tunahan = new Teacher("tunahan", "english");

console.log(tunahan);
console.log(tunahan.introduce());
console.log(tunahan.teach());

console.log("*************");

//* HeadMaster Constructor
let HeadMaster = function(name, branch) {
    Teacher.call(this, name, branch);
}

HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;

HeadMaster.prototype.shareTask = function() {
    return "I'm sharing tasks";
}

let atakan = new HeadMaster("atakan", "philosophy");

console.log(atakan);
console.log(atakan.introduce());
console.log(atakan.teach());
console.log(atakan.shareTask());