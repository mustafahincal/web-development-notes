let trafigeCikis = new Date(2019, 5, 20);
let now = new Date();
var control = now.getFullYear() - trafigeCikis.getFullYear();
console.log(control);

if (control >= 1 && control < 2) {
    console.log("1.Bakım zamanınız gelmiştir , aracınızı bakıma götürün.");
} else if (control >= 2 && control < 3) {
    console.log("2.Bakım zamanınız gelmiştir , aracınızı bakıma götürün.");

} else if (control >= 3 && control < 4) {
    console.log("3.Bakım zamanınız gelmiştir , aracınızı bakıma götürün.")
} else {
    console.log("bilinmeyen bir süre");
}