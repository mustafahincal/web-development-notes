//! Static Methods

// class PersonES6 {
//     constructor(name, job, yearOfBirth) {
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }

//     calculateAge() {
//         return 2018 - this.yearOfBirth;
//     }
//     static sayHi() {
//         console.log("Hello there");
//     }
// }
// let mustafa = new PersonES6("Mustafa", "Engineer", 2001);
// console.log(mustafa.calculateAge());
// console.log(mustafa);

// mustafa.sayHi(); //* static method'a nesne üzerinden erişemem
// PersonES6.sayHi(); //* static method'lara class üzerinden erişiyoruz

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const d1 = new Point(10, 10);
const d2 = new Point(20, 20);

console.log(Point.distance(d1, d2));