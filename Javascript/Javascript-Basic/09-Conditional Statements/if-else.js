//! Conditional Statements

const firstName = "Mustafa";
const age = "17";
const isStudent = false;
const school = "high school";

//* === kullanmaya özen göster.
if (firstName === "Mustafa") {
    console.log("Merhaba Mustafa");
}
if (age === "20") {
    console.log("Yasiniz 20");
}
//* age == 20 yaparsam , doğru kabul edip if e girecek , ama ben age === 20 dersem tip kontrolüde yapmış oluruz ve age == 20 ifadesi yanlış olur cünkü 20 integer "20" string bir değişkendir.

if (isStudent) {
    console.log("Merhaba Ogrenci");
} else {
    console.log("Merhaba Adam");
}

if (age >= 18) {

    if (school == "university" || school == "high school") {
        console.log("ehliyet alabilirsiniz");
    } else {
        console.log("egitim durumunuz yetersiz")
    }
} else {
    console.log("ehliyet alamazsiniz..")
}

if (age > 0 && age < 12) {
    console.log(`${firstName} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${firstName} is a teenager`);
} else {
    console.log(`${firstName} is an adult`);
}

//* undefined
// let id = 5;

// Burda bir değişkenin var olup olmadığını kontrol edebiliriz.
if (typeof id != "undefined") {
    console.log("id : " + id);
} else {
    console.log("no id");
}