const person1 = {
    firstName: "Mustafa",
    lastName: "Hıncal",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName: function(value) {
        var parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person1.getFullName());
person1.setFullName("Tunahan Karyağdiola");
console.log(person1.getFullName());
console.log(person1);

console.log("*********************************");

const person2 = {
    firstName: "Atikın",
    lastName: "Can",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        var parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person2.fullName);
person2.fullName = "Delphici Raclabcı Turan";
console.log(person2.fullName);
console.log(person2);

console.log("*********************************");

const person3 = {
    firstName: "Uğur",
    lastName: "Böceği",
}

Object.defineProperty(person3, "fullName", {
    get: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    set: function(value) {
        var parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person3, "age", {
    value: 50,
    writable: true
})
person3.age = 55; //? atayabilmem için writable: true olması gerekir , default olarak false gelir.

console.log(person3.fullName);
person3.fullName = "Ahmet Köçek";
console.log(person3.fullName);
console.log(person3);

// Object.defineProperty(person, "fullName", {
//     get() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     set(value) {
//       const parts = value.split(" ");
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     },
//   });