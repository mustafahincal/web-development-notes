//! switch statements

let category = "telefon";

switch (category) {
    case "telefon":
        console.log("telefon kategorisi");
        break;

    case "bilgisayar":
        console.log("bilgisayar kategorisi");
        break;

    default:
        console.log("yanlıs kategori");
        break;
}


let day;

switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Sali";
        break;
    case 3:
        day = "Carsamba";
        break;
    case 4:
        day = "Persembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    default:
        console.log("wrong choice");

}
console.log(`Bugün günlerden ${day} .`);

switch (new Date().getDay()) {
    case 0:
    case 6:
        day = "Hafta sonu";
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = "Hafta içi";
        break;
}

console.log(`Bugün ${day}`);



const age = 13;
const firstName = "Mustafa"

switch (true) {
    case (age >= 0 && age <= 12):
        console.log(`${firstName} is a child`);
        break;
    case (age >= 13 && age <= 19):
        console.log(`${firstName} is a teenager`);
        break;
    default:
        console.log(`${firstName} is an adult`);


}