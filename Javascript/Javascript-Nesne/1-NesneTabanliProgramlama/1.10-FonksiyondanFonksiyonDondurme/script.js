//* Functions that return functions

function question(hobby) {

    switch (hobby) {

        case "car":
            return function(name) {
                console.log(name + " do you have a car?");
            }
            break;

        case "book":
            return function(name) {
                console.log(name + " what is your favorite book?");
            }
            break;

        case "software":
            return function(name, type) {
                console.log(name + " are you insterested in " + type + " ?");
            }
            break;

        default:
            return function(name) {
                console.log(name + " how are you?");
            }
            break;
    }
}

var carQuestion = question("car");
carQuestion("Mustafa");
carQuestion("Emel");

var bookQuestion = question("book");
bookQuestion("Sena");
bookQuestion("Tunahan");

var softwareQuestion = question("software");
softwareQuestion("Mustafa", "nodejs");
softwareQuestion("Atakan", "angular");