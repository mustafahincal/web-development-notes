//! Loops in Array & Objects

let cars = ["bmw", "mercedes", "toyota"];
let people = [
    { firstName: "Mustafa", lastName: "Hıncal" },
    { firstName: "Salih", lastName: "Korkmaz" },
    { firstName: "Mehmet", lastName: "Can" }
];

//? Arrays
let i;
for (i = 0; i < cars.length; i++) {
    // console.log(`index : ${i}  value : ${cars[i]}`);
}

//? Objects
for (i = 0; i < people.length; i++) {
    //  console.log(people[i]);
}

//* for-in 

//? Arrays
let p;
for (p in cars) {
    //console.log(`index : ${p}  value : ${cars[p]}`);
}
// yukardakiyle tamamen aynı işlevi görüyor.


//? Objects
for (p in people) {
    //  console.log(people[p].lastName);
}


//* foreach

//? Arrays
cars.forEach(function(item) {
    console.log(item);
});


//? Objects
people.forEach(function(item) {
    console.log(item);
});


//* map : returns an array

let val = people.map(function(item) {
    return item.firstName + " " + item.lastName;
});

//console.log(val);


// bir dizideki sayilarin karelerinden oluşan başka bir dizi yarattık.
let numbers = [1, 5, 7, 3, 9, 23];

let num = numbers.map(function(n) {
    return n * n;
});
//console.log(num);