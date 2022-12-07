//!  Object Literals

let val;

let person = {
    firstName: "Mustafa",
    lastName: "Hıncal",
    age: 7,
    hobbies: ["music", "game"],
    address: {
        city: "Konya",
        country: "Turkiye"
    },
    getBirthYear: function() {
        return 2021 - this.age;
        // return 2021 - person.age;
        // return 2021 - 7;  this içinde bulundugu object'in yerini alır yani person.age demekle aynı şeydir.
    }
};

val = person.lastName;
val = person.firstName;
val = person.address;
val = person.hobbies.length;
val = person.hobbies[1];
val = person.address.city;
val = person.address["city"];
// ikisi aynı şeydir.

val2 = person.getBirthYear();

console.log(person);
console.log(typeof person);

console.log(val);
console.log(typeof val);

console.log(val2);
console.log(typeof val2);

let people = [

    { firstName: "Mustafa", lastName: "Hıncal" },
    { firstName: "Tunahan", lastName: "Karyağdı" },
    { firstName: "Ali", lastName: "Korkmaz" },
    { firstName: "Merve", lastName: "Çalışkan" },
]

val = people[1];
val2 = people[1].lastName;

console.log(people);

console.log(val);
console.log(val2);

for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}