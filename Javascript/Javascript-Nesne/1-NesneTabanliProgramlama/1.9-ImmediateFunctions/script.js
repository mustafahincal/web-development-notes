//* Immediate Functions

function welcome() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var message = "Welcome . Today is " + days[today.getDay()];

    return message;
}

// console.log(welcome());

//? program çalışınca sadece 1 kere çalışacak.

(function() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var message = "Welcome . Today is " + days[today.getDay()];

    console.log(message);
})();

(function(name) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var message = "Welcome " + name + " Today is " + days[today.getDay()];

    console.log(message);
})("Mustafa");