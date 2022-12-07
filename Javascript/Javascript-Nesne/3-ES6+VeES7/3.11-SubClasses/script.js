//! Sub Classes

//? ES5
function PersonES5(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
PersonES5.prototype.sayHi = function() {
    return `Hello I'm ${this.firstName} ${this.lastName}`;
}

function CustomerES5(firstName, lastName, phone, username) {
    PersonES5.call(this, firstName, lastName);
    this.phone = phone;
    this.username = username;
}

CustomerES5.prototype = Object.create(PersonES5.prototype);
CustomerES5.prototype.constructor = CustomerES5;
var customer = new CustomerES5("Tunahan", "Karyagdiola", 123456, "Than");
// console.log(customer);
// console.log(customer.sayHi());

// console.log("********************************");

//? ES6
class PersonES6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi() {
        return `Hello I'm ${this.firstName} ${this.lastName}`;
    }
}

class CustomerES6 extends PersonES6 {
    constructor(firstName, lastName, phone, username) {
        super(firstName, lastName);
        this.phone = phone;
        this.username = username;
    }
    static getTotal() {
        return 1000;
    }
}

let customer1 = new CustomerES6("Atakan", "Can", 123456, "Zedeleyici");
// console.log(customer1);
// console.log(customer1.sayHi());
// console.log(CustomerES6.getTotal());

console.log(customer1.firstName);